import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';
import {tap} from 'rxjs/operators'


@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private loaderService : LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.show()
    return next.handle(request).pipe(tap(evt =>{
      if (evt instanceof HttpResponse){
        this.loaderService.hide()
      }
    }));

  }
}
