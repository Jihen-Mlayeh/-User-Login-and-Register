import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private baseUrl='http://localhost:3000';
  constructor(private http:HttpClient) { }
  regsiterUser(userDetails:User){
  return this.http.post<User>(`${this.baseUrl}/users`,userDetails);
    
  }
  getUserByEmail(email:string): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`);
  }
}
