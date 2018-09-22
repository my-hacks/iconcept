import { EventRoutesModule } from './event.routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { EventComponent } from './event.component';
import { MatIconModule, MatButtonModule, MatFormField, MatFormFieldModule, MatSelectModule, MatOptionModule, MatInputModule } from '@angular/material';
import { EventDialogComponent } from './event-dialog/event-dialog.component';
import { EventFormComponent } from './event-form/event-form.component';
import { MatDialogModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatGridListModule,
        FlexLayoutModule,
        EventRoutesModule,
        MatIconModule,
        MatCardModule,
        FlexLayoutModule,
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatSelectModule,
        MatOptionModule,
        MatSelectModule,
        MatOptionModule,
        MatFormFieldModule,
        MatInputModule
    ],
    declarations: [
        EventComponent,
        EventDialogComponent,
        EventFormComponent
    ],
    entryComponents: [
        EventFormComponent
    ]
})
export class EventModule {}
