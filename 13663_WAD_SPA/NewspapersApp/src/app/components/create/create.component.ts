import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule} from '@angular/material/chips'
import { MatButtonModule } from '@angular/material/button';

import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { NewspaperService } from '../../newspaperService';


@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule, MatChipsModule ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  // Service to get and send data from and to the API
  newspaperService = inject(NewspaperService);
  
  // Needed after succesfull creation
  router = inject(Router);

  // Category Object
  cate: any;

  // category ID To inject to
  cID: number = 0;

  // Empty Object of ToDo
  createNewspaper: any = {
    title: "",
    description: "",
    issueNo: 0,
    publisherId: 0
  }

  ngOnInit() {
    console.log(this.cate);
    this.newspaperService.GetAllPublishers().subscribe((result) => {
      this.cate = result;

      console.log(result);
      
    });

  };
  create() {
    this.createNewspaper.publisherId=this.cID
    this.newspaperService.AddNewspaper(this.createNewspaper).subscribe(result=>{
      alert("Item Saved")
      this.router.navigateByUrl("home")
    });
  };
}