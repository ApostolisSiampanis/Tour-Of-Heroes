import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Hero } from '../hero';

import {
  UpperCasePipe
} from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',
  imports: [
    FormsModule,
    UpperCasePipe,
    CommonModule
  ]
})
export class HeroDetailComponent {
 @Input() hero: Hero | undefined;
}
