import { Component } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({
  selector: 'authors',
  template: `
      <h2>Authors</h2>
      {{  title  }}
      <ul>
        <li *ngFor="let author of authors">
          {{ author }}
        </li>
      </ul>
      `,
  providers: [AuthorsService]
})
export class AuthorsComponent {
  title = "The titles of authors page";
  authors;

  constructor(authorsService: AuthorsService) {
    this.authors = authorsService.getAuthros();
  }
}
