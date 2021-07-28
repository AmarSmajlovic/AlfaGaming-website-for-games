import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductServiceService } from 'src/app/shared/services/product-service.service';
import { Genre } from './Genre.module';
import { Platform } from './Platform.module';
import { Product } from './product.module';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {

  genre:any = [];
  platform:any= [];
  product:any = [];
  products:any= [{genre_id:-1,platform_id:-1}];

  constructor(private productsService:ProductServiceService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.productsService.getGenre().subscribe(response=>{
      this.genre = response;
    });
    this.productsService.getPlatform().subscribe(response=>{
      this.platform=response;
    });
    this.getAllProducts();
  }

  getAllProducts(){
    this.productsService.getProducts().subscribe(response=>{
      this.products=response;
    })
    }

  saveProduct(){
    
       this.productsService.addProduct(this.product).subscribe(result=>{
        this.getAllProducts();
         this.toastr.success('Susscessfully added new product');
       })
    }
  deleteProduct(id:number){
    this.productsService.deleteProduct(id).subscribe(result=>{
      this.getAllProducts();
      this.toastr.success(`Product deleted`);
    })
}
updateProduct(){ 
    this.productsService.updateProduct(this.product).subscribe(result=>{
      this.getAllProducts();
      this.toastr.success('Susscessfully updated product');
    })
}


populateModal(item:any){
  this.product = {...item};
}
}

