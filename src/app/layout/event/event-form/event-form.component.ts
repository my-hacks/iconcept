import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material';
import {Inject} from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventService } from '../event-service/event.service';

@Component({
  selector: './app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  eventForm: FormGroup;

  ngOnInit() {
    this.buildForm();
  }

  constructor(
      private eventService: EventService,
      private formBuilder: FormBuilder,
      public dialogRef: MatDialogRef<EventFormComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

    buildForm() {
      this.eventForm = this.formBuilder.group({
        'eventName': [''],
        'branding' : [''],
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

  onSubmit() {
    // console.log(this.eventForm.value);
    this.eventService.addEvent(this.eventForm.value).subscribe( () => {
      console.log('dados enviados com sucesso');
    });
  }

}
