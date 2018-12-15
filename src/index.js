import React from "react";
import quicklink from "./quicklink";

class Quicklink extends React.Component {
  constructor(props) {
    super(props);
    this.quicklinkRef = React.createRef();
  }
  componentDidMount() {
    const quicklinkEle = this.quicklinkRef.current;
    quicklink({
      ...this.props.quicklink,
      el: quicklinkEle
    });
  }
  render() {
    return <div ref={this.quicklinkRef}>{this.props.children}</div>
  }
}

export default Quicklink;