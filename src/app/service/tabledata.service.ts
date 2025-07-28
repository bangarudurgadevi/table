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
  add(tabledata:Tabledata):Observable<any> {
return this.http.post(`${this.baseurl}`,tabledata);
  }
  delete(id:number):Observable<any> {
    return this.http.delete(`${this.baseurl}/id/=${id}`);
  }
}
