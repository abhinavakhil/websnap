import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  mydata;
  constructor(private http:HttpClient) { }
 
  getQuotes(){
  return this.http.get("https://thesimpsonsquoteapi.glitch.me/quotes");
  }
}
