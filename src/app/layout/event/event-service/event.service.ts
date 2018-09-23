import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  public _url = 'http://35.231.222.247:1880/notificacao';
  public headers = ({ 'Content-Type': 'aplication/json' });

  constructor(private _http: HttpClient) { }

  addEvent(data: any) {
    console.log('data', data);
    localStorage.setItem('event', JSON.stringify(data));
    return this._http.post(this._url,  data);
  }

}
