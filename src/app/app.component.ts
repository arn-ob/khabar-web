import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // index switching
  index = true;

  title = 'app';

  ngOnInit() {
  }


  show() {
    this.index = false;
  }
}
