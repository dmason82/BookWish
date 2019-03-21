export class Book {
  title: string;
  authors: string[];
  isWished: boolean;
  releaseDate: Date;
  constructor(title: string = '', authors: string[] = [], releaseDate = new Date()) {
    this.title = title;
    this.authors = authors;
    this.isWished = false;
    this.releaseDate = releaseDate;
  }
}
