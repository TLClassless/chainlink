import React, { Component } from "react";
import style from "../../css/userpage.module.css";
import defaultUserPhoto from "../../img/portrait-1.jpg";

export let data = require("../../api/sample.json");
console.log(data);

export class userLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: data.users[0].userLinks,
    };
    console.log(this.state.links);
  }

  render() {
    return (
      <div className={style.userLinks}>
        <div className={style.userLink}>
          <img
            className={style.userFavicon}
            src={defaultUserPhoto}
            alt="User"
          />
          <div className={style.userLinkText}>
            <h1>{this.state.links[0].linkName}</h1>
            <h3>{this.state.links[0].linkUrl}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default userLinks;
