import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {API_ENDPOINT} from '../shared/commons';

@Injectable()
export class CurrencyService {

  constructor(private http: HttpClient) { }

  // Get a specific number of currencies for a specific page
  public getCurrencies(pageNumber: number, pageSize: number): Observable<any> {
    const url = `${ API_ENDPOINT}?page[number]=${pageNumber}&&page[size]=${pageSize}`
    return this.http.get(url);
  }

  //Get a specific Currency
  public getCurrencyById(currencyId: string): Observable<any> {
    const url = `${ API_ENDPOINT}/${currencyId}`
    return this.http.get(url);
  }
}
