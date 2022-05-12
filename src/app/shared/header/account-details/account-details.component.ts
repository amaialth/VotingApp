import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  edit:boolean=false;
  userDetails:User=new User();
  updateSuccessful=false;
  saveLoading=false;
  queryInProgress=false;
  userDetailsForm=this.formBuilder.group({
    username: [this.userDetails.username, Validators.required],
    password: [this.userDetails.password, Validators.required]
  });
  constructor(private modelService: NgbActiveModal,private authService: AuthService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.queryInProgress=true;
    this.updateUserDetails();

  }
  closeModel(){
    this.modelService.close();
  }

  async ngAfterViewInit(){
  }
  toogleEdit(){
    this.edit=!this.edit;
  }
  async updateUserDetails(){
    this.saveLoading=true;
    await this.authService.sendPasswordResetEmail(this.authService.loggedInUserName);
    this.saveLoading=false;
    this.updateSuccessful=true;
    this.queryInProgress=false;
    this.authService.logout();
  }
  isFieldInvalid(fieldName: string){
    let control = this.userDetailsForm.controls[fieldName];
    if((control.dirty || control.touched) && control.errors && control.enabled)
      return true;
    else  
      return false;
  }
}
