import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Newspaper } from './Newspapers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewspaperService {
  constructor(private httpClient: HttpClient) {}

  GetAllNewspapers(): Observable<Newspaper[]> {
    return this.httpClient.get<Newspaper[]>('https://localhost:7240/api/Newspapers/GetAll');
  }

  GetById(id: number): Observable<Newspaper> {
    return this.httpClient.get<Newspaper>(
      'https://localhost:7240/api/Newspapers/GetById/ ' + id
    );
  }

  AddNewspaper(item: Newspaper): Observable<Newspaper> {
    return this.httpClient.post<Newspaper>(
      'https://localhost:7240/api/Newspapers/PostNewspaper ',
      item
    );
  }

  UpdateNewspaper(id: number, item: Newspaper) {
    return this.httpClient.put<Newspaper>(
      `https://localhost:7240/api/Newspapers/PutNewspaper/${id}`, item
    );
  }

  DeleteNewspaper(id: number) {
    return this.httpClient.delete('https://localhost:7240/api/Newspapers/DeleteNewspaper/' + id);
  }

  GetAllPublishers() {
    return this.httpClient.get('https://localhost:7240/api/Publishers/GetAll')
  }
}
