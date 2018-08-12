import { Component, OnInit ,Output,ViewChild,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @ViewChild('goalForm') quoteForm: NgForm;
  newQuote=new Quote(0,"","","",new Date());
  @Output() addQuote=new EventEmitter<Quote>();

    submitQuote(){
        this.addQuote.emit(this.newQuote);
        // this.newQuote.quote =
        console.log(this.newQuote.quote)
        // this.quoteForm.reset()

    }
  constructor() {
    // this.newQuote =[];
   }

  ngOnInit() {
  }

}
