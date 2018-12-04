import { Component, OnInit } from '@angular/core';
import { ReqServiceService } from '../service/req-service.service';

@Component({
  selector: 'app-into',
  templateUrl: './into.component.html',
  styleUrls: ['./into.component.css']
})
export class IntoComponent implements OnInit {
  user_details: { [k: string]: any } = {};
  url: any;
  filename: any;
  view = false;
  constructor(
    private req: ReqServiceService
  ) { }

  ngOnInit() {
    this.url = this.req.url;
    const userid = localStorage.getItem('id');
    console.log(userid);
    const sql = {'sql': ' CALL `user_details`("' + userid + '")'};
    this.req.request('return', sql).then(
      Response => {
        this.user_details = Response.json()[0];
        localStorage.setItem('username', this.user_details.username);
        this.filename = this.user_details.profile_pic;
        this.view = true;
        console.log(this.filename);
      }
    );
  }

  onFileChanged(event) {
    const file = event.target.files[0];
    this.req.picture_upload('upload', file, 'he', 'img_khabar').then(res => {
      if (res.text() === 'true') {
        console.log('upload done');
      }
    });
  }
}
