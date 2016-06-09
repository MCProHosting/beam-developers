import React from "react";

import Method from "../../method.js";
import Parameter from "../../parameter.js";
import Example from "../../example.js";

import ResourceMissingResult from "../../resourceMissingResult.js";

export default class CreateResetTokenMethod extends Method {
  uri() { return "/api/v1/users/reset"; }
  version() { return 1; }
  httpMethod() { return "POST"; }
  group() { return "user"; }
  description() {
    return (
      <div>
        <p>
          This is the "lost password" functionality. Hitting this endpoint
          will cause a password reset request to be sent to the user via their email.
        </p>
        <p>
          That email contains a code which they can use to complete their
          reset request.
        </p>
      </div>
    )
  }

  parameters() {
    return [
      new EmailParameter()
    ];
  }
  examples() {
    return [
      new SuccessfulExample(),
      new ResourceMissingResult("User"),
      new RateLimitExample()
    ];
  }
}

class EmailParameter extends Parameter {
  name() { return "email"; }
  description() { return "Users's email address."; }
}

class SuccessfulExample extends Example {
  httpCode() { return 200; }
  data() { return "Successfully sent password reset email"; }
}

class RateLimitExample extends Example {
  httpCode() { return 429; }
  data() { return "Too many reset requests. Please wait a few minutes, or check your spambox"; }
}
