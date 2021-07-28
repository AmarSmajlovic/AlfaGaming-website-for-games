import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/components/admin-dash/admin-products/product.module';
import { CartServiceService } from '../../services/cart-service.service';
import { ProductServiceService } from '../../services/product-service.service';
import { UserService } from '../../services/User.service';

@Component({
    selector: 'app-product-card',
    templateUrl: 'product.card.component.html',
    styleUrls: ['product.card.component.scss']
})


export class ProductCardComponent implements OnInit {
    @Input () product:any= {};
    
    constructor(
        private router:Router,
        private cartService:CartServiceService,
        private toastr:ToastrService,
        private userService:UserService,
        ) { }


    ngOnInit() :void{

     }

     showDetails(id:number){
        this.router.navigateByUrl(`/productDetail/${id}`);
     }



     addToCart(id:number){
         if(!this.userService.loggedUser.id){
             this.toastr.warning('You must be logged to add to cart!');
             this.router.navigateByUrl('signin');
         }
         if(this.userService.loggedUser.id){ this.cartService.addToCart(id).subscribe(response=>{
             this.toastr.success('Susscessfully added to cart');        
         })
        }
     }

}