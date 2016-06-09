import Method from "../../method.js";
import Parameter from "../../parameter.js";
import Example from "../../example.js";

import ResourceMissingResult from "../../resourceMissingResult.js";

export default class ResetPasswordMethod extends Method {
  uri() { return "/api/v1/users/reset"; }
  version() { return 1; }
  httpMethod() { return "PATCH"; }
  group() { return "user"; }
  description() { return "Updates a user's password using the reset code they received via email."; }

  parameters() {
    return [
      new TokenParameter(),
      new PasswordParameter()
    ];
  }
  examples() {
    return [
      new SuccessfulResult(),
      new ResourceMissingResult("User"),
      new ErrorfulResponse()
    ];
  }
}

class TokenParameter extends Parameter {
  name() { return "token"; }
  description() { return "The reset token that they were sent."; }
}

class PasswordParameter extends Parameter {
  name() { return "password"; }
  description() { return "The password to change to."; }
}

class SuccessfulResult extends Example {
  httpCode() { return 200; }
  data() { return "Password has been successfully updated"; }
}

class ErrorfulResponse extends Example {
  httpCode() { return 400; }
  data() { return "Standard invalid response if the password is too weak."; }
}
