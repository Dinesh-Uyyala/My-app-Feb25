import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/user';

  constructor(private _httpClient: HttpClient) { }

  // Get all users
  getUsers(): Observable<User[]> {
    return this._httpClient.get<User[]>(this.apiUrl);
  }

  // Get single user by ID
  getUser(id: number): Observable<User> {
    return this._httpClient.get<User>(`${this.apiUrl}/${id}`);
  }

  // Create new user
  createUser(user: User): Observable<User> {
    return this._httpClient.post<User>(this.apiUrl, user);
  }

  // Update existing user
  updateUser(id: number, user: any): Observable<any> {
    return this._httpClient.put<any>(`${this.apiUrl}/${id}`, user);
  }

  // Delete user
  deleteUser(id: number): Observable<void> {
    return this._httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Search users by name
  searchUsers(term: string): Observable<User[]> {
    return this._httpClient.get<User[]>(`${this.apiUrl}?name_like=${term}`);
  }
}
