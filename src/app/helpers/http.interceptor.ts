import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    modalReference:any;
    constructor(private authenticationService: AuthenticationService, private loadingService: LoadingService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loadingService.show();
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401 && !this.isLoginPageRequest(request)) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                window.location.href = "/login";
                //this.modalReference=this.modalService.open(LoginModalComponent,AppConstants.MODAL_OPTION);
            }
            const error = err.error.message || err.statusText;
            return throwError(error);
        }),
        finalize(() => this.loadingService.hide()));
    }
    private isLoginPageRequest(request: HttpRequest<any>): boolean {
        if (request.url.includes('/login')) {
          return true;
        } else {
          return false;
        }
    }
}