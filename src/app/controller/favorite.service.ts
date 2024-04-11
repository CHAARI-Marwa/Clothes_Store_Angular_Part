import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor() { }
  addToFavorites(product: any) {
    let favorites: any[] = JSON.parse(sessionStorage.getItem('favorites') || '[]');
    favorites.push(product);
    sessionStorage.setItem('favorites', JSON.stringify(favorites));
  }

  getFavorites() {
    let favoritesString = sessionStorage.getItem('favorites');
    if (favoritesString) {
      return JSON.parse(favoritesString);
    } else {
      return [];
    }
  }


  updateFavorites(favorites: any[]) {
    sessionStorage.setItem('favorites', JSON.stringify(favorites));
  }

}
