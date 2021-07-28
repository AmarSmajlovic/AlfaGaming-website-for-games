import { Component, OnInit } from '@angular/core';
import { GenreServiceService } from 'src/app/shared/services/genre-service.service';
import { PlatformServiceService } from 'src/app/shared/services/platform-service.service';
import { ProductServiceService } from 'src/app/shared/services/product-service.service';
import { DiagnosticCategory } from 'typescript';
import { Genre } from '../admin-dash/admin-products/Genre.module';
import { Platform } from '../admin-dash/admin-products/Platform.module';
import { Product } from '../admin-dash/admin-products/product.module';

@Component({
  selector: 'app-listing-products',
  templateUrl: './listing-products.component.html',
  styleUrls: ['./listing-products.component.scss']
})
export class ListingProductsComponent implements OnInit {

  product:any = [];
  genres:any= [{genre:-1}];
  genreSelected:Number;
  activeGenre:number = 0;
  platforms:any = [{platform:-1}];
  platformSelected:Number;
  priceBetween:Number;
  priceTo:Number;
  nameSearch:string;

  constructor(private productsService:ProductServiceService,private genreService:GenreServiceService,private platformService:PlatformServiceService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getAllGenres();
    this.getAllPlatforms();
  }

  getProducts(){
    this.productsService.getProducts().subscribe((response:any)=>{
      this.product=response;
    })
  };

  getAllGenres(){
    this.genreService.getAllGenre().subscribe(response=>{
     this.genres=response;
   })
   };

   getAllPlatforms(){
     this.platformService.getPlatforms().subscribe(response=>{
       this.platforms=response;
     })
   }

   filterProducts(){
     this.productsService.filterProducts({genre_id:this.genreSelected,platform_id:this.platformSelected,priceBetween:this.priceBetween,priceTo:this.priceTo}).subscribe((response)=>{
       this.product = response;
      })  
    }

    searchProduct(){
      this.productsService.searchProductByName({name:this.nameSearch}).subscribe(response=>{
        this.product= response;
        console.log(this.product.name);
        
      })
    }
}
