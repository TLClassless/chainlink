import React, { Component } from "react";
import style from "../css/userpage.module.css";
import defaultUserPhoto from "../img/portrait-1.jpg";
import UserLinks from "./components/userLinks.js";

// test api:
export let data = require("../api/sample.json");

let currentUser = data.users[0];
let userName = currentUser.username;
let userFullName = currentUser.userFullname;
let userPhoto = defaultUserPhoto;
let userBio = currentUser.userBio;

console.log(currentUser);

export class user extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: data.users[0].userLinks
        };
      }
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
        {this.state.links.forEach(userLinks => console.log(userLinks))}
        
        <UserLinks 
            linkName={this.state.links[0].linkName}
            linkUrl={this.state.links[0].linkUrl}
        />

        {/* user page footer */}
        <h1 className={style.userFooter}>🔗 CHAINLI.NK</h1>
      </div>
    );
  }
}

export default user;
