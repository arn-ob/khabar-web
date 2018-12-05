import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { ReqServiceService } from '../service/req-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  url: any;
  result = [];
  isLoad = false;
  constructor(
    private req: ReqServiceService
  ) { }

  ngOnInit() {
    this.url = this.req.url;
    this.get_details();
  }

  get_details() {
    const sql = {'sql': 'SELECT * FROM `info` WHERE u_id = "' + localStorage.getItem('id') + '"'};
    this.req.request('return', sql).then( res => {
      // console.log(res.json()[0]);
      this.result = res.json()[0];
      this.isLoad = true;
    });
  }

}
