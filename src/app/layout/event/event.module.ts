import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { EventComponent } from './event.component';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatGridListModule,
        FlexLayoutModule
    ],
    declarations: [EventComponent]
})
export class EventModule {}
