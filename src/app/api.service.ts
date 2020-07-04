import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getNews() {
    return this.httpClient.get(`https://coronavirus-19-api.herokuapp.com/countries`);
  }
}
