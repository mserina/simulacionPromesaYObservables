import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { 
    //hace una solicitud de tipop GET a la url que se escriba
  }

  getUsers(): Observable<any>{
    return this.http.get('https://reqres.in/api/users?page=2') as Observable<any>; 
  }
}
