import React from "react";

import Method from "../../method.js";
import Example from "../../example.js";

import ExpandedSuccessfulExample from "./expandedSuccessfulExample.js";

export default class RefreshUserMethod extends Method {
  uri() { return "/api/v1/current/refresh"; }
  version() { return 1; }
  httpMethod() { return "POST"; }
  group() { return "user"; }
  description() { return (
    <p>
      We cache certain attributes of the user on the session. In some cases it
      is necessary to manually refresh, such as after a successful Premium or
      Subscription purchase.  This endpoint allows you to do that.
    </p>
  )}

  parameters() {
    return [];
  }
  examples() {
    return [
      new ExpandedSuccessfulExample(),
      new ErrorfulResult()
    ];
  }
}

class ErrorfulResult extends Example {
  httpCode() { return 400; }
  data() { return "You must be authenticated to use this endpoint."; }
}
