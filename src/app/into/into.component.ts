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
    console.log(file);
    const uploadData = new FormData();
    uploadData.append('image', file);
    uploadData.append('image_name', 'test1');
    this.req.request('fileupload', uploadData).then( res => {
      console.log(res);
    });
  }
}
