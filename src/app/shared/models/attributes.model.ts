export class SelectedAttribute {
  public name: string;
  public obj: Attribute;

  constructor(name: string, obj: Attribute) {
    this.name = name;
    this.obj = obj;
  }
}

export class Attribute {
    public name: string;
    public priority: string;
    public label: string;
    public options: Options[];

    constructor(name: string, priority: string, label: string, options: Options[]) {
        this.name = name;
        this.priority = priority;
        this.label = label;
        this.options = options;
    }
}

export class Options {
  public label: string;
  public value: number;

  constructor(label: string, value: number) {
    this.label = label;
    this.value = value;
  }
}
