import {Component, OnInit} from '@angular/core';
import {CurrencyService} from '../../services/currency.service';
import {Currency} from '../../models/currency';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  currencies: Currency[];
  cols: number;
  page: number = 1;
  totalItems: number = 100;
  pageSize: number = 10;

  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit() {
    // Get currencies for the first page with a server side pagination
    this.currencyService.getCurrencies(1, this.pageSize).subscribe(res => {
      this.currencies = res.data;
    });

    //Make UI responsive
    if (window.innerWidth < 768) {
      this.cols = 2;
    } else if (window.innerWidth < 1280) {
      this.cols = 4;
    } else {
      this.cols = 6;
    }
  }

  getPage(event) {
    // Get a specific number of currencies for a specific page with a server side pagination
    this.currencyService.getCurrencies(event, this.pageSize).subscribe(res => {
      this.currencies = res.data;
      this.page = event;
    });
  }

  setPageSize() {
    // render html page after setting page size
    this.ngOnInit();
  }
}
