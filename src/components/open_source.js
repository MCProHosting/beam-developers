import React from "react";

export default class OpenSource extends React.Component {
  constructor(params) {
    super(params);
    this.libraries = [
      { name: "wsabi", repo: "MCProHosting/wsabi", desc: "HTTP-over-websocket layer for the Hapi web framework."},
      { name: "redutil", repo: "MCProHosting/redutil", desc: "Thread-safe and consistent Redis utilities for Go."},
      { name: "oxide.js", repo: "MCProHosting/oxide ", desc: "Node library for interacting with graphite and statsd."},
      { name: "ccbill-node", repo: "MCProHosting/ccbill-node", desc: "Gateway for CCBill payment processing" },
    ];
  }

  render() {
    return (
      <div className="open-source component">
        <div className="component-header">
          <h2>Open Source</h2>
          <span>Come take a look at our freely available software, on GitHub!</span>

          <ul className="oss-libraries">{this.libraries.map((l, key) => {
            let href = `https://github.com/${l.repo}`;
            return (
              <li key={key} className="oss-library">
                <a href={href} target="_blank">
                  <p>{ l.name }</p>
                  <small>{l.desc}</small>
                </a>
              </li>
            );
          })}</ul>
        </div>
      </div>
    );
  }
}
