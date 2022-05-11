import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ElectionsRoutingModule } from './elections-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElectionsComponent } from './elections.component';
import { ElectionCardComponent } from './election-card/election-card.component';
import { NewElectionComponent } from './new-election/new-election.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../shared/header/header.component';
import { VotingComponent } from './voting/voting.component';



@NgModule({
  declarations: [HeaderComponent, ElectionsComponent, ElectionCardComponent, NewElectionComponent, VotingComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    ElectionsRoutingModule
  ],
  providers: [DatePipe]
})
export class ElectionsModule { }
