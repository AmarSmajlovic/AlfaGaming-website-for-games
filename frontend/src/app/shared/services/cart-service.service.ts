import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserService } from './User.service';

@Injectable({providedIn: 'root'})
export class CartServiceService {
    constructor(private http: HttpClient,private userService:UserService) { }
    
    addToCart(productId:number){
        return this.http.post(`${environment.serverUrl}/addToCart`,{productId,customerId:this.userService.loggedUser.id})
    }
  

    getProductsFromCart(){
        return this.http.get(`${environment.serverUrl}/getProductsFromCart/${this.userService.loggedUser.id}`)
    }

    buyProducts(){
        return this.http.get(`${environment.serverUrl}/buyProductsFromCart/${this.userService.loggedUser.id}`);
    }

    removeFromCart(productId:number){
        return this.http.put(`${environment.serverUrl}/removeProductFromCart`,{productId,customerId:this.userService.loggedUser.id})
      }

    getBuyProducts(){
        return this.http.get(`${environment.serverUrl}/getBuyProducts/${this.userService.loggedUser.id}`);
    }
    
    getCountCart(){
        return this.http.get(`${environment.serverUrl}/getCartCount/${this.userService.loggedUser.id}`)
    }

}