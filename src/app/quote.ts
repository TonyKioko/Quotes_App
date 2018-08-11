export class Quote {
  public showAuthor:boolean;
  public upvotes:number;
  public downvotes:number;
  constructor(public id:number, public quote:string, public author:string,public publisher:string){
    this.showAuthor = false;
    this.upvotes =0;
    this.downvotes =0;
  }
}
