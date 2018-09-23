import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { EventRoutesModule } from './event.routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { EventComponent } from './event.component';
import { MatIconModule, MatButtonModule, MatFormField, MatFormFieldModule, MatSelectModule, MatOptionModule, MatInputModule, MatCheckboxModule } from '@angular/material';
import { EventDialogComponent } from './event-dialog/event-dialog.component';
import { EventFormComponent } from './event-form/event-form.component';
import { MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatInputModule,
        MatCheckboxModule
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
export class EventModule { }
