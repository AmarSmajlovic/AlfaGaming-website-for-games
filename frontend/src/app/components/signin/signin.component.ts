import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/services/User.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  email:string = '';
  password:string= '';

  constructor(private router:Router,private userService:UserService,private toastrService:ToastrService) { }

  ngOnInit(): void {
  }

  login(){
     this.userService.loginUser(this.email,this.password).subscribe(response=>{
       if(!response.id) {
         document.getElementById('error-message').style.opacity = "100";
         let input = <HTMLElement><unknown>document.getElementsByClassName('form-control');
         input[0].style.borderColor = "red";
         input[1].style.borderColor = "red";
         window.onclick = ()=>{
          document.getElementById('error-message').style.opacity = "0";
          input[0].style.borderColor = "#ced4da";
          input[1].style.borderColor = "#ced4da";
         }
        }
       else  {
         this.toastrService.success('Welcome!');
         delete response.password;
         localStorage.setItem('loggedUser',JSON.stringify(response))
         this.router.navigateByUrl('home');
        }
     })
  }

}
