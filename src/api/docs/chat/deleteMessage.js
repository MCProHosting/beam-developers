import React from "react";

import Method from "../../method.js";
import Parameter from "../../parameter.js";
import Example from "../../example.js";

import AccessDeniedResponse from "../../accessDeniedResult.js";
import ResourceMissingResponse from "../../resourceMissingResult.js";

export default class DeleteMessageMethod extends Method {
  httpMethod() { return "DELETE"; }
  version() { return 1; }
  uri() { return "/api/v1/chats/:id/message/:message" }
  group() { return "chat"; }
  description() {
    return (
      <p>
        Hitting this endpoint removes a chat message from the channel's
        chat. The message will be removed from the chat log and an event will go
        out to chat servers, which in turn send events to connected users
        instructing the clients to hide the message.
      </p>
    );
  }

  parameters() {
    return [
      new IDParameter(),
      new MessageParameter()
    ];
  }
  examples() {
    return [
      new SuccessfulResponse(),
      new AccessDeniedResponse(),
      new ResourceMissingResponse("Channel"),
      new ResourceMissingResponse("Message")
    ];
  }
}

class IDParameter extends Parameter {
  name() { return "id"; }
  description() { return "The numeric id of the channel you want to remove a message from."; }
}

class MessageParameter extends Parameter {
  name() { return "message"; }
  description() { return "The UUID of the chat message you want to remove."; }
}

class SuccessfulResponse extends Example {
  httpCode() { return 200; }
  data() { return "Message deleted."; }
}
