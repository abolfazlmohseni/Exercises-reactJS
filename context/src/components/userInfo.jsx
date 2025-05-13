import React, { useContext } from "react";
import usercontext from "../context/user";
const UserInfo = () => {
  const userInfo = useContext(usercontext);
  return (
    <>
      <div className="card">
        <div className="Name">user name: {userInfo.Name}</div>
        <div className="LastName">user lastName: {userInfo.lastName}</div>
        <div className="Age">user age: {userInfo.Age}</div>
        <div className="id">user ID: {userInfo.id}</div>
      </div>
    </>
  );
};

export default UserInfo;
