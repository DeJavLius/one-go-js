import Header from './components/Header.js';
import CityDetail from './components/CityDetail.js';
import RegionList from './components/RegionList.js';
import CityList from './components/CityList.js';

import { request } from './components/Api.js';

export default function App($app) {
  this.state = {
    startIndex: 0,
    sortBy: '',
    searchWord: '',
    region: '',
    cities: '',
  };

  const header = new Header();
  const regionList = new RegionList();
  const cityList = new CityList({ $app, initialState: this.state.cities });
  const cityDetail = new CityDetail();

  this.setState = (nState) => {
    this.state = nState;
    cityList.setState(this.state.cities);
  };

  const init = async () => {
    const cities = await request(this.state.startIndex, this.state.region, this.state.sortBy, this.state.searchWord);
    this.setState({
      ...this.state,
      cities: cities,
    });
  };

  init();
}