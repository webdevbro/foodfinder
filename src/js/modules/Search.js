import axios from "axios";

class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const url = "https://api.spoonacular.com/recipes/search?apiKey=";
    const key = "6d13df9289644038af5d700970aacd8c";
    try {
      const res = await axios(`${url}${key}&query=${this.query}&number=60`);
      this.recipes = res.data.results;
    } catch (error) {
      alert(error);
    }
  }
}

export default Search;

/* https://api.spoonacular.com/recipes/search?apiKey= */
/* API KEY: 6d13df9289644038af5d700970aacd8c */
