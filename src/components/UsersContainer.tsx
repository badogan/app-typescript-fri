// import { useState, useEffect } from "react";
import * as React from "react";

import { getRandomUsers } from "../APIsHelpers/API";
import ChUserCard from "./ChUserCard";
import { GenericList } from "./GenericListComponentCore";

type Props = { userList: object[] };

export default function UsersContainer() {
  const [userList, setUserList] = React.useState<any[]>([]);

  React.useEffect(() => {
    getRandomUsers(setUserList);
  }, []);

  return (
    <GenericList
      items={userList}
      itemRenderer={(user,index) => (
        <ChUserCard key={index} name={user.name} website={user.website} />
      )}
    />
  );
}
