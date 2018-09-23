import { map } from 'rxjs/operators';
import { EventService } from './../event/event-service/event.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
    displayedColumns = ['id', 'name', 'progress', 'color'];
    dataSource: MatTableDataSource<UserData>;
    clientData: any;
    usuarios = [];

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

constructor(private eventService: EventService) {
    // Create 100 users
    const users: UserData[] = [];
    for (let i = 1; i <= 100; i++) {
        users.push(createNewUser(i));
    }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);

}

ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.eventService.getClients().subscribe(data => {
        console.log('retorno clientes', data);
        data.results.map(x => {
            this.usuarios.push(x);
        });
    });
}

applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
    }
}
}

/** Constants used to fill up our data base. */
const COLORS = [
    // 'maroon',
    // 'red',
    // 'orange',
    // 'yellow',
    // 'olive',
    // 'green',
    // 'purple',
    // 'fuchsia',
    // 'lime',
    // 'teal',
    // 'aqua',
    // 'blue',
    // 'navy',
    // 'black',
    // 'gray'
];
const NAMES = [
    'Maia',
    'Asher',
    'Olivia',
    'Atticus',
    'Amelia',
    'Jack',
    'Charlotte',
    'Theodore',
    'Isla',
    'Oliver',
    'Isabella',
    'Jasper',
    'Cora',
    'Levi',
    'Violet',
    'Arthur',
    'Mia',
    'Thomas',
    'Elizabeth'
];

export interface UserData {
    id: string;
    name: string;
    progress: string;
    color: string;
}

export class UserShopping {
    name: string;
    ddd: number;
    tel: string;
    sexo: string;

    constructor(name, ddd, tel, sexo) {
        this.name = name;
        this.ddd = ddd;
        this.tel = tel;
        this.sexo = sexo;
    }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
    const name =
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
        ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
        '.';

    return {
        id: id.toString(),
        name: name,
        progress: Math.round(Math.random() * 100000).toString(),
        color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
}
