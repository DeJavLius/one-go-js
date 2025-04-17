export default function RegionList() {
  this.$target = document.createElement('div');
  this.$target.className = 'region-list';

  this.template = () => { };

  this.render = () => { };

  this.setState = (nState) => {
    this.state = nState;
    this.render();
  };

  this.render();
}