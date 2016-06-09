import React from "react";

import Method from "../../method.js";
import Parameter from "../../parameter.js";
import Example from "../../example.js";

import AccessDeniedResponse from "../../accessDeniedResult.js";
import ResourceMissingResponse from "../../resourceMissingResult.js";

export default class UpdateChatSettingsMethod extends Method {
  httpMethod() { return "PUT"; }
  uri() { return "/api/v1/chats/:id"; }
  version() { return 1; }
  group() { return "chat"; }
  description() { return "Updates a particular chat's settings."; }

  parameters() {
    return [
      new IDParameter(),
      new LinksAllowedParameter(),
      new LinksClickableParameter(),
      new SlowchatParameter()
    ];
  }
  examples() {
    return [
      new SuccessfulResponse(),
      new ErrorfulResponse(),
      new AccessDeniedResponse(),
      new ResourceMissingResponse("Channel")
    ];
  }
}

class IDParameter extends Parameter {
  name() { return "id"; }
  description() { return "The ID of the channel whose chat you want to update."; }
}

class LinksAllowedParameter extends Parameter {
  name() { return "linksAllowed"; }
  optional() { return true; }
  default() { return undefined; }
  description() {
    return (<p>Whether links are allowed to be posted in the chat. Valid values
    include: <code>true</code> and <code>false</code>.</p>);
  }
}

class LinksClickableParameter extends Parameter {
  name() { return "linksClickable"; }
  optional() { return true; }
  default() { return undefined; }
  description() {
    return (<p>Whether links are allowed to be clicked from the chat. Valid values
    include: <code>true</code> and <code>false</code>.</p>);
  }
}

class SlowchatParameter extends Parameter {
  name() { return "slowchat"; }
  description() {
    return (
      <p>
        The time interval, in seconds, that users have to wait between
        sending messages.  Should be number-like.
      </p>
    );
  }
  optional() { return true; }
  default() { return undefined; }
}

class SuccessfulResponse extends Example {
  httpCode() { return 200; }
  data() {
    return {
      linksAllowed: true,
      linksClickable: false,
      slowchat: 3
    }
  }
}

class ErrorfulResponse extends Example {
  httpCode() { return 400; }
  data() { return "Standard invalid response."; }
}
