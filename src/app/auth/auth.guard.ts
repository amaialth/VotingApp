import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(readonly auth: AuthService, private router: Router, private dialog: MatDialog) { }
  /** Returns true whenever the user is authenticated */
  get authenticated() { return this.auth.isAuthenticated; }

  /** Prompts the user for authentication */
  /* public prompt(data: loginAction = 'signIn'): Promise<User> {

    return this.dialog.open<LoginComponent, loginAction, User>(LoginComponent, { data })
      .afterClosed().toPromise();
  } */
  /** Performs the user authentication prompting the user when neeed or resolving to the current authenticated user otherwise */
  /* public authenticate(action: loginAction = 'signIn'): Promise<User> {

    return this.auth.user$.pipe(

      take(1),

      switchMap(user => !user ? this.prompt(action) : of(user))

    ).toPromise();
  } */

  /** Disconnects the user navigating to home */
  /* public disconnect(jumpTo = '/'): Promise<boolean> {

    return this.auth.signOut()
      .then(() => this.router.navigateByUrl(jumpTo));
  } */

  // Implements single route user authentication guarding
  /* canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // Gets the authorization mode when specified
    const mode = route.queryParamMap.get('authMode') || 'signIn';
    // Prompts the user for authentication 
    return this.authenticate(mode as loginAction)
      .then( user => !!user );
  } */
  canActivate(): boolean {
    if (!this.auth.isAuthenticated) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
