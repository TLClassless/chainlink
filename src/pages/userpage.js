import React, { Component } from "react";
import style from "../css/userpage.module.css";
import defaultUserPhoto from "../img/portrait-1.jpg";
import UserLinks from "./components/userLinks.js";
import Footer from "./components/footer.js";

// test api:
export let data = require("../api/sample.json");

// data handling: 
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
            links: data.users[0].userLinks,
        };
      }

  render() {
    let links = this.state.links;

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

        <hr className={style.line} />
        
        {links.map(({linkName, linkUrl, key}) => {
          return <UserLinks 
            key={key}
            linkName={linkName}
            linkUrl={linkUrl}
          />
        })}

        {/* user page footer */}
        <Footer />
      </div>
    );
  }
}

export default user;
