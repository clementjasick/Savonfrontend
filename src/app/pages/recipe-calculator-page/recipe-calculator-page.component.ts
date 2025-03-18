import { Component } from '@angular/core';
import { Ingredient } from '../../models/Ingredient';
import { IngredientService } from '../../../servcies/ingredients.servcie';
@Component({
  selector: 'app-recipe-calculator-page',
  templateUrl: './recipe-calculator-page.component.html',
  styleUrl: './recipe-calculator-page.component.css'
})
export class RecipeCalculatorPageComponent {
  ingredients: Ingredient[] = []; // Liste des ingrédients de l’API
  isLoading: boolean = true; // Flag marquant la récupération des données
  errorMessage: string = ""; // Eventuel message d'erreur

  constructor(private ingredientService: IngredientService) {}
ngOnInit(): void {
  this.fetchIngredients();
}
fetchIngredients(): void {
  this.ingredientService.getAllIngredients().subscribe({
  next: (data) => {
  this.ingredients = data;
  this.isLoading = false;
  },
  error: (error) => {
  this.errorMessage = "Erreur lors du chargement des ingrédients.";
  console.error("Erreur API:", error);
  this.isLoading = false;
  }
  });
}
}