import { Component, OnInit } from '@angular/core';
import { ReqServiceService } from '../service/req-service.service';
import * as uuid from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  u_id_image1: any;
  image1: any;
  filename1: any;
  image_ext1: any;

  u_id_image2: any;
  image2: any;
  filename2: any;
  image_ext2: any;

  u_id_image3: any;
  image3: any;
  filename3: any;
  image_ext3: any;

  // user input
  name: any;
  khabarName: any;
  khabartype: any;
  khabarprice: any;
  khabarqnty: any;
  khabardetails: any;

  // loading gif
  submit = false;

  constructor(
    private req: ReqServiceService,
    private route: Router
  ) { }

  ngOnInit() {
  }

  // image select event
  select(events, a) {
    switch (a) {
      case '1':
        this.u_id_image1 = uuid.v4();
        this.image1 = events;
        this.filename1 = events.target.files[0].name;
        this.image_ext1 = this.filename1.substr(this.filename1.length - 4);
        // this.u_id_image1 =  this.u_id_image1 + this.image_ext1;
        break;
      case '2':
        this.u_id_image2 = uuid.v4();
        this.image2 = events;
        this.filename2 = events.target.files[0].name;
        this.image_ext2 = this.filename2.substr(this.filename2.length - 4);
        // this.u_id_image2 =  this.u_id_image2 + this.image_ext2;
        break;
      case '3':
        this.u_id_image3 = uuid.v4();
        this.image3 = events;
        this.filename3 = events.target.files[0].name;
        this.image_ext3 = this.filename3.substr(this.filename3.length - 4);
        // this.u_id_image3 =  this.u_id_image3 + this.image_ext3;
        break;
    }
    // console.log(this.image1);
    // console.log(this.image2);
    // console.log(this.image3);
  }

  post() {
    // Posting it to system
    // tslint:disable-next-line:max-line-length
    const sql = { 'sql': 'CALL `post`("' + uuid.v4() + '","' + this.name + '","' + this.khabarName + '", "' + this.khabartype + '", "' + this.khabardetails + '", "' + this.khabarprice + '", "' + this.khabarqnty + '", "' + this.u_id_image1 + this.image_ext1 + '","' + this.u_id_image2 + this.image_ext2 + '", "' + this.u_id_image3 + this.image_ext3 + '", "' + localStorage.getItem('id') + '", "' + localStorage.getItem('username') + '")' };
    this.req.request('status', sql).then((res) => {
      if (res.json()[0].status === 'Done') {
        this.route.navigate(['/into']);
      }
    });
  }

  // image upload
  upload_pictue() {
    this.submit = true;
    const file1 = this.image1.target.files[0];
    const filename1 = this.u_id_image1;
    this.req.picture_upload('upload', file1, filename1, 'img_khabar').then(res => {
      if (res.text() === 'true') {
        console.log('done');
      } else {
        console.log('fail');
      }
    }).then(() => {
      if (this.image2 === undefined) {
        console.log('Image 2 not found');
      } else {
        const file2 = this.image2.target.files[0];
        const filename2 = this.u_id_image2;
        this.req.picture_upload('upload', file2, filename2, 'img_khabar').then(res => {
          if (res.text() === 'true') {
            console.log('done');
          } else {
            console.log('fail');
          }
        });
      }
    }).then(() => {
      if (this.image3 === undefined) {
        console.log('image 3 not found');
      } else {
        const file3 = this.image3.target.files[0];
        const filename3 = this.u_id_image3;
        this.req.picture_upload('upload', file3, filename3, 'img_khabar').then(res => {
          if (res.text() === 'true') {
            console.log('done');
          } else {
            console.log('fail');
          }
        });
      }
    }).then(() => {
      console.log('Uploading');
      this.post();
    });
  }
}
