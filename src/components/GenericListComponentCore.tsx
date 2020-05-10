import * as React from "react";

export interface GenericListProps<T> {
  items: T[];
  itemRenderer: (item: T, index: number) => React.ReactNode;
}

export class GenericList<T> extends React.Component<GenericListProps<T>, {}> {
  render() {
    const { items, itemRenderer } = this.props;

    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {items.map(itemRenderer)}
      </div>
    );
  }
}
