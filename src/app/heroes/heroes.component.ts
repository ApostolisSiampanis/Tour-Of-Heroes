import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {HEROES} from '../mock-heroes';
import {Hero} from '../hero';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';

import {
  NgFor,
} from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-heroes',  
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
  imports: [
    FormsModule,
    NgFor,
    HeroDetailComponent
  ]
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
}
