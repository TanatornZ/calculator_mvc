export class View {
  textFirstEnter: string;
  textSecondEnter: string;
  textOperatorEnter: string;
  constructor() {
    this.textFirstEnter = "Enter first value ";
    this.textSecondEnter = "Enter Second value ";
    this.textOperatorEnter = "Enter operator (+,-,*,/)  ";
  }

  logFirstEnter() {
    console.log(this.textFirstEnter);
  }

  logOperatorEnter() {
    console.log(this.textOperatorEnter);
  }

  logSecondEnter() {
    console.log(this.textSecondEnter);
  }

  logResult(result: string | number) {
    console.log(result);
  }
}
