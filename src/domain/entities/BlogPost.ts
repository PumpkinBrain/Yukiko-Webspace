export default class BlogPost {
  title: string;
  tag: string;
  date: string;
  file: string;
  description: string;

  constructor(title: string, tag: string, date: string, file: string, description: string) {
    this.title = title;
    this.tag = tag;
    this.date = date;
    this.file = file;
    this.description = description;
  }
}
