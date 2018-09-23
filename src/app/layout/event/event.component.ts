import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { EventFormComponent } from './event-form/event-form.component';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-event',
    templateUrl: 'event.component.html',
    styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

    ngOnInit() {
        console.log('carregado');
    }
    // tslint:disable-next-line:member-ordering
    places: Array<any> = [];

    constructor(
        public dialog: MatDialog) {

        this.places = [
            {
                imgSrc: 'assets/images/prada.jpg',
                place: 'Prada Exclusive Party',
                description:
                    'New Prada Collection of Bags and Dresses Launch Event',
                charge: '$399/night',
                location: 'Sao Paulo, Brazil'
            },
            {
                imgSrc: 'assets/images/dolce2.jpg',
                place: 'Dolce and Gabanna Exclusive Party',
                description:
                    'From mans with styles and tendencies of fashion trending.',
                charge: '$850/night',
                location: 'Sao Paulo, Brazil'
            },
            {
                imgSrc: 'assets/images/louis.jpg',
                place: 'Birthday Sephora ',
                description:
                    'Come with us to celebrate 20 years of Success at Sephora and earn more points for Lounge One',
                charge: '$199/night',
                location: 'Sao Paulo, Brazil'
            }
        ];
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(EventFormComponent, {
            width: '400px',
            height: '400px'
            data: {}
        });
        dialogRef.afterClosed().subscribe(result => {
            const data = {
                imgSrc: 'assets/images/louis.jpg',
                place: 'Birthday Sephora ',
                description:
                    'Come with us to celebrate 20 years of Success at Sephora and earn more points for Lounge One',
                charge: '$199/night',
                location: 'Sao Paulo, Brazil'
            };
            this.places.push(data);
        });
    }

    receiveEvent(createdEvent) {
        console.log('evento criado', createdEvent);
    }


}
