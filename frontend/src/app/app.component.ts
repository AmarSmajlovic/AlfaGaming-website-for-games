import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductServiceService } from './shared/services/product-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Alfa Gaming';
  onActivate(event) {
    window.scroll(0,0);
  }


  constructor(private httpClient: HttpClient,private toastr: ToastrService,private router:Router){}

  
  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  } 

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
    
}

export class ModelComponent {

  checked: boolean;

}

