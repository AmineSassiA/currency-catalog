import { Component, OnInit } from '@angular/core';
import {Currency} from '../../models/currency';
import {ActivatedRoute, Router} from '@angular/router';
import {CurrencyService} from '../../services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  public currency: Currency;

  constructor(private route: ActivatedRoute,
              private currencyService: CurrencyService,
              private router: Router) { }


  ngOnInit() {
    //Get a specific Currency
    this.currencyService.getCurrencyById(this.route.snapshot.params['id']).subscribe( currency => {
      if (currency === null) {
        this.router.navigate(['/']);
      } else {
        this.currency = currency.data;
      }
    } );
  }
}
