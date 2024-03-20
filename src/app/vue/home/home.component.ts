import {Component, OnInit} from '@angular/core';
import {timer} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: string[] = ['assets/img/h11.png', 'assets/img/h22.png']; // Liste des images
  currentIndex: number = 0; // Index de l'image actuellement affichée

  constructor() { }

  ngOnInit(): void {
    // Changer l'image toutes les 3 secondes
    timer(3000, 3000).subscribe(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    });
  }
}
