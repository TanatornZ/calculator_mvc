import PromptSync from "prompt-sync";

const prompt = PromptSync();

export class View {
  textFirstEnter: string;
  textSecondEnter: string;
  textOperatorEnter: string;
  constructor() {
    this.textFirstEnter = "Enter first value ";
    this.textSecondEnter = "Enter Second value ";
    this.textOperatorEnter = "Enter operator (+,-,*,/)  ";
  }

  getInputs() {
    console.log(this.textFirstEnter);
    const firstValue = prompt("");
    console.log(this.textOperatorEnter);
    const operator = prompt("");
    console.log(this.textSecondEnter);
    const secondValue = prompt("");
    return { firstValue, operator, secondValue };
  }

  logResult(result: string | number) {
    console.log(result);
  }

  logErrorDivideByZero() {
    console.log("Result not a number, cannot divide by zero");
  }
  logErrorInvalidOperator() {
    console.log("Result Invalid Operator");
  }
}
