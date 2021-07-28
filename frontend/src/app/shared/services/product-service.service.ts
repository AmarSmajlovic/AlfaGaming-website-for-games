import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/components/admin-dash/admin-products/product.module';
import { User } from 'src/app/components/profile/User.module';
import { environment } from 'src/environments/environment';
import { UserService } from './User.service';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient,private userService:UserService) { }

  getGenre(){
   return this.http.get(`${environment.serverUrl}/getAllGenre`);
  }

  getPlatform(){
    return this.http.get(`${environment.serverUrl}/getAllPlatforms`)
  }

  getProducts(){
    return this.http.get(`${environment.serverUrl}/getAllProducts`)
  }

  // searchProduct(){

  // }

  addProduct(product:Product){
      return this.http.post(`${environment.serverUrl}/addProduct`,product);
  }

  deleteProduct(id:number){
    return this.http.delete(`${environment.serverUrl}/deleteProduct/${id}`);
  }

  updateProduct(product:Product){
    return this.http.put(`${environment.serverUrl}/updateProduct/${product.id}`,product);
  }

  countProduct(){
    return this.http.get(`${environment.serverUrl}/countProduct`);
  }

  getProductById(id:number){
    return this.http.get(`${environment.serverUrl}/getProductById/${id}`);
  }

  disscount20Product(){
    return this.http.get(`${environment.serverUrl}/disscount20Product`);
  }

  filterProducts(params:any){
    return this.http.get(`${environment.serverUrl}/filterProducts`,{params});
  }

  searchProductByName(params:any){
            return this.http.get(`${environment.serverUrl}/getProductByName`,{params});
  }

 
  
}
