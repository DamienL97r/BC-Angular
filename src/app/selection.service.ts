import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISelection } from './interfaces/iselection';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  constructor(private http: HttpClient,) { }

  url:string = "http://localhost:8000/api"

  findAll() {
    return this.http.get<ISelection[]>(this.url+'/selections');
  }

  add(newSelection: ISelection) {
    return this.http.post<ISelection>(this.url+'/selections', newSelection);
  }
}
