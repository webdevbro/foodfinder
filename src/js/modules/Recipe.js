import axios from "axios";
import { key, url } from "../config";

class Recipe {
  constructor(id) {
    this.id = id;
  }

  async getRecipe() {
    try {
      const url = "https://api.spoonacular.com/recipes/";
      // const key = "6d13df9289644038af5d700970aacd8c";
      const res = await axios(
        `${url}${this.id}/information?apiKey=${key}&includeNutrition=false`
      );
      this.title = res.data.title;
      this.author = res.data.sourceName;
      this.image = res.data.image;
      this.ingredients = res.data.extendedIngredients;
      this.readyInMinutes = res.data.readyInMinutes;
      this.servings = res.data.servings;
    } catch (error) {
      console.log(error);
      alert("Something went wrong :(");
    }
  }
}

export default Recipe;
