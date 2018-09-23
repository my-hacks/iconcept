import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  public _url = 'http://35.231.222.247:1880/notificacao';
  public _clientsUrl = 'http://api.hack.platformbuilders.io/iguatemi/v1/clientes';

  constructor(private _http: HttpClient) { }

  addEvent(data: any) {
    console.log('data', data);
    localStorage.setItem('event', JSON.stringify(data));
    return this._http.post(this._url, data);
  }

  getClients(): Observable<any> {
    const requestOptions = {
      params: new HttpParams()
    };
    requestOptions.params.set('api-key', 'ef0ea7e8b7bd4087a6ab4d76f0d37b06');
    return this._http.get(this._clientsUrl, requestOptions);
  }

}
