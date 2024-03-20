import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips'
import { MatCardModule } from '@angular/material/card';
import { Newspaper} from '../../Newspapers';
import { NewspaperService } from '../../newspaperService';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatChipsModule, MatCardModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  detailsNews: Newspaper = {
    id: 0,
    title: "",
    issueNo: 0,
    description: "",
    publisherId: 0,
    publisher: {
      id: 0,
      fullName: ""
    }
  }
  NewspaperService = inject(NewspaperService)
  activatedRoute = inject(ActivatedRoute)
  ngOnInit() {
    this.NewspaperService.GetById(this.activatedRoute.snapshot.params["id"]).subscribe((resultedItem) => {
      this.detailsNews = resultedItem
    });
  }
}

