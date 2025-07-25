import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tabledata } from '../models/tabledata';

@Injectable({
  providedIn: 'root'
})
export class TabledataService {
  private baseurl="https://sheetdb.io/api/v1/upse4t0b1qfc1";
  constructor(private http:HttpClient) { }
  onsubmit():Observable<Tabledata[]> {
    return this.http.get<Tabledata[]>(`${this.baseurl}`)
  }
}
