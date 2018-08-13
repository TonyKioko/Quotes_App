import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  quotes = [

    new Quote(1, "Talk is cheap. Show me the code.", "Linus", "Moringa Press", new Date(2018,7,13) ),
    new Quote(2, "The chance of the buttered side of the bread falling face down is directly proportional to the cost of the carpet..", "Archie", "Moringa Press", new Date(2018,7,13) )

  ]
  toogleDetails(index) {
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  deleteQuote(isComplete, index) {
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
