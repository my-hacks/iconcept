import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
	name: string;
	position: number;
	weight: number;
	symbol: string;
}

const ELEMENT_DATA: any[] = [
	{ position: 1, name: 'Bolsa Cavalera', weight: 'R$ ' + '5325', symbol: 'E Lounge' },
	{ position: 2, name: 'Rolex', weight: 'R$ ' + '8930', symbol: 'E Lounge' },
	{ position: 3, name: 'Bolsa de Couro Carmim', weight: 'R$ ' + '2340', symbol: 'Normal' },
	{ position: 4, name: 'Bolsa Rauph Lauren', weight: 'R$ ' + '7320', symbol: 'Normal' },
	{ position: 5, name: 'Jaqueta Prada Ouro', weight: 'R$ ' + '9916', symbol: 'E Lounge' },
	{ position: 6, name: 'Scarpin Prada', weight: 'R$ ' + '1650', symbol: 'E Lounge' },
	{ position: 7, name: 'Blusa de Couro Carmim', weight: 'R$ ' + '1890', symbol: 'Normal' },
	{ position: 5, name: 'Scarpin Louboutin', weight: 'R$ ' + '7000', symbol: 'E Lounge' },
	{ position: 6, name: 'Scarpin Valentina', weight: 'R$ ' + '4500', symbol: 'Normal' },
	{ position: 7, name: 'Blusa de Couro Carmim', weight: 'R$ ' + '1890', symbol: 'Normal' }
];

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	displayedColumns = ['position', 'name', 'weight', 'symbol'];
	dataSource = new MatTableDataSource(ELEMENT_DATA);
	places: Array<any> = [];

	applyFilter(filterValue: string) {
		filterValue = filterValue.trim(); // Remove whitespace
		filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
		this.dataSource.filter = filterValue;
	}

	constructor() {
		this.places = [
			{
				imgSrc: 'assets/images/boss.JPG',
				place: 'Hugo Boss Exclusive',
				description: 'Launch of the Hugo Bosso New Collection for Lounge One customers only.',
				charge: '350 Convidados',
				location: 'Sao Paulo, Brazil'
			},
			{
				imgSrc: 'assets/images/nike.jpg',
				place: 'Nike Air Special Event',
				description: 'Launch of the new Air collection for the public that follows the trends of the brand',
				charge: '1050 convidados',
				location: 'Sao Carlos, Brazil'
			},
			{
				imgSrc: 'assets/images/desfile.jpeg',
				place: 'Hugo Boss Parade',
				// tslint:disable-next-line:max-line-length
				description: 'Direct from London the brand has brought the models that will be trend, only for Client Lounge, for demanding customers and who like to be wearing great clothes',
				charge: '400 convidados',
				location: 'Milan, Italy'
			}
		];
	}

	ngOnInit() { }
}
