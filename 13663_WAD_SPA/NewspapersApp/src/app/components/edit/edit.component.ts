import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { NewspaperService } from '../../newspaperService';
import { Newspaper } from '../../Newspapers';

function findIndexByID(jsonArray: any[], indexToFind: number): number {
  return jsonArray.findIndex((item) => item.id === indexToFind);
}


@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  serv = inject(NewspaperService); // Service to get and send data from and to the API
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  editNews: Newspaper = {
    id: 0,
    title: "",
    issueNo: 0,
    description: "",
    publisherId: 0,
    publisher: {
      id: 0,
      fullName: ""
    }
  };
  categoryObject: any; // Category Object for listing
  selected: any // if any selected by default
  cID: number = 0;// category ID To inject to
  ngOnInit() {
    

    this.serv.GetById(this.activatedRoute.snapshot.params["id"]).subscribe(result => {
      this.editNews = result;
      console.log(this.editNews)
      this.selected = this.editNews.publisherId;
    });

    this.serv.GetAllPublishers().subscribe((result) => {
      this.categoryObject = result;
    });
  }

  toHome() {
    this.router.navigateByUrl("home")
  }

  edit() {
    this.editNews.publisherId = this.cID;
    this.editNews.publisher = this.categoryObject[findIndexByID(this.categoryObject, this.cID)];
    this.serv.UpdateNewspaper(this.editNews.id, this.editNews ).subscribe(res=>{
      alert("Changes has been updated")
      this.router.navigateByUrl("home");
    })
  }

}
