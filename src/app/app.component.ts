import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
    const userid = localStorage.getItem('id');
    if (userid !== undefined) {
      this.isSign(true);
      this.isIndex(false);
      this.route.navigate(['/into']);
    }
  }

  isSign(tf: boolean) {
    this.sign = tf;
  }

  isIndex(sh: boolean) {
    this.index = sh;
  }
}
