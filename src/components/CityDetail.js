export default function CityDetail() {
  this.$target = document.createElement('div');
  this.$target.className = 'city-detail';

  this.template = () => { };

  this.render = () => { };

  this.setState = (nState) => {
    this.state = nState;
    this.render();
  };

  this.render();
}