import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PlatformServiceService } from 'src/app/shared/services/platform-service.service';
import { Platform } from '../admin-products/Platform.module';

@Component({
  selector: 'app-admin-platforms',
  templateUrl: './admin-platforms.component.html',
  styleUrls: ['./admin-platforms.component.scss']
})
export class AdminPlatformsComponent implements OnInit {

   platforms:any=[];
   platform:Platform = new Platform();

  constructor(private platformService:PlatformServiceService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllPlatforms();
  }

  getAllPlatforms(){
    this.platformService.getPlatforms().subscribe(result=>{
      this.platforms = result;
    })
  }

  addPlatform(){
    this.platformService.addPlatform(this.platform).subscribe(result=>{
      this.getAllPlatforms();
      this.toastr.success('Susscessfully added new platform!');
    })
  }

  deletePlatform(id:number){
    this.platformService.deletePlatform(id).subscribe(result=>{
      this.getAllPlatforms();
      this.toastr.success('Platform deleted');
    })
  }

  updatePlatform(){
    this.platformService.updatePlatform(this.platform).subscribe(result=>{
      this.getAllPlatforms();
      this.toastr.success('Platform updated!');
    })
  }

  populateModal(updateplatform:any){
    this.platform = updateplatform;
  }

}
