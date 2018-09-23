import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { FileUploader } from 'ng2-file-upload';
import { Observable } from 'rxjs';
import { T } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  public _url = 'http://35.231.222.247:1880/notificacao';  

  constructor(private _http: HttpClient) { }

  addEvent(data: any) {
    console.log('data', data);
    localStorage.setItem('event', JSON.stringify(data));
    return this._http.post(this._url,  data);
  }

  // uploadFile(file: any) {
  //   const headers = new HttpHeaders();
  //   headers.append('Content-Type', 'multipart/form-data');
  //   this._http.post(this._fileUrl, file, {headers: undefined});
  // }

}
