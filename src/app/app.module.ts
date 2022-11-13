import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErlcomePageComponent } from './pages/erlcome-page/erlcome-page.component';
import{ MatDividerModule} from '@angular/material/divider'
import {MatButtonModule} from '@angular/material/button';
import { CurrencyTableComponent } from './pages/currency-table/currency-table.component'
import { SharedModule } from './shared/shared.module';
import { CurrencyServiceComponent } from './service/currency-service/currency-service.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { NgxPaginationModule } from 'ngx-pagination';
import { OneOnOneCurrencyComponent } from './pages/one-on-one-currency/one-on-one-currency.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyTableIiComponent } from './pages/currency-table-ii/currency-table-ii.component';
import { InterceptorInterceptor } from './service/interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ErlcomePageComponent,
    CurrencyTableComponent,
    CurrencyServiceComponent,
    OneOnOneCurrencyComponent,
    CurrencyTableIiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatButtonModule,
    SharedModule,
    HttpClientModule,
    MatTableModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS,
    useClass: InterceptorInterceptor,
    multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
