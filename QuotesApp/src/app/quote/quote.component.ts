import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [

    new Quote(1, "Talk is cheap. Show me the code", "Linus", "Moringa Press"),
    new Quote(2, "I think [Arsene Wenger] is one of these people who is a voyeur. He likes to watch other people. There are some guys who, when they are at home, have a big telescope to see what happens in other families. He speaks, speaks, speaks about Chelsea.", "Jose Mourinho", "Moringa Press")

  ]
  toogleDetails(index) {
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  deleteGoal(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this lovely quote -- ${this.quotes[index].quote}`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
