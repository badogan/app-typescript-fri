// import { useState, useEffect } from "react";
import * as React from "react";

import { getRandomUsers } from "../../APIsHelpers/API";
import ChUserCard from "../ChUserCard";
import { GenericList } from "../GenericListComponentCore"; //Allows "a" typed way of mapping - a great reusable component

export default function UsersContainer(props: any) {
  const [userList, setUserList] = React.useState<any[]>([]);

  React.useEffect((): void => {
    getRandomUsers(setUserList);
  }, []);

  return (
    <GenericList
      items={userList}
      itemRenderer={(user, index) => (
        <ChUserCard key={index} name={user.name} website={user.website} />
      )}
    />
  );
}
