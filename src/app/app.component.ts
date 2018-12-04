import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // index switching
  index = false;
  sign;
  title = 'app';

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
    const userid = localStorage.getItem('id');
    console.log(userid);
    if (userid === null) {
      this.isIndex(true);
      this.isSign(false);
    } else {
      this.isSign(true);
      this.isIndex(false);
      this.route.navigate(['/history-post']); // after finish dev change it to /into
    }
  }

  isSign(tf: boolean) {
    this.sign = tf;
  }

  isIndex(sh: boolean) {
    this.index = sh;
  }

  logout() {
    localStorage.clear();
    this.isIndex(true);
      this.isSign(false);
  }
}
