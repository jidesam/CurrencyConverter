import { Component, OnInit } from '@angular/core';
import { CurrencyServiceService } from 'src/app/service/currency-service.service';



@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.scss']
})
export class CurrencyTableComponent implements OnInit {

  
  
  constructor( private currency: CurrencyServiceService) { }
  allCurrency : any;
  c = 1
  p=1 
  base : string = ""
  showpagination = false;

  allCurrencyRate : any

  ngOnInit(): void {
    this.currency.getCurrency().subscribe((data) =>{
      
      this.allCurrency = data
    })
   }
  onSelect(data:any){
      this.currency.baseCurrency(data).subscribe((result)=> {
       this.base = data;
        this.allCurrencyRate = result[data]
        this.showpagination = true
      })
     
    }

}
