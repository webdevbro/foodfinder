class SearchView {
  constructor() {
    this.searchInput = document.querySelector(".search__field");
    this.searchList = document.querySelector(".results__list");
    this.resultsPages = document.querySelector(".results__pages");
    this.events();
  }

  events() {}

  getInput() {
    return this.searchInput.value;
  }

  /* cut words on one line only */
  limitRecipeTitle(title, limit = 17) {
    const newTitle = [];
    if (title.length > limit) {
      title.split(" ").reduce((acc, curr) => {
        if (acc + curr.length <= limit) {
          newTitle.push(curr);
        }
        return acc + curr.length;
      }, 0);
      return `${newTitle.join(" ")} ...`;
    }
    return title;
  }

  /* print html function */
  renderRecipe(recipe) {
    const imagePath = "https://spoonacular.com/recipeImages/";
    const imageSize = "500x500";
    return `
    <li>
      <a class="results__link" href="#">
        <figure class="results__fig">
          <img src="${imagePath}${recipe.image}" alt="${recipe.title}" />
        </figure>
        <div class="results__data">
          <h4 class="results__name">${this.limitRecipeTitle(recipe.title)}</h4>
          <p class="results__author">Ready in ${
            recipe.readyInMinutes
          } minutes.</p>
        </div>
      </a>
    </li>
    `;
  }

  /* pagination */
  renderButtons(page, numResults, resPerPage) {
    const pages = Math.ceil(numResults / resPerPage);
    let button;
    if (page == 1 && pages > 1) {
      button = this.createButton(page, "next");
    } else if (page < pages) {
      button = `
        ${this.createButton(page, "prev")}
        ${this.createButton(page, "next")}
      `;
    } else if (page == pages && pages > 1) {
      button = this.createButton(page, "prev");
    }
    document
      .querySelector(".results__pages")
      .insertAdjacentHTML("afterbegin", button);
  }

  /* create pagination html */
  createButton(page, type) {
    return `
      <button class="btn-inline results__btn--${type}" data-goto="${
      type == "prev" ? page - 1 : page + 1
    }">
        <span>Page ${type == "prev" ? page - 1 : page + 1}</span>
        <svg class="search__icon">
          <use href="img/icons.svg#icon-triangle-${
            type == "prev" ? "left" : "right"
          }"></use>
        </svg>
      </button>
    `;
  }

  /* render all results (array) */
  renderResults(recipes, page = 1, resPerPage = 10) {
    // render results of current page
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;
    recipes.slice(start, end).forEach(el => {
      let recipeItem = this.renderRecipe(el);
      this.searchList.insertAdjacentHTML("beforeend", recipeItem);
    });
    // render pagination buttons
    this.renderButtons(page, recipes.length, resPerPage);
  }

  clearInput() {
    setTimeout(() => {
      this.searchInput.value = "";
    }, 2000);
  }
  clearResults() {
    this.searchList.innerHTML = "";
    this.resultsPages.innerHTML = "";
  }
}

export default SearchView;
