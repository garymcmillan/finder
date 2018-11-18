export class Category {
  public catid: number;
  public name: string;
  public level: number;
  public categoryid: number;
  public parentid: number;
  public groupid: number;
  public path: string;

  constructor(catid: number, name: string, level: number, categoryid: number, parentid: number, groupid: number, path: string) {
    this.catid = catid;
    this.name = name;
    this.level = level;
    this.categoryid = categoryid;
    this.parentid = parentid;
    this.groupid = groupid;
    this.path = path;
  }
}
