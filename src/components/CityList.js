export default function CityList({ $app, initialState, handleLoadMore, handleItemClick }) {
  this.state = initialState;
  this.$target = document.createElement('div');
  this.$target.className = 'city-list';

  this.handleLoadMore = handleLoadMore;
  this.handleItemClick = handleItemClick;

  $app.appendChild(this.$target);

  this.template = () => {
    let temp = `<div class="city-items-container">`
    if (this.state) {
      this.state.cities.forEach((element) => {
        temp += `
        <div class="city-item" id=${element.id}>
          <img src="${element.image}"></img>
          <div class="city-item-info">${element.city}, ${element.country}</div>
          <div class="city-item-score">⭐ ${element.total}</div>
        </div>
        `
      });
      temp += `</div>`;
    }
    return temp;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();
    this.$target.querySelectorAll('div.city-item').forEach((element) => {
      element.addEventListener('click', () => {
        this.handleItemClick(element.id);
      });
    });

    if (!this.state.isEnd) {
      const $loadMoreButton = document.createElement('button');
      $loadMoreButton.className = "add-items-btn";
      $loadMoreButton.textContent = "+ 더보기";
      this.$target.appendChild($loadMoreButton);

      $loadMoreButton.addEventListener('click', () => {
        this.handleLoadMore();
      });
    }
  };

  this.setState = (nState) => {
    this.state = nState;
    this.render();
  };

  this.render();
}