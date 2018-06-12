import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CurrenciesComponent } from './components/currencies/currencies.component';
import { CurrencyComponent } from './components/currency/currency.component';
import {RouterModule, Routes} from '@angular/router';
import {MatButtonModule, MatGridListModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {CurrencyService} from './services/currency.service';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  {path: 'currencies', component: CurrenciesComponent},
  {path: 'currency/:id', component: CurrencyComponent},
  {path: '', redirectTo: '/currencies', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    CurrenciesComponent,
    CurrencyComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatButtonModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes, {useHash: true}),
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
