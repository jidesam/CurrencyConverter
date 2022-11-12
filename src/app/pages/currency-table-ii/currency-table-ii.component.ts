import { Component, OnInit } from '@angular/core';
import { FlexAlignStyleBuilder } from '@angular/flex-layout';
import { CurrencyServiceService } from 'src/app/service/currency-service.service';

@Component({
  selector: 'app-currency-table-ii',
  templateUrl: './currency-table-ii.component.html',
  styleUrls: ['./currency-table-ii.component.scss']
})
export class CurrencyTableIiComponent implements OnInit {
  allCurrency! : any
  exchangeRate! : number
  base : string = ""
  allCurrencyExchangeRate: any;
  showCurrency: any
  allFlags!: any
  allCurrencies : any

  constructor(private currency : CurrencyServiceService) { }

  ngOnInit(): void {
    this.currency.getAllCurrency().subscribe((data) =>{
      this.allCurrency = data
      
    })
    this.currency.getAllCurrency().subscribe(
    (Response)=>{
      this.allCurrencies = Response
      console.log(this.allCurrencies)
    }
    )

    
    this.currency.allFlags().subscribe((data) =>{
      
      let obj: any = {}
      for(let i of data) {
        
        for (let symbol in i.currencies) {
              if (
                symbol.toLowerCase() == 'usd' &&
                !i.name.official
                  .toLowerCase()
                  .includes('united states of america')
              ) {
                //
              } else {
                obj[symbol.toLowerCase()] = i.flags.svg;
              }
            }
      }
      this.allFlags = obj
      
    })

    
  }
 
  onSelect(event: any){
    this.base = event.value
    this.currency.baseCurrency(event.value).subscribe((result:any)=>{
    this.allCurrencyExchangeRate = result[this.base]
    this.showCurrency = this.allCurrency
   
    })
    

  }
  showpairs(){

  }

}
