import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.main.html',
  styleUrls: ['./app.styles.css']
})
export class AppComponent {
  title = 'task';
  TitleName = ""; // Declaring the variable that is binded to the h1 tag and setting it to nothing

  updatetag(NewTitle:string){ // Getting the value from the textbox.
    this.TitleName = NewTitle // Setting the binded variable to the current textbox value.
  }
  message(AlertMessage:string) { //  Alert function.
  alert(AlertMessage) // Sends a alert to the user with the current textbox value.
  }
}
