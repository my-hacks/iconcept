import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { EventFormComponent } from '../event-form/event-form.component';

@Component({
  selector: 'app-event-dialog',
    templateUrl: './event-dialog.component.html',
    styleUrls: ['./event-dialog.component.scss']
})
export class EventDialogComponent implements OnInit {

  const data = {}

  constructor(public dialog: MatDialog) {}

  ngOnInit() {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EventFormComponent, {
      width: '250px',
      data: this.data
    });
  }
}
