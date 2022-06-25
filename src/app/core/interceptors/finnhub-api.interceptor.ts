import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class FinnhubApiInterceptor implements HttpInterceptor {
  private FINHUB_API_TOKEN = "bu4f8kn48v6uehqi3cqg";

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedRequest = req.clone({
      headers: new HttpHeaders({
        Accept: "application/json",
      }),
      params: req.params.set("token", this.FINHUB_API_TOKEN),
    });
    return next.handle(modifiedRequest);
  }
}
