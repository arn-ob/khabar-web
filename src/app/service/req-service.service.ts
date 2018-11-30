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
}
