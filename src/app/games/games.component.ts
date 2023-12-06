import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <section>
      <h3>List of {{userName}}'s  Favorite Games:</h3>
      <ul>
        @for (game of games; track game.id) {
          <li (click)="fav(game.name)">{{ game.name }}</li>
        }
      </ul>
    </section>
  `,
  styles: ``
})
export class GamesComponent {

  @Input() userName = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }

  games = [
    {
      id: 1,
      name: 'Grand Theft Auto VI'
    },
    {
      id: 2,
      name: 'The Witcher 3'
    },
    {
      id: 1,
      name: 'The Last of Us'
    }
  ]
}
