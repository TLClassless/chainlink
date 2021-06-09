import React, { Component } from "react";
import style from "../css/userpage.module.css";
import defaultUserPhoto from "../img/portrait-1.jpg";
import UserLinks from "./components/userLinks.js";

// test api:
let data = require("../api/sample.json");
console.log(data);

let userName = data.users[0].username;
let userFullName = data.users[0].userFullname;
let userPhoto = defaultUserPhoto;
let userBio = data.users[0].userBio;

export class user extends Component {
  render() {
    return (
      <div className={style.userPage}>
        {/* user page header */}
        <div className={style.header}>
          <img className={style.userPicture} src={userPhoto} alt="User" />
          <div className={style.userText}>
            <h1 className={style.userFullName}>{userFullName}</h1>
            <h3 className={style.userProfileName}>@{userName}</h3>
            <p className={style.userBio}>{userBio}</p>
          </div>
        </div>

        {/* user page links */}
        <UserLinks />

        {/* user page footer */}
        <h1 className={style.userFooter}>🔗 CHAINLI.NK</h1>
      </div>
    );
  }
}

export default user;
