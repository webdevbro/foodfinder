class SearchView {
  constructor() {
    this.searchInput = document.querySelector(".search__field");
    this.searchList = document.querySelector(".results__list");
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

  /* render all results (array) */
  renderResults(recipes) {
    recipes.forEach(el => {
      let recipeItem = this.renderRecipe(el);
      this.searchList.insertAdjacentHTML("beforeend", recipeItem);
    });
  }
  clearInput() {
    setTimeout(() => {
      this.searchInput.value = "";
    }, 2000);
  }
  clearResults() {
    this.searchList.innerHTML = "";
  }
}

export default SearchView;
