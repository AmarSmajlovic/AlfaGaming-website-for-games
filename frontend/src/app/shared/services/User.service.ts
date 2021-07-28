import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/components/profile/User.module';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class UserService {
    constructor(private httpClient: HttpClient) { }
    
    registerUser(user:User){
    return this.httpClient.post(`${environment.serverUrl}/registration`,user);
    }

    loginUser(email:string,password:string){
         return this.httpClient.post<User>(`${environment.serverUrl}/login`,{email,password});
    }

    get loggedUser(){
        return  JSON.parse(localStorage.getItem('loggedUser')) || new User();
    }
}