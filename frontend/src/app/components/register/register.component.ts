import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/services/User.service';
import { User } from '../profile/User.module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent implements OnInit {
  
  user:User = new User();

  constructor(private router:Router,private userService:UserService,private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  registerUser(){
   this.userService.registerUser(this.user).subscribe(response=>{
     this.toastrService.success('Congratualtions,You have successfully registered')
   })
   this.router.navigateByUrl('login');
   
  }

 
  
}
