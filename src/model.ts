export interface IModel {
  getResult: (
    firstValue: number,
    secondValue: number,
    operator: string
  ) => number | string;
}

export enum ModelError {
  DIVIDE_BY_ZERO = "DIVIDE_BY_ZERO",
  INVALID_OPERATOR = "INVALID_OPERATOR",
}
export class Model implements IModel {
  constructor() {}

  getResult(firstValue: number, secondValue: number, operator: string) {
    switch (operator) {
      case "+":
        return firstValue + secondValue;
      case "-":
        return firstValue - secondValue;
      case "*":
        return firstValue * secondValue;
      case "/":
        if (secondValue === 0) {
          throw new Error(ModelError.DIVIDE_BY_ZERO);
        } else {
          return firstValue / secondValue;
        }
      default:
        throw new Error(ModelError.INVALID_OPERATOR);
    }
  }
}
