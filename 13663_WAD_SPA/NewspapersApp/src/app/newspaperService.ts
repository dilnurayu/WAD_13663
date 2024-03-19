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
    return this.httpClient.get<Newspaper[]>('https://localhost:7240/api/Newspapers');
  }

  GetById(id: number): Observable<Newspaper> {
    return this.httpClient.get<Newspaper>(
      'https://localhost:7240/api/Newspapers' + id
    );
  }

  AddNewspaper(item: Newspaper): Observable<Newspaper> {
    return this.httpClient.post<Newspaper>(
      'https://localhost:7240/api/Newspapers',
      item
    );
  }

  UpdateNewspaper(id: number, item: Newspaper): Observable<Newspaper> {
    return this.httpClient.put<Newspaper>(
      `https://localhost:7240/api/Newspapers${id}`,
      item
    );
  }

  DeleteNewspaper(id: number): Observable<any> {
    return this.httpClient.delete('https://localhost:7240/api/Newspapers' + id);
  }

  GetAllPublishers(): Observable<any> {
    return this.httpClient.get<any>('https://localhost:7240/api/Publishers');
  }
}
