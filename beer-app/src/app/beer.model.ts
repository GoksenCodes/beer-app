import { Ingredients } from "./ingredients.model";

export interface Beer {
  id: number;
  name: string;
  tagline: string;
  description: string;
  abv: number;
  image_url: string;
  ingredients: Ingredients;
}
