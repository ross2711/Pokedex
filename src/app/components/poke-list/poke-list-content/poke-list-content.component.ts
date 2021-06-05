import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-list-content',
  templateUrl: './poke-list-content.component.html',
  styleUrls: ['./poke-list-content.component.scss'],
})
export class PokeListContentComponent implements OnInit {
  @Input() element: any;

  constructor() {}

  ngOnInit(): void {}
}
