import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appConfig } from '../utils/app-config';
import { firstValueFrom } from "rxjs";
import AuthorModel from '../models/AuthorModel';
import BookModel from '../models/BookModel';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

    public async getAllAuthors(): Promise<AuthorModel[]> {
        const observable = this.http.get<AuthorModel[]>(appConfig.authors);
        const authors = await firstValueFrom(observable);
        return authors;
    }

    public async getBooksBySearch(searchString:string): Promise<BookModel[]> {
        const observable = this.http.get<BookModel[]>(appConfig.booksBySearch + searchString);
        const books = await firstValueFrom(observable);
        return books;
    }
    
    
}
