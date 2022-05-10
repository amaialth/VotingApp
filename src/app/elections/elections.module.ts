import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ElectionsRoutingModule } from './elections-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElectionsComponent } from './elections.component';
import { ElectionCardComponent } from './election-card/election-card.component';
import { NewElectionComponent } from './new-election/new-election.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ElectionsComponent, ElectionCardComponent, NewElectionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    ElectionsRoutingModule
  ],
  providers:[DatePipe]
})
export class ElectionsModule { }
