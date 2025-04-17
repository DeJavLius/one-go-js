export default function Header() {
  this.$target = document.createElement('div');
  this.$target.className = 'header';

  this.template = () => { };

  this.render = () => { };

  this.setState = (nState) => {
    this.state = nState;
    this.render();
  };

  this.render();
}