import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './User.service';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class WhishlistServiceService {
    constructor(private http: HttpClient,private userService:UserService) { }

    addToWhishlist(productId:number){
        return this.http.post(`${environment.serverUrl}/addToWhishlist`,{productId,customerId:this.userService.loggedUser.id})
        
    };

    getProductsFromWhishlist(){
        return this.http.get(`${environment.serverUrl}/getProductsFromWhishlist/${this.userService.loggedUser.id}`)
    }

    removeFromWhishlist(productId:number){
        return this.http.put(`${environment.serverUrl}/removeProductFromWhishlist`,{productId,customerId:this.userService.loggedUser.id})
      }

      getCountWhishlist(){
        return this.http.get(`${environment.serverUrl}/getCountFromWhishlist/${this.userService.loggedUser.id}`)
    }
}