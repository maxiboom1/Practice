import { Component, EventEmitter, Input, Output } from '@angular/core';
import BookModel from 'src/app/models/BookModel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent {
  
  @Input()
  public book: BookModel;

  @Output()
  public deleteEvent = new EventEmitter<number>(); // Declare event 
  
  public async deleteBook() {    
    this.deleteEvent.emit(this.book.bookId); // Trigger event and pass data 
}
}
