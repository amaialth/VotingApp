import { Component, OnInit } from '@angular/core';
import { Election } from 'src/app/shared/model/election.model';

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.scss']
})
export class ViewResultComponent implements OnInit {
  election: Election = new Election;
  message:string='';
  constructor() { }

  ngOnInit(): void {
  }
  close(){
    
  }
}
