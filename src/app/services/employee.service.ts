import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly _url:string = 'http://localhost:3000/employees/'

  constructor(private _http:HttpClient) { }


  addEmployee(data:any):Observable<any>{ 
    return this._http.post(this._url,data)
  }

  updateEmployee(id:number, data:any) : Observable<any> { 
    return this._http.put(this._url+id, data)
  }

  getEmployee():Observable<any>{
    return this._http.get(this._url)
  }

  deleteEmployee(id:number):Observable<any>{
    return this._http.delete(this._url+id)
  }

  
  
}