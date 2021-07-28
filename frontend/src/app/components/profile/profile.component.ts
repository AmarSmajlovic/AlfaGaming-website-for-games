import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from 'src/app/shared/services/cart-service.service';
import { UserServiceService } from 'src/app/shared/services/user-service.service';
import { User } from './User.module';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

   userInfo:any = [];
   products:any = [];

  constructor(private userService:UserServiceService,private router : ActivatedRoute,private cartService:CartServiceService) { }

  ngOnInit(): void {
    this.getBuyProducts();
    const id= this.router.snapshot.params.id;
    this.getUserById(id);
  }

  getUserById(id:number){
           this.userService.getUserById(id).subscribe(response=>{
            this.userInfo = response;
           })
  }

  getBuyProducts(){
    this.cartService.getBuyProducts().subscribe(response=>{
       this.products = response;
    })
  }



}
