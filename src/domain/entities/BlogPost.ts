export default class BlogPost {
  id: number;
  title: string;
  tag: string;
  date: string;
  file: string;
  description: string;

  constructor(id: number, title: string, tag: string, date: string, file: string, description: string) {
    this.id = id;
    this.title = title;
    this.tag = tag;
    this.date = date;
    this.file = file;
    this.description = description;
  }
}
