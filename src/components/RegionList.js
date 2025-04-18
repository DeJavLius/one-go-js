export default function RegionList({ $app, initialState, handleRegion }) {
  this.state = initialState;
  this.$target = document.createElement('div');
  this.$target.className = 'region-list';

  this.handleRegion = handleRegion;
  $app.appendChild(this.$target);

  this.template = () => {
    const regionList = [
      '🗺️ All',
      '🌏 Asia',
      '🌍 Africa',
      '🏛️ Europe',
      '🌎 Latin-America',
      '🛕 Middle-East',
      '🗽 North-America',
      '🏖️ Oceania'
    ];

    let temp = ``;

    regionList.forEach((element) => {
      let regionId = element.split(' ')[1];
      temp += `<div id=${regionId}>${element}</div>`;
    });

    return temp;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();
    if (this.state) {
      let $currentRegion = document.getElementById(this.state);
      $currentRegion && ($currentRegion.className = 'clicked');
    } else {
      document.getElementById('All').className = 'clicked';
    }

    const $regionList = this.$target.querySelectorAll('div');
    $regionList.forEach((element) => {
      element.addEventListener('click', () => {
        this.handleRegion(element.id);
      });
    });
  };

  this.setState = (nState) => {
    this.state = nState;
    this.render();
  };

  this.render();
}