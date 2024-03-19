import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
//import { HeaderComponent } from './components/header/header.component';
//import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, /*HeaderComponent, HomeComponent*/],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NewspapersApp';

  /*newspapersList: Newspaper[]= [
    {
      "id": 1,
      "title": "Complete Project",
      "issueNo": 2,
      "description": "Finish the coding project by the deadline.",
      "publisherId": 3,
      "publisher": {
        "id": 3,
        "fullName": "Work"
      }
    },
    {
      "id": 2,
      "title": "Complete ",
      "issueNo": 2,
      "description": "Finish the cne.",
      "publisherId": 2,
      "publisher": {
        "id": 2,
        "fullName": "fyully"
      }
    },
    {
      "id": 3,
      "title": " Project",
      "issueNo": 2,
      "description": "Finroject by the deadline.",
      "publisherId": 5,
      "publisher": {
        "id": 5,
        "fullName": "dark"
      }
    },
    
  ];*/
}
