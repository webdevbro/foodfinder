import axios from "axios";
import Search from "./modules/Search";

/* CONTROLLERS */
/* global state of the app */
// - search object
// - current recipe object
// - shopping list object
// - liked recipes
const state = {};

const controlSearch = async () => {
  // 1. get query from view
  const query = "grill";
  if (query) {
    // 2. new search object and add to stage
    state.search = new Search(query);
    // 3. prepare UI for results

    // 4. search for recipes
    await state.search.getResults();
    // 5. render results on UI
    console.log(state.search.recipes);
  }
};

document.querySelector(".search").addEventListener("submit", event => {
  event.preventDefault();
  controlSearch();
});
