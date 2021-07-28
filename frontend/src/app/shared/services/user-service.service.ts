import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/components/profile/User.module';

@Injectable({providedIn: 'root'})
export class UserServiceService{
    constructor(private http: HttpClient) { }
    
   getUsers(){
       return this.http.get(`${environment.serverUrl}/getAllCustomers`);
   }

   deleteUser(id:number){
       return this.http.delete(`${environment.serverUrl}/deleteUser/${id}`);
   }

   updateUser(user:User){
       return this.http.put(`${environment.serverUrl}/updateUser/${user.id}`, user);
   }

   countUser(){
       return this.http.get(`${environment.serverUrl}/allUsers`);
   }

   getUserById(id:number){
          return this.http.get(`${environment.serverUrl}/getCustomerById/${id}`);
   }

}