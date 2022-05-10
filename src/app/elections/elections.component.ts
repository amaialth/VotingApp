import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs';
import { AppConstants } from '../app.constants';
import { AuthService } from '../auth/auth.service';
import { ElectionService } from '../services/election.service';
import { Election } from '../shared/model/election.model';
import { NewElectionComponent } from './new-election/new-election.component';

@Component({
  selector: 'elections',
  templateUrl: './elections.component.html',
  styleUrls: ['./elections.component.scss']
})
export class ElectionsComponent implements OnInit {
  elections: Election[]=[];

  constructor(private ngbService:NgbModal,
    private electionService: ElectionService,
    private datePipe: DatePipe,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.retrieveElections();
    console.log(this.authService.isAdmin)
  }
  openCreateModel(){
    const modelRef = this.ngbService.open(NewElectionComponent, AppConstants.MODAL_OPTION_XL);
    modelRef.componentInstance.election = new Election();
  }

  retrieveElections(): void {
    this.electionService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      console.log(this.elections);
      this.elections = data;
    });
  }
  getDate(date: any){
    let aNewDate = this.datePipe.transform(date,"medium");
  }
}
