import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {HEROES} from '../mock-heroes';
import {Hero} from '../hero';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';

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
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit() {
    this.getHeroes();
  }

  selectedHero?: Hero;

  onSelect(hero: Hero): void {
  this.selectedHero = hero;

  
}
}
