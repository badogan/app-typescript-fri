import * as React from "react";

import { FCCounterCore } from "./FCCounterCore";

export default class extends React.Component<{}, { count: number }> {

  state = { count: 0 };

  render() {
    return (
      <FCCounterCore
        label={"SFCCounter"}
        count={this.state.count}
        onIncrement={() => {
          this.setState({ count: this.state.count + 1 });
        }}
      />
    );
  }
}
