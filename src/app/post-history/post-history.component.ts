import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ReqServiceService } from '../service/req-service.service';

@Component({
  selector: 'app-post-history',
  templateUrl: './post-history.component.html',
  styleUrls: ['./post-history.component.css']
})
export class PostHistoryComponent implements OnInit {
  post_list = [];

  constructor(
    private req: ReqServiceService,
    private route: Router
  ) { }

  ngOnInit() {
    this.own_post_history();
  }

  own_post_history() {
    const id = localStorage.getItem('id');
    const sql = { 'sql': 'Select * From post WHERE u_id = "' + id + '"' };
    this.req.request('return', sql).then(res => {
      this.post_list = res.json();
    });
  }

  view(id) {
    console.log(id);
    localStorage.setItem('view_post', id);
    this.route.navigate(['/history-post-view']);
  }

}
