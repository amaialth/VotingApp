import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Election } from 'src/app/shared/model/election.model';

@Component({
  selector: 'election-card',
  templateUrl: './election-card.component.html',
  styleUrls: ['./election-card.component.scss']
})
export class ElectionCardComponent implements OnInit {
  centered=true;
  @Input('election') election!: Election;
  @Output('openCustomerModel') openCustomerModel:EventEmitter<any> = new EventEmitter<any>();
  @Output('fetchCustomer') fetchCustomer:EventEmitter<any> = new EventEmitter<any>();
  constructor(private ngbModalService:NgbModal,
    private datePipe: DatePipe) { }

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
  
  openVotingModel(){
    this.openCustomerModel.emit();
  }

  getDate(date: any){
       return date.toDate();
  }
}
