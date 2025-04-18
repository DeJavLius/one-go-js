import Header from './components/Header.js';
import CityDetail from './components/CityDetail.js';
import RegionList from './components/RegionList.js';
import CityList from './components/CityList.js';

import { request, requestCityDetail } from './components/Api.js';

export default function App($app) {
  const getSortBy = () => {
    if (window.location.search) {
      return window.location.search.split('sort=')[1].split('&')[0]
    } else {
      return 'total';
    }
  };
  const getSearchWord = () => {
    if (window.location.search && window.location.search.includes('search=')) {
      return window.location.search.split('search=')[1];
    } else {
      return '';
    }
  };

  this.state = {
    startIndex: 0,
    sortBy: getSortBy(),
    searchWord: getSearchWord(),
    region: '',
    cities: '',
    currentPage: window.location.pathname,
  };

  const renderHeader = () => {
    new Header({
      $app,
      initialState: { sortBy: this.state.sortBy, searchWord: this.state.searchWord, currentPage: this.state.currentPage },
      handleSortChange: async (sortBy) => {
        const pageUrl = `/${this.state.region}?sort=${sortBy}`;
        history.pushState(null, null, this.state.searchWord ? pageUrl + `&search=${this.state.searchWord}` : pageUrl);
        const cities = await request(0, this.state.region, sortBy, this.state.searchWord);

        this.setState({
          ...this.state,
          startIndex: 0,
          sortBy: sortBy,
          cities: cities,
        });
      },
      handleSearch: async (searchWord) => {
        history.pushState(null, null, `/${this.state.region}?sort=${this.state.sortBy}&search=${searchWord}`);
        const cities = await request(0, this.state.region, this.state.sortBy, searchWord);

        this.setState({
          ...this.state,
          startIndex: 0,
          searchWord: searchWord,
          cities: cities,
        });
      },
    });
  };

  const renderRegionList = () => {
    new RegionList({
      $app,
      initialState: this.state.region,
      handleRegion: async (region) => {
        history.pushState(null, null, `/${region}?sort=total`);
        const cities = await request(0, region, 'total');
        this.setState({
          ...this.state,
          startIndex: 0,
          sortBy: 'total',
          region: region,
          searchWord: '',
          cities: cities,
        });
      },
    });
  };

  const renderCityList = () => {
    new CityList({
      $app,
      initialState: this.state.cities,
      handleLoadMore: async () => {
        const nStartIndex = this.state.startIndex + 40;
        const nCities = await request(nStartIndex, this.state.region, this.state.sortBy, this.state.searchWord);

        this.setState({
          ...this.state,
          startIndex: nStartIndex,
          cities: {
            cities: [...this.state.cities.cities, ...nCities.cities],
            isEnd: nCities.isEnd,
          }
        });
      },
      handleItemClick: async (id) => {
        const cityDetail = `/city/${id}`;
        history.pushState(null, null, cityDetail);
        this.setState({
          ...this.state,
          currentPage: cityDetail,
        });
      }
    });
  };

  const renderCityDetail = async (cityId) => {
    try {
      const cityDetailData = await requestCityDetail(cityId);
      new CityDetail({ $app, initialState: cityDetailData });
    } catch (error) {
      console.log(error)
    }
  };

  this.setState = (nState) => {
    this.state = nState;
    render();
  };

  const render = () => {
    const path = this.state.currentPage;
    $app.innerHTML = '';

    if (path.startsWith('/city/')) {
      const cityId = path.split('/city/')[1];

      renderHeader();
      renderCityDetail(cityId);
    } else {
      renderHeader();
      renderRegionList();
      renderCityList();
    }
  }

  window.addEventListener('popstate', async () => {
    const urlPath = window.location.pathname;
    const prevRegion = urlPath.replace('/', '');
    const prevSortBy = getSortBy();
    const prevSearchWord = getSearchWord();
    const prevStartIndex = 0;
    const prevCities = await request(prevStartIndex, prevRegion, prevSortBy, prevSearchWord);

    this.setState({
      ...this.state,
      startIndex: prevStartIndex,
      sortBy: prevSortBy,
      region: prevRegion,
      searchWord: prevSearchWord,
      cities: prevCities,
      currentPage: urlPath,
    });
  });

  const init = async () => {
    const path = this.state.currentPage;

    if (path.startsWith('/city/')) {
      render();
    } else {
      const cities = await request(this.state.startIndex, this.state.region, this.state.sortBy, this.state.searchWord);
      this.setState({
        ...this.state,
        cities: cities,
      });
    }
  };

  init();
}