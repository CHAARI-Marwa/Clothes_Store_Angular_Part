import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly STORAGE_KEY = 'panier';

  constructor() {}

  private getPanierFromStorage(): Map<Product, Map<string, number>> {
    const panierString = localStorage.getItem(this.STORAGE_KEY);
    return panierString ? new Map(JSON.parse(panierString)) : new Map<Product, Map<string, number>>();
  }

  private savePanierToStorage(panier: Map<Product, Map<string, number>>): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(Array.from(panier.entries())));
    console.log("Données enregistrées dans le stockage local :");
    console.log(localStorage.getItem(this.STORAGE_KEY));
  }
  

  public ajouterAuPanier(article: Product, size: string, quantite: number = 1): void {
    let panier = this.getPanierFromStorage();
    let articleTailles = panier.get(article);
    if (!articleTailles) {
      articleTailles = new Map<string, number>();
      panier.set(article, articleTailles);
    }
    if (articleTailles.has(size)) {
      articleTailles.set(size, articleTailles.get(size)! + quantite);
    } else {
      articleTailles.set(size, quantite);
    }
    this.savePanierToStorage(panier);
    console.log("ajouté",panier)
  }

  public getPanierProduits(): Map<Product, Map<string, number>> {
    return this.getPanierFromStorage();
  }
  
  public incrementerQuantite(article: Product, size: string): void {
    let panier = this.getPanierFromStorage();
    const articleTailles = panier.get(article);
    if (articleTailles && articleTailles.has(size)) {
      articleTailles.set(size, articleTailles.get(size)! + 1);
      this.savePanierToStorage(panier);
    }
  }

  public decrementerQuantite(article: Product, size: string): void {
    let panier = this.getPanierFromStorage();
    const articleTailles = panier.get(article);
    if (articleTailles && articleTailles.has(size)) {
      const quantite = articleTailles.get(size)!;
      if (quantite > 1) {
        articleTailles.set(size, quantite - 1);
      } else {
        articleTailles.delete(size);
        if (articleTailles.size === 0) {
          panier.delete(article);
        }
      }
      this.savePanierToStorage(panier);
    }
  }

  public supprimerDuPanier(article: Product, size: string): void {
    let panier = this.getPanierFromStorage();
    const articleTailles = panier.get(article);
    if (articleTailles) {
      articleTailles.delete(size);
      if (articleTailles.size === 0) {
        panier.delete(article);
      }
      this.savePanierToStorage(panier);
    }
  }
  
}
