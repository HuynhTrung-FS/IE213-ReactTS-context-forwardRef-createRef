import React, { useContext } from "react";
import CurrentUserContext from "../context";

export default function ChildComponent() {
  const user = useContext(CurrentUserContext);
  return <div>The current user is {user?.username}</div>;
}
