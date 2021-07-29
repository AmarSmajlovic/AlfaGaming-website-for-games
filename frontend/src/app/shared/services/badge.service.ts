import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WhishlistServiceService } from './whishlist-service.service';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {
  private badgeSource = new BehaviorSubject<any>({allProducts: 0});
  badge = this.badgeSource.asObservable();

  constructor(private whishlistService: WhishlistServiceService) {
    this.updateBadge()
  }

  updateBadge(){
    this.whishlistService.getCountWhishlist().subscribe(
        success=>{
            this.badgeSource.next(success);
        }
    )
  }
}
