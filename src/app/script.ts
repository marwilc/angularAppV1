
import { Component } from '@angular/core';
    
class Joke {
    public setup: string;
    public punchline: string;
    public hide: boolean;

    constructor(setup: string, punchline: string) {
        this.setup = setup;
        this.punchline = punchline;
        this.hide = true;
    }

    toggle() {
        this.hide = !this.hide;
    }
}


@Component({
    selector: 'joke',
    template: `
    <div class="card card-block">
      <h4 class="card-title">{{joke.setup}}</h4>
      <p class="card-text"
      [hidden]="joke.hide">{{joke.punchline}}</p>
      <a (click)="joke.toggle()"
      class="btn btn-warning">Tell Me
      </a>
    </div>
      `
})
export class JokeComponent {
    joke: Joke;
}


@Component({
    selector: 'joke-list',
    template:  `
    <joke *ngFor="let j of jokes"></joke>
      `
})
export class JokeListComponent {
    jokes: Joke[];

    constructor() {
        this.jokes = [
                new Joke("What did the cheese say when it looked in the mirror?", "Hello-me(Halloumi)"),
                new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-apony(Mascarpone)"),
                new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not verymature’"),

        ];
    }
}
