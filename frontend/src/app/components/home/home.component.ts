import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCardComponent } from 'src/app/shared/components/product-card/product.card.component';
import { ProductServiceService } from 'src/app/shared/services/product-service.service';
import { Product } from '../admin-dash/admin-products/product.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() product:any= [];
  products20 = [];
  lastproducts = [];

  constructor(private productsService:ProductServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getProducts();
    this.getProductsDisscount20();
    this.getLastProducts();
  }

  getProducts(){
    this.productsService.getProducts().subscribe(response=>{
      this.product=response;
    })
  };

  getProductsDisscount20(){
    this.productsService.disscount20Product().subscribe((response:any)=>{
       this.products20 = response;
    })
  }

  getLastProducts(){
    this.productsService.getLastProducts().subscribe((response:any)=>{
      this.lastproducts = response;
    })
  }

  showDetails(id:number){
    this.router.navigateByUrl(`/productDetail/${id}`);
 }

}
