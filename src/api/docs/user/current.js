import React from "react";
import Method from "../../method.js";
import Example from "../../example.js";

import ExpandedSuccessfulExample from "./expandedSuccessfulExample.js";

export default class CurrentUserMethod extends Method {
  uri() { return "/api/v1/users/current"; }
  version() { return 1; }
  httpMethod() { return "GET"; }
  group() { return "user"; }
  description() { return (
    <p>
      Returns the user associated with the current auth. session (when using
      cookie-based sessions) or auth token (when using OAuth). This may be used
      as a means to check whether or not a user is currently logged in.
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
  data() { return "User not logged in."; }
}
