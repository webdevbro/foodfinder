class Utils {
  constructor() {
    this.searchParent = document.querySelector(".results__list");
  }

  renderLoader(parent) {
    const loader = `
      <div class="loader">
        <svg>
          <use href="img/icons.svg#icon-cw"></use>
        </svg>
      </div>
    `;
    parent.insertAdjacentHTML("afterbegin", loader);
  }

  clearLoader() {
    const childLoader = document.querySelector(".loader");
    if (childLoader) {
      this.searchParent.removeChild(childLoader);
    }
  }
}

export default Utils;
