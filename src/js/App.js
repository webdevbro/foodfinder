import axios from "axios";
import Search from "./modules/Search";
import Utils from "./modules/Utils";
import SearchView from "./views/SearchView";

let searchView = new SearchView();
let utils = new Utils();

/* CONTROLLERS */
/* global state of the app */
// - search object
// - current recipe object
// - shopping list object
// - liked recipes
const state = {};

const controlSearch = async () => {
  // 1. get query from view
  const query = searchView.getInput();
  if (query) {
    // 2. new search object and add to stage
    state.search = new Search(query);
    // 3. prepare UI for results
    searchView.clearInput();
    searchView.clearResults();
    utils.renderLoader(utils.searchParent);
    // 4. search for recipes
    await state.search.getResults();

    // 5. render results on UI
    utils.clearLoader();
    searchView.renderResults(state.search.recipes);
  }
};

document.querySelector(".search").addEventListener("submit", event => {
  event.preventDefault();
  controlSearch();
});
