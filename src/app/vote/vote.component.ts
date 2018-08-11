import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  upvotes:number =0;
  downvotes:number =0;
  constructor() { }

  likeQuote(){
    this.upvotes +=1
  }
  dislikeQuote(){
    this.downvotes -=1
  }

  ngOnInit() {
  }

}
