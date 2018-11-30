import { Component, OnInit } from '@angular/core';
import { ReqServiceService } from '../service/req-service.service';

@Component({
  selector: 'app-into',
  templateUrl: './into.component.html',
  styleUrls: ['./into.component.css']
})
export class IntoComponent implements OnInit {

  constructor(
    private req: ReqServiceService
  ) { }

  ngOnInit() {
  }

  onFileChanged(event) {
    const file = event.target.files[0];
    this.req.picture_upload('upload', file, 'he', 'profile').then(res => {
      if (res.text() === 'true') {
        console.log('upload done');
      }
    });
  }
}
