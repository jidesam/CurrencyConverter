import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyTableComponent } from './pages/currency-table/currency-table.component';
import { ErlcomePageComponent } from './pages/erlcome-page/erlcome-page.component';
import { OneOnOneCurrencyComponent} from './pages/one-on-one-currency/one-on-one-currency.component'




const routes: Routes = [
  {path:'', component:ErlcomePageComponent},
  {path: 'currencyTable', component:CurrencyTableComponent},
  {path: 'oneOnOneCurrencyConversion', component: OneOnOneCurrencyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
