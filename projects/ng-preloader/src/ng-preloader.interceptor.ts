import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, finalize, tap} from 'rxjs/operators';
import {NgPreloaderService} from './ng-preloader.service';

@Injectable()
export class NgPreloaderInterceptor implements HttpInterceptor {
  constructor(
    private loaderService: NgPreloaderService,
  ) {
  }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // return this.handleAccess(request, next);
    this.loaderService.add();
    // @ts-ignore
    return next.handle(request).pipe(
      tap(response => {
        const responseBody = response['body'];
        if(responseBody && responseBody.error){
          this.errorOut(responseBody.error)
        }
      }),
      catchError(err => {
        this.errorOut();
        return throwError(err);
      }),
      finalize(() => {
        this.loaderService.remove();
      })
    );
  }

  errorOut(message = 'Ошибка запроса к серверу.') {
    console.error('REQUEST ERROR: ', message);
    if(NgPreloaderService.errorFunc) {
      NgPreloaderService.errorFunc(message);
    }
  }


}
