import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CurrencyServiceService } from 'src/app/service/currency-service.service';

@Component({
  selector: 'app-one-on-one-currency',
  templateUrl: './one-on-one-currency.component.html',
  styleUrls: ['./one-on-one-currency.component.scss']
})
export class OneOnOneCurrencyComponent implements OnInit {
  allCurrency:any
  exchangerate!: number 
  quote!:string
  formGroup!: FormGroup

  constructor(private currency : CurrencyServiceService) { }

  ngOnInit(): void {
    this.currency.getAllCurrency().subscribe((data =>{
      console.table(data)
      this.allCurrency = data
    }))
    this.createForm()
  }
  
  convert(){
    this.currency.convertCurrency(this.formGroup.controls['base'].value, this.formGroup.controls['quote'].value).subscribe((data =>{
    this.quote = this.formGroup.controls["quote"].value
      this.exchangerate = data[this.quote]* this.formGroup.controls["amount"].value
      console.log(this.exchangerate)
    console.log(data)
    }
  ))
    
}
createForm(){
  this.formGroup = new FormGroup({
    base: new FormControl('', []),
    quote: new FormControl('', []),
    amount : new FormControl('', [])

  })
}

}
