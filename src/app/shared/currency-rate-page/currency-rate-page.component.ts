import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-currency-rate-page',
  templateUrl: './currency-rate-page.component.html',
  styleUrls: ['./currency-rate-page.component.scss']
})
export class CurrencyRatePageComponent implements OnInit {
  @Input() allCurrencyRate : any
  @Output() currencyClick : any
  p=1
  constructor() { }

  ngOnInit(): void {
  
  }
  onSelect(data: any){
   this.currencyClick.emit()
  }


}
