import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartServiceService } from 'src/app/shared/services/cart-service.service';
import { ProductServiceService } from 'src/app/shared/services/product-service.service';
import { UserService } from 'src/app/shared/services/User.service';
import { Product } from '../admin-dash/admin-products/product.module';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productDetail:any = [];

  constructor(
    private productService:ProductServiceService,
    private routerActive : ActivatedRoute,
    private router : Router,
    private toastr: ToastrService,
    private cartService: CartServiceService,
    private userService:UserService
    ) { }

  ngOnInit(): void {
    const id = this.routerActive.snapshot.params.id;
    this.getProductDetails(id);
  }

  getProductDetails(id:number){
    this.productService.getProductById(id).subscribe(response=>{
        this.productDetail=response;
    });
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


