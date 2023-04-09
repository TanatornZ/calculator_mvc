import { View } from "./view";
import { Model } from "./model";

function calculator() {
  const view = new View();
  const model = new Model();

  view.logFirstEnter();
  model.getFristValue();

  view.logOperatorEnter();
  model.getOperator();

  view.logSecondEnter();
  model.getSecondValue();

  view.logResult(model.getResult());
}

calculator();
