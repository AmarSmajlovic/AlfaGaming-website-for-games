import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/app/shared/services/user-service.service';
import { User } from '../../profile/User.module';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {

  users:any = [];
  user:User = new User();

  constructor(private usersService:UserServiceService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.usersService.getUsers().subscribe(response=>{
      this.users = response;
      })
  }

  deleteUser(id:number){
    this.usersService.deleteUser(id).subscribe(result=>{
      this.getAllUsers();
     this.toastr.success('User banned!');
    })
  }

  updateUser(){
    this.usersService.updateUser(this.user).subscribe(result=>{
      this.getAllUsers();
      this.toastr.success('User updated!');
    })
  }

  populateModal(updateuser:any){
      this.user = updateuser;
  }

}
