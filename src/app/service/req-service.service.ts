import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ReqServiceService {
  url = 'http://localhost/khabar-api/';

  constructor(
    private http: Http
  ) { }

  /**
   *
   * @param where this is where you wanted or which operation u wanted to do.
   * @param paramiter the body of the message
   */
  request(where, paramiter) {
    const ext = '.php';
    return this.http.post(this.url + where + ext, paramiter).toPromise();
  }

  /**
   *
   * @param where this is where you wanted or which operation u wanted to do.
   * @param file The choose file/image
   * @param filename the filename or image name
   * @param dir_name upload dir. Currently availabe profile, upload, image, khabar
   */
  picture_upload(where, file, filename, dir_name) {
    const formdata = new FormData();
    formdata.append('image', file);
    formdata.append('image_name', filename);
    formdata.append('dir', dir_name);
    const ext = '.php';
    return this.http.post(this.url + where + ext, formdata).toPromise();
  }
}
