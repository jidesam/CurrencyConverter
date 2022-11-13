import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { CurrencyRatePageComponent } from './currency-rate-page/currency-rate-page.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoaderComponent } from './loader/loader.component';




@NgModule({
  declarations: [
    HeaderComponent,
    CurrencyRatePageComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    NgxPaginationModule
  ],
  exports: [
    HeaderComponent,
    CurrencyRatePageComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
