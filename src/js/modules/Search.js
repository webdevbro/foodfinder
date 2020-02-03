import axios from "axios";

class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const key = "6d13df9289644038af5d700970aacd8c";
    const url = "https://api.spoonacular.com/recipes/search?apiKey=";
    try {
      const res = await axios(`${url}${key}&q=${this.query}`);
      this.recipes = res.data.results;
    } catch (error) {
      alert(error);
    }
  }
}

export default Search;

/* https://api.spoonacular.com/recipes/search?apiKey= */
/* API KEY: 6d13df9289644038af5d700970aacd8c */
