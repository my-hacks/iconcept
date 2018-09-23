import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material';
import { Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventService } from '../event-service/event.service';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: './app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  eventForm: FormGroup;
  selectedFile: File = null;
  public _fileUrl = 'http://35.231.222.247:1880/eventos';
  eventCreated = new EventEmitter();

  ngOnInit() {
    this.buildForm();
  }

  constructor(
    private eventService: EventService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EventFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient
  ) { }

  buildForm() {
    this.eventForm = this.formBuilder.group({
      'eventName': [''],
      'branding': [''],
      'date': [''],
      'description': [''],
      'file': ''
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  clearForm() {
    // TODO: limpar formulario limpo
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    const headers = new HttpHeaders();
    headers.append('Authorization', `Bearer AIzaSyBbLJbgepvcHVXbS6GW2bk8Os-Y0IARcnU`);
    headers.append('Content-Type', 'multipart/form-data');
    this.http.post(this._fileUrl, fd, {headers: headers} ).subscribe(res => {
      console.log('dt', res);
    });
  }

  onSubmit() {
    this.eventService.addEvent(this.eventForm.value).subscribe(() => {
      console.log('dados enviados com sucesso');
    });
    this.dialogRef.close();
  }

}
