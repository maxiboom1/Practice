import { Component} from '@angular/core';
import BookModel from 'src/app/models/BookModel';
import { DataService } from 'src/app/services/data.service';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

    public constructor(private dataService: DataService, private notifyService: NotifyService) { }
    public books: BookModel[] = []; 
    public searchString: string;
    
    
    public async search() {
        try {            
            this.books = await this.dataService.getBooksBySearch(this.searchString);
        }
        catch(err: any) {
            this.notifyService.error(err);
        }
    }

    public async deleteThisBook(bookId: number): Promise<void>{
        const ok = confirm("Sure?");
        
        if(ok){
            await this.dataService.deleteBook(bookId);
            this.notifyService.success("Book has been deleted");
            
            //Reset search list
            this.books = [];
            this.searchString = "";
        }
 
    }
    
}
