import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { NewspaperService } from '../../newspaperService';
import { Newspaper } from '../../Newspapers';
import { MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatCardModule],
  providers: [DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  items: Newspaper[] = [];
  displayedColumns = ['ID', 'Issue No', 'Title', 'Description', 'Publisher Name','Actions'];

  constructor(
    private router: Router,
    private newspaperService: NewspaperService,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.newspaperService.GetAllNewspapers().subscribe((result) => {
      this.items = result;
    });
  }

  DetailsClicked(id: number) {
    this.router.navigateByUrl(`/details/${id}`);
  }

  EditClicked(id: number) {
    console.log(id, 'From Edit');
    this.router.navigateByUrl('/edit/' + id);
  }
  DeleteClicked(id: number) {
    this.router.navigateByUrl('/delete/' + id);
    // console.log(id, 'From Delete');

    // const confirmDelete = confirm(
    //   'Are you sure you want to delete this event?'
    // );

    // if (confirmDelete) {
    //   console.log(id, 'From Delete');
    //   this.newspaperService.DeleteNewspaper(id).subscribe(
    //     () => {
    //       console.log('Event deleted successfully');
    //       this.items = this.items.filter((item) => item.id !== id);
    //     },
    //     (error) => {
    //       console.error('Error deleting event:', error);
    //     }
    //   );
    // }
  }
}
