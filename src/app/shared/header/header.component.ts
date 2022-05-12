import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppConstants } from 'src/app/app.constants';
import { AuthService } from 'src/app/auth/auth.service';
import { NewElectionComponent } from 'src/app/elections/new-election/new-election.component';
import { Election } from '../model/election.model';
import { AccountDetailsComponent } from './account-details/account-details.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAdmin:boolean = false;
  constructor(private ngbService: NgbModal,private router: Router, private authService: AuthService) { 
    this.isAdmin = this.authService.isAdmin;
  }

  ngOnInit(): void {
  }
  
  goto(url:any){
    console.log(url);
    this.router.navigate(url);
  }
  openAccoountModal(){
    const modelRef = this.ngbService.open(AccountDetailsComponent, AppConstants.MODAL_OPTION_SM);
  }
  openNewElectionModel(){
    const modelRef = this.ngbService.open(NewElectionComponent, AppConstants.MODAL_OPTION_XL);
    modelRef.componentInstance.election = new Election();
  }
  logout(){
    this.authService.logout();
  }
}
