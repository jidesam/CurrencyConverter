import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-service',
  templateUrl: './currency-service.component.html',
  styleUrls: ['./currency-service.component.scss']
})
export class CurrencyServiceComponent implements OnInit {
  getCurrency: any;
  p = 1

  constructor() { }

  ngOnInit(): void {
  }

}
