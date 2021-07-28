import { Component, OnInit } from '@angular/core';
import { GenreServiceService } from 'src/app/shared/services/genre-service.service';
import { PlatformServiceService } from 'src/app/shared/services/platform-service.service';
import { ProductServiceService } from 'src/app/shared/services/product-service.service';
import { UserServiceService } from 'src/app/shared/services/user-service.service';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.scss']
})
export class AdminDashComponent implements OnInit {

  active = '';
  allProducts:number = 0;
  allPlatforms:number = 0;
  allUsers:number = 0;
  allGenres:number = 0;

  constructor(
    private productsService:ProductServiceService,
    private platformService:PlatformServiceService,
    private userService:UserServiceService,
    private genreService:GenreServiceService
    ) { }
  
  ngOnInit(): void {
    this.countProduct();
    this.countPlatform();
    this.countUsers();
    this.countGenres();
  }
  
  countProduct(){
    this.productsService.countProduct().subscribe(response=>{
      this.allProducts= response['allProducts'];
   })
  };

  countPlatform(){
    this.platformService.countPlatform().subscribe(response=>{
      this.allPlatforms = response['allPlatforms'];
    })
  };

  countUsers(){
    this.userService.countUser().subscribe(response=>{
      this.allUsers = response['allUsers'];
    })
  };

  countGenres(){
    this.genreService.countGenre().subscribe(response=>{
      this.allGenres = response['allGenres'];
    })
  }
}
