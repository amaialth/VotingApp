import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  loading = false;
  submitted = false;
  error = '';
  username:string='';
  password:string='';
  constructor(private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute, private authenticationService: AuthService) {
    // redirect to home if already logged in
    /* if (this.authenticationService.currentUser && this.authenticationService.user?.username != null) {
      this.router.navigate(['/home/customers']);
    } */
  }

  ngOnInit(): void {
    
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm?.controls; }

  login(username: string,password: string) {
    if(this.loginForm?.invalid){
      this.error='Enter Username and Password';
      return;
    }
    this.error='Validating...';
    this.loading = true;
    this.authenticationService.login(username,password)
      .then(result=> {
          // get return url from route parameters or default to '/'
          this.error='Success!!!';
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/elections';
          this.router.navigate([returnUrl]);
          this.router.navigate(['/elections']);
        })
      .catch(error=>
        { {
            this.error='Invalid Credentials';
            this.loading = false;
          }
      })
      
  }
}
