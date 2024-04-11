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
 
    const index = this.favorites.findIndex(favorite => favorite.id === product.id);
    if (index !== -1) {
      this.favorites.splice(index, 1);
     
      this.favoritesService.updateFavorites(this.favorites);
    }
  }

}
