import { Component } from '@angular/core';
import { Recette } from '../../models/Recette';
import { RecetteService } from '../../../servcies/recette.servcie';

@Component({
  selector: 'app-recette-index',
  templateUrl: './recette-index.component.html',
  styleUrl: './recette-index.component.css'
})
export class RecetteIndexComponent {
  recettes: Recette[] = [];
  isLoading: boolean = true;
  errorMessage: string = "";
  indiceINSMoyen: number = 0; // Nouvelle propriété

  constructor(private recetteService: RecetteService) {}

  ngOnInit(): void {
    this.fetchRecettes();
  }

  fetchRecettes(): void {
    this.recetteService.getAllRecettes().subscribe({
      next: (data) => {
        this.recettes = data;
        this.isLoading = false;
        this.calculerIndiceINSMoyen(); // Appel de la nouvelle méthode
      },
      error: (error) => {
        this.errorMessage = "Erreur lors du chargement des recettes.";
        console.error("Erreur API:", error);
        this.isLoading = false;
      }
    });
  }

  // Nouvelle méthode pour calculer l'indice INS moyen
  calculerIndiceINSMoyen(): void {
    if (this.recettes.length === 0) {
      this.indiceINSMoyen = 0;
      return;
    }
    
    let sommeINS = 0;
    this.recettes.forEach(recette => {
      // Supposons que l'indice INS est le premier résultat
      // Si ce n'est pas le cas, ajustez l'index en conséquence
      sommeINS += recette.resultats[1].score;
    });
    
    this.indiceINSMoyen = sommeINS / this.recettes.length;
  }
  deleteAllRecettes(): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer TOUTES les recettes ? Cette action est irréversible.')) {
      this.recetteService.deleteAllRecettes().subscribe({
        next: () => {
          this.recettes = [];
          this.indiceINSMoyen = 0;
          alert('Toutes les recettes ont été supprimées avec succès.');
        },
        error: (error) => {
          this.errorMessage = "Erreur lors de la suppression des recettes.";
          console.error("Erreur API:", error);
        }
      });
    }
  }
  
}