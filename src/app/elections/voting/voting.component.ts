import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ElectionService } from 'src/app/services/election.service';
import { Election } from 'src/app/shared/model/election.model';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit {
  message = '';
  errMessage = '';
  saveLoading=false;
  electionName: string='';
  election:Election = new Election();
  constructor(private modelRef: NgbActiveModal,
    private electionService: ElectionService) { }

  ngOnInit(): void {
  }

  close() {
    this.modelRef.close();
  }

  confirm(){
    this.modelRef.close('success');
  }
}
