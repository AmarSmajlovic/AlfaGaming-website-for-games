import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BadgeService } from 'src/app/shared/services/badge.service';
import { CartServiceService } from 'src/app/shared/services/cart-service.service';
import { isJSDocThisTag } from 'typescript';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products:any = [];
  total:number = 0;

  constructor(
    private cartService:CartServiceService,
    private toastr:ToastrService,
    private badgeService:BadgeService
    ) { }

  ngOnInit(): void {
    this.getProductsFromCart();
    
  }

  getProductsFromCart(){
    this.cartService.getProductsFromCart().subscribe((response:any[])=>{
      this.products = response;
      let result = response.map(product => product.price-(product.price*product.disscount)/100).reduce((a,b)=>a+b)
      this.total = result
    })
  }

 buyProducts(){
   this.cartService.buyProducts().subscribe(response=>{
     this.products=response;
     this.getProductsFromCart();
   })
 }

 removeFromCart(id:number){
   if(confirm('Are you sure?')){
         this.cartService.removeFromCart(id).subscribe(response=>{
           this.toastr.success('Susscessfully removed from cart');
           this.products = response;
           this.getProductsFromCart();
          
         })
        }
 }
  
}
