import { Component, OnInit } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Router } from '@angular/router';
import { NgbPanelToggle } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/services/User.service';
import { __classPrivateFieldSet } from 'tslib';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    "(window:click)": "onClick()"
  }
})
export class HeaderComponent implements OnInit {
  isShow = false;
  public isMobileLayout = false;

  showMenu($event){
    $event.stopPropagation();
    this.isShow= !this.isShow;
  }

  onClick() {
    const hamburger = document.querySelector('#hamburger');
    hamburger.classList.remove('change');
    this.isShow = false;
  }
  

  constructor(public userService:UserService,private toastrService:ToastrService,private router:Router) { }
 
  ngOnInit(): void {
  }

  signOut(){
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/home');
    this.toastrService.success('You have logged out');
  }

  activeHamburger(){
    const hamburger = document.querySelector('#hamburger');
    hamburger.classList.toggle('change');
  }

  showProfile(id:number){
    this.router.navigateByUrl(`/profile/${id}`);
  }


}
