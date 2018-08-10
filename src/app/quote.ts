export class Quote {
  public showAuthor:boolean;
  constructor(public id:number, public quote:string, public author:string,public publisher:string){
    this.showAuthor = false;
  }
}
