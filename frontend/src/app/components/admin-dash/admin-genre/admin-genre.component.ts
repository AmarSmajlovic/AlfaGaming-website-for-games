import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GenreServiceService } from 'src/app/shared/services/genre-service.service';
import { Genre } from '../admin-products/Genre.module';

@Component({
  selector: 'app-admin-genre',
  templateUrl: './admin-genre.component.html',
  styleUrls: ['./admin-genre.component.scss']
})
export class AdminGenreComponent implements OnInit {

  genres:any= [];
  genre:Genre = new Genre();

  constructor(private genreService:GenreServiceService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllGenres()
  }

  getAllGenres(){
   this.genreService.getAllGenre().subscribe(response=>{
    this.genres=response;
  })
  };

  deleteGenre(id:number){
       this.genreService.deleteGenre(id).subscribe(response=>{
        this.getAllGenres();
         this.toastr.success('Genre deleted!');
       })
  }

  addGenre(){
    this.genreService.addGenre(this.genre).subscribe(response=>{
      this.getAllGenres();
      this.toastr.success('Susscesfully added new genre!');
    })
  }

  updateGenre(){
     this.genreService.updateGenre(this.genre).subscribe(result=>{
      this.getAllGenres();
       this.toastr.success('Genre updated!');
     })
  }

  populateModal(updategenre:any){
    this.genre = updategenre;
  }
}

