import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import AuthorModel from 'src/app/models/AuthorModel';
import BookModel from 'src/app/models/BookModel';
import { DataService } from 'src/app/services/data.service';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
    selector: 'app-insert',
    templateUrl: './insert.component.html',
    styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

    public constructor(
        private dataService: DataService, 
        private notifyService: NotifyService, 
        private router: Router) { }
    
    public authors: AuthorModel[];
    public book = new BookModel();

    public async ngOnInit(): Promise<void> {
        
        try{
            this.authors = await this.dataService.getAllAuthors();
        }catch(err:any){
            this.notifyService.error(err);
        }
        
    }

    public async send(){
        try{
            await this.dataService.addBook(this.book);
            this.notifyService.success('Book has been added');
            this.router.navigateByUrl("/list");
        }catch(err: any){
            this.notifyService.error(err);
        }
    }

    
}
