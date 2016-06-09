import React from "react";

import Method from "../../method.js";
import Example from "../../example.js";

export default class ListCategoriesMethod extends Method {
  uri() { return "/api/v1/shop/categories"; }
  version() { return 1; }
  httpMethod() { return "GET"; }
  group() { return "shop"; }
  description() {
    return (
      <p>
        Items in the shop may belong to one or more categories. This endpoint
        lists the categories that are available.
      </p>
    )
  }

  parameters() {
    return [];
  }
  examples() {
    return [
      new SuccessfulResult()
    ];
  }
}

class SuccessfulResult extends Example {
  httpCode() { return 200; }
  data() {
    return [{
      color: "red",
      description: "Unlock epic emoticon packs!",
      id: 1,
      title: "Emoticons"
    }];
  }
}
