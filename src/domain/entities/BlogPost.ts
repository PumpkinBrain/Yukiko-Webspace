export default class BlogPost {
  title: string;
  tag: string;
  date: string;
  file: string;

  constructor(title: string, tag: string, date: string, file: string) {
    this.title = title;
    this.tag = tag;
    this.date = date;
    this.file = file;
  }
}
