import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartServiceService } from 'src/app/shared/services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products:any = [];

  constructor(private cartService:CartServiceService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getProductsFromCart();
  }

  getProductsFromCart(){
    this.cartService.getProductsFromCart().subscribe(response=>{
      this.products = response;
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
