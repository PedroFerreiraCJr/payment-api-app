import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Payment } from './payment-model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  url: string = 'http://localhost:8080/payment-api/api/payment';

  constructor(private http: HttpClient) { }

  getPaymentModes() : Observable<Payment[]> {
    return this.http.get<Payment[]>(this.url);
  }

  select(id: string) : Observable<any> {
    //post with query parameters
    //var params: HttpParams = new HttpParams().set('id', id);
    //return this.http.post<Payment>(this.url, null, {params});
    return this.http.post<Payment>(this.url.concat('/').concat(id), null);
  }
}
