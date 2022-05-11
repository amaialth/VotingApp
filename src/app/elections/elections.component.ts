import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs';
import { AppConstants } from '../app.constants';
import { AuthService } from '../auth/auth.service';
import { ElectionService } from '../services/election.service';
import { Candidate } from '../shared/model/candidate.model';
import { Election } from '../shared/model/election.model';
import { Voting } from '../shared/model/voting.model';
import { NewElectionComponent } from './new-election/new-election.component';

@Component({
  selector: 'elections',
  templateUrl: './elections.component.html',
  styleUrls: ['./elections.component.scss']
})
export class ElectionsComponent implements OnInit {
  elections: Election[] = [];
  isAdmin: boolean = false;
  constructor(private ngbService: NgbModal,
    private electionService: ElectionService,
    private datePipe: DatePipe,
    private authService: AuthService) { 
      this.isAdmin = this.authService.isAdmin;
    }

  ngOnInit(): void {
    this.retrieveElections();
    console.log(this.authService.isAdmin)
  }
  openCreateModel() {
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
      this.elections = data;
      console.log(data);
    });
  }

  startElection(election: Election) {
    if (election.status == 'Not Started') {
      if (election && election.candidates) {
        let votingArray: Voting[] = []
        for (let candidate of election.candidates) {
          let voting = new Voting();
          voting.candidateName = candidate.name;
          votingArray.push(voting);
        }
        election.voting = votingArray;
      }
      election.status = 'In Progress';
    }
    console.log(election);
    this.updateElection(election);
  }
  endElection(election: Election) {
    if (election.status == 'In Progress') {
      if (election && election.voting) {
        let max=0;
        let winner = new Voting;
        for (let vote of election.voting) {
          if(max<vote.voteCount){
            max = vote.voteCount;
            winner = vote;
          }
        }
        console.log(winner);
      }
      election.status = 'Completed';
    }
    console.log(election);
    this.updateElection(election);
  }

  updateElection(election: Election): void {
    const candidates = election.candidates.map((obj) => { return Object.assign({}, obj) });
    const voting = election.voting.map((obj) => { return Object.assign({}, obj) });
    election.candidates = candidates;
    election.voting = voting;
    let docId = '';
    if (election.id) {
      docId = election.id;
    }
    this.electionService.update(docId, election).then(() => {

    }).
      catch(() => {

      });
  }

  getDate(date: any) {
    let aNewDate = this.datePipe.transform(date, "medium");
  }
}
