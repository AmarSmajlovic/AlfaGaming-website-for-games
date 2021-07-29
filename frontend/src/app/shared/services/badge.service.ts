import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartServiceService } from './cart-service.service';
import { WhishlistServiceService } from './whishlist-service.service';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {
  private badgeSourceWhishlist = new BehaviorSubject<any>({allProducts: 0});
  private badgeSourceCart = new BehaviorSubject<any>({allCartProducts: 0});

  badgeWhishlist = this.badgeSourceWhishlist.asObservable();
  badgeCart = this.badgeSourceCart.asObservable();

  constructor(private whishlistService: WhishlistServiceService,private cartService:CartServiceService) {
    this.updateBadge()
  }

  updateBadge(){
    this.whishlistService.getCountWhishlist().subscribe(
        success=>{
            this.badgeSourceWhishlist.next(success);
        }
    )
    this.cartService.getCountCart().subscribe(
      success=>{
          this.badgeSourceCart.next(success);
      }
  )
  }

  
}
