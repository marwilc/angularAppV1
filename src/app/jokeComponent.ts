import { Component } from "@angular/core";

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
class JokeComponent {
    joke: Joke;
}
