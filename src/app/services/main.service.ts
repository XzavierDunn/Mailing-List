import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiUrl } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private _http: HttpClient) { }

  mail(value: any) {
    return this._http.post(`${ApiUrl}/mail/`, value);
  };

  unsub(value: any) {
    return this._http.delete(`${ApiUrl}/mail/${value['email']}`);
  };

}
