import { View } from "./view";
import { Model } from "./model";

class Controller {
  View: View;
  Model: Model;
  constructor(View: View, Model: Model) {
    this.View = View;
    this.Model = Model;
  }

  execute() {
    this.View.logFirstEnter();
    this.Model.getFristValue();

    this.View.logOperatorEnter();
    this.Model.getOperator();

    this.View.logSecondEnter();
    this.Model.getSecondValue();

    this.View.logResult(this.Model.getResult());
  }
}

const view = new View();
const model = new Model();

const calculator = new Controller(view, model);

calculator.execute();
