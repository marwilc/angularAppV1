import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `<joke-list></joke-list>`
})
export class AppComponent {
  title = 'app works!';
 }
