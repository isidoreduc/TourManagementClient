import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// interceptor for adding a good Rest practice Accept header if one is not present in our
// calls to API. needs to be set as providers in app module
export class EnsureAcceptHeaderInterceptor implements HttpInterceptor {
  // intercepts the request and
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!request.headers.has('Accept')) {
      // if it doesnt have an Accept header
      request = request.clone({
        // creates one
        headers: request.headers.set('Accept', 'application/json')
      });
    }
    return next.handle(request); // goes to next request
  }
}
