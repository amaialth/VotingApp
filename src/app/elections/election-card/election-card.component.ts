import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppConstants } from 'src/app/app.constants';
import { AuthService } from 'src/app/auth/auth.service';
import { ElectionService } from 'src/app/services/election.service';
import { Election } from 'src/app/shared/model/election.model';
import { VotingComponent } from '../voting/voting.component';

@Component({
  selector: 'election-card',
  templateUrl: './election-card.component.html',
  styleUrls: ['./election-card.component.scss']
})
export class ElectionCardComponent implements OnInit {
  centered=true;
  @Input('election') election!: Election;
  @Output('openCustomerModel') openCustomerModel:EventEmitter<any> = new EventEmitter<any>();
  @Output('startElection') startElection:EventEmitter<any> = new EventEmitter<any>();
  @Output('endElection') endElection:EventEmitter<any> = new EventEmitter<any>();
  isAdmin:boolean = false;
  constructor(private ngbModalService:NgbModal,
    private datePipe: DatePipe,
    private authService: AuthService,
    private electionService: ElectionService) { 
      this.isAdmin = this.authService.isAdmin;
    }

  ngOnInit(): void {
  }
  openSalesModel(){
    /* const modalRef = this.ngbModalService.open(SalesModalComponent, AppConstants.MODAL_OPTION_XL);
    modalRef.componentInstance.customer =this.customer;
    modalRef.result.then((result) => {
      if ( result === 'success' ) {
         this.fetchCustomer.emit(); // Refresh Customer data
      }
    }); */
  }
  
  openVotingModel(i:number){
    const modalRef = this.ngbModalService.open(VotingComponent, AppConstants.MODAL_OPTION_SM);
    modalRef.componentInstance.electionName =this.election.electionName;
    modalRef.componentInstance.message = 'You are going to vote '+ this.election.voting[i].candidateName;
    modalRef.result.then((result) => {
      if ( result === 'success' ) {
        this.election.voted.push(this.authService.loggedInUserName);
        this.election.voting[i].voteCount++;
        let docId = '';
        if(this.election.id){
          docId = this.election.id;
        }
        this.electionService.update(docId, this.election).then(e=>{
          console.log(e);
        });
      }
    });

  }
  isUserAlreadyVoted(): boolean{
    let username = this.authService.loggedInUserName;
    return this.election.voted && this.election.voted.includes(username);
  }

  countVote(index:number){

  }
  startTheElection(){
    this.startElection.emit();
  }
  endTheElection(){
    this.endElection.emit();
  }
  getDate(date: any){
       return date.toDate();
  }
}
