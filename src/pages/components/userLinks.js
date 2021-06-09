import React, { Component } from "react";
import style from "../../css/userpage.module.css";
import defaultUserPhoto from "../../img/portrait-1.jpg";

export class userLinks extends Component {
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
            <h1>Facebook</h1>
            <h3>https://facebook.com/hellobenbuckley/</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default userLinks;
