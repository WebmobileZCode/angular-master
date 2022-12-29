import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  showThisMessage = false;

  heros = ['pavankalyan', 'chiru', 'ramcharan', 'maheshbabu', 'nag'];

  pickHero = 'srija';
  colorName = 'red';
  bgColorName = 'blue';

  className = 'm1';
}
