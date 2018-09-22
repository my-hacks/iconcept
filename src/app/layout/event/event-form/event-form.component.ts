import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material';
import {Inject} from '@angular/core';

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

  ngOnInit() {}
  constructor(
      public dialogRef: MatDialogRef<EventFormComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
      this.dialogRef.close();
  }

}
