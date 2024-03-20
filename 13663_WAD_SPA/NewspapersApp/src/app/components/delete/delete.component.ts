import { Component, inject } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { Newspaper } from '../../Newspapers';
import { NewspaperService } from '../../newspaperService';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [MatChipsModule, MatCardModule, MatButtonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  deleteNews:Newspaper={
    id:0,
    title:"",
    issueNo: 0,
    description:"",
    publisherId:0,
    publisher:{
      id:0,
      fullName:""    
    }
  }
  service = inject(NewspaperService)
  activateRote= inject(ActivatedRoute)
  router = inject(Router)
  ngOnInit(){
    this.service.GetById(this.activateRote.snapshot.params["id"]).subscribe((result)=>{
      this.deleteNews = result
    });
  }
  onHomeButtonClick(){
    this.router.navigateByUrl("home")
  }
  onDeleteButtonClick(id:number){
    this.service.DeleteNewspaper(id).subscribe(r=>{
      this.router.navigateByUrl("home")
    });
  }
}
