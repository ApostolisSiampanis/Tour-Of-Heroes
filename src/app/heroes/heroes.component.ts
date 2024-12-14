import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {HEROES} from '../mock-heroes';
import {Hero} from '../hero';

import {
  NgIf,
  NgFor,
  UpperCasePipe
} from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-heroes',  
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe
  ]
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;
  
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
}
