import { Component, OnInit } from '@angular/core';
import { ReqServiceService } from '../service/req-service.service';

@Component({
  selector: 'app-post-history-view',
  templateUrl: './post-history-view.component.html',
  styleUrls: ['./post-history-view.component.css']
})
export class PostHistoryViewComponent implements OnInit {
  post_id: any;
  result = [];
  url: any;
  isShow = false;
  constructor(
    private req: ReqServiceService
  ) { }

  ngOnInit() {
    this.post_id = localStorage.getItem('view_post');
    this.url = this.req.url;
    this.get_post();
  }

  get_post() {
    const sql = { 'sql': 'Select * FROM post WHERE post_id = "' + this.post_id + '"' };
    this.req.request('return', sql).then( res => {
      this.result = res.json()[0];
      console.log(this.result);
      this.isShow = true;
    });
  }
}
