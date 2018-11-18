import { Category } from './categories.model';

export class Group {
  public groupid: number;
  public name: string;
  public position: number;
  public categories: Category[];

  constructor(groupid: number, name: string, position: number, category: Category[]) {
    this.groupid = groupid;
    this.name = name;
    this.position = position;
    this.categories = category;
  }
}
