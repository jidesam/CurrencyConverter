import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyTableComponent } from './pages/currency-table/currency-table.component';
import { ErlcomePageComponent } from './pages/erlcome-page/erlcome-page.component';


const routes: Routes = [
  {path:'', component:ErlcomePageComponent},
  {path: 'currencyTable', component:CurrencyTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
