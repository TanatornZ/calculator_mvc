import { View } from "./view";
import { Model, IModel, ModelError } from "./model";

class Controller {
  View: View;
  Model: IModel;
  constructor(View: View, Model: Model) {
    this.View = View;
    this.Model = Model;
  }

  execute() {
    const { firstValue, secondValue, operator } = this.View.getInputs();

    try {
      const results = this.Model.getResult(
        Number(firstValue),
        Number(secondValue),
        operator
      );
      this.View.logResult(results);
    } catch (err: unknown) {
      if (err instanceof Error) {
        if (err.message == ModelError.INVALID_OPERATOR) {
          this.View.logErrorInvalidOperator();
        } else if (err.message == ModelError.DIVIDE_BY_ZERO) {
          this.View.logErrorDivideByZero();
        }
      }
    }
  }
}

const view = new View();
const model = new Model();

const calculator = new Controller(view, model);

calculator.execute();
