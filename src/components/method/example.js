import React from "react";
import If from "../../lib/If";
import HTTPCodes from "../../lib/httpCodes.js";

export default class ExampleComponent extends React.Component {
  constructor(params) {
    super(params);
  }

  header() {
    let httpCode = HTTPCodes.infoFor(this.props.example.httpCode())
    let statusClassName = "http-status-"+httpCode.type;

    return (
      <div className="api-example-header">
        <span className={statusClassName}>{ httpCode.code }</span>
        <span className="http-status-info">{ httpCode.msg }</span>
      </div>
    );
  }

  render() {
    return (
      <div className="api-example">
        { this.header() }
        <If test={ !!this.props.example.data() }>
          <pre>
            <code className="example-json json">
              { JSON.stringify(this.props.example.data(), null, "  ") }
            </code>
          </pre>
        </If>
        <p>{ this.props.example.description() }</p>
      </div>
    )
  }
}
