import { Directive } from '@angular/core';
import { Quote } from './quote';

@Directive({
  selector: '[appVotes]'
})
export class VotesDirective {
  upvotes =0;
  downvotes =0;


  constructor() { }


}
