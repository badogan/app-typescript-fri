import * as React from "react";
import { GenericList } from "./GenericListComponentCore";
const users = ["Ali", "Veli", "Tom"];
export default () => (
  <GenericList key={1} items={users} itemRenderer={item => <div>{item}</div>} />
);
