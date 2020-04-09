import { Component, OnInit, ElementRef } from '@angular/core';

import { PaymentService } from './payment.service';
import { Payment } from './payment-model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  title: string = 'pedro ferreira';
  payments: Payment[] = [];

  constructor(private payment: PaymentService) { }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.payment.getPaymentModes().subscribe((values: Payment[]) => {
      values.forEach((payment: Payment) => {
        this.payments.push(payment);
      });
    });
  }

  select(el: any): void {
    console.log('selecting...');
    this.payment.select(el.id).subscribe((payment: Payment) => {
      console.log(payment);
    });
  }

}
