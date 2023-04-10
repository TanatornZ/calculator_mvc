import PromptSync from "prompt-sync";

const prompt = PromptSync();

export class Model {
  firstValue: number;
  secondValue: number;
  operator: string;

  constructor() {
    this.firstValue = 0;
    this.secondValue = 0;
    this.operator = "";
  }

  getFristValue() {
    const firstValue = parseInt(prompt(""));
    this.firstValue = firstValue;
  }

  getOperator() {
    this.operator = prompt("");
  }

  getSecondValue() {
    const secondValue = parseInt(prompt(""));
    this.secondValue = secondValue;
  }

  getResult() {
    switch (this.operator) {
      case "+":
        return this.firstValue + this.secondValue;
      case "-":
        return this.firstValue - this.secondValue;
      case "*":
        return this.firstValue * this.secondValue;
      case "/":
        if (this.secondValue === 0) {
          return "Result not a number, cannot divide by zero";
        } else {
          return this.firstValue / this.secondValue;
        }
      default:
        return "Result Invalid operator";
    }
  }
}
