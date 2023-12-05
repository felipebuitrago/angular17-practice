import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <section>
      <h3>List of Interesting Games:</h3>
      <ul>
        @for (game of games; track game.id) {
          <li>{{ game.name }}</li>
        }
      </ul>
    </section>
  `,
  styles: ``
})
export class GamesComponent {
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
