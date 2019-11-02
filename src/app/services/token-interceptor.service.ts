import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
@Injectable()
export class TokenInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req, next){
    let tokenizedReq = req.clone({
      // withCredentials: true
    });
    return next.handle(tokenizedReq)
  }
}
