import { Component, OnInit } from '@angular/core';
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

    public constructor(private dataService: DataService, private notifyService: NotifyService) { }
    
    public authors: AuthorModel[];
    public book: BookModel;

    public async ngOnInit(): Promise<void> {
        
        try{
            console.log('xxx')
            this.authors = await this.dataService.getAllAuthors();
        }catch(err:any){
            this.notifyService.error(err);
        }
        
    }

    public send(){
        console.log(this.book)
    }
}
