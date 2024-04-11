import { Component, OnInit } from '@angular/core';
import { FavoriteService } from 'src/app/controller/favorite.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit{
  favorites: any[] = [];

  constructor(private favoritesService: FavoriteService) { }

  ngOnInit(): void {
    this.favorites = this.favoritesService.getFavorites();
  }
  removeFromFavorites(product: any): void {
    this.favoritesService.removeFromFavorites(product);
    this.favorites = this.favoritesService.getFavorites(); // Mettre à jour la liste des favoris après la suppression
  }
  

}
