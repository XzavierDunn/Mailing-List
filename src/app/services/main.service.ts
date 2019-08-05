import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiUrl } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  mail(value: any){
    return this.http.post(`${ApiUrl}/addMail`, value)
  }
}
