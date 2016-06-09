import Method from "../../method.js";
import Parameter from "../../parameter.js";

import SuccessfulExample from "./itemExample.js";

export default class FindOneItemMethod extends Method {
  uri() { return "/api/v1/shop/items/:id"; }
  version() { return 1; }
  httpMethod() { return "GET"; }
  group() { return "shop"; }
  description() {
    return "This endpoint retrieves detailed, fully-populated information for a single item in the shop.";
  }

  parameters() {
    return [
      new IDParameter()
    ];
  }
  examples() {
    return [
      new SuccessfulExample()
    ];
  }
}

class IDParameter extends Parameter {
  name() { return "id"; }
  description() { return "The item ID to display."; }
}
