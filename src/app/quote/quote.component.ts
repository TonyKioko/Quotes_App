import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  quotes = [

    new Quote(1, "Talk is cheap. Show me the code.", "Linus", "Moringa Press", new Date(2018,3,14) ),
    new Quote(2, "It's not the SIZE of the dog in the fight, but the size of the FIGHT in the dog.", "Archie", "Moringa Press", new Date(2018,3,14) )

  ]
  toogleDetails(index) {
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  deleteGoal(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this quote?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
  addNewQuote(quote){
        let quoteLength = this.quotes.length;
        quote.id=quoteLength+1;
        quote.completeDate = new Date(quote.completeDate)
        this.quotes.unshift(quote)

    }

  constructor() { }

  ngOnInit() {
  }

}
