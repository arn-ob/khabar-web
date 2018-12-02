import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // index switching
  index = true;
  sign = false;
  title = 'app';

  ngOnInit() {
  }


  show_index() {
    this.index = false;
  }

  show_sign_nav() {
    this.sign = true;
  }
}
