import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BadgeService } from 'src/app/shared/services/badge.service';
import { WhishlistServiceService } from 'src/app/shared/services/whishlist-service.service';

@Component({
  selector: 'app-whislist',
  templateUrl: './whislist.component.html',
  styleUrls: ['./whislist.component.scss']
})
export class WhislistComponent implements OnInit {

  products:any = [];

  constructor(
    private whishlistService:WhishlistServiceService,
    private toastr : ToastrService,
    private badgeService:BadgeService
    ) { }

  ngOnInit(): void {
    this.getProductsFromWhishlist();
  };

  getProductsFromWhishlist(){
    this.whishlistService.getProductsFromWhishlist().subscribe(response=>{
      this.products=response;
    })
  };

  removeFromCart(id:number){
    if(confirm('Are you sure?')){
          this.whishlistService.removeFromWhishlist(id).subscribe(response=>{
            this.toastr.success('Susscessfully removed from whishlist');
            this.products = response;
            this.getProductsFromWhishlist();
            this.badgeService.updateBadge();
          })
         }
  }

}
