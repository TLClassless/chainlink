import React, { Component } from "react";
import style from "../../css/userpage.module.css";
import defaultUserPhoto from "../../img/portrait-1.jpg";

export class userLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkName: this.props.linkName,
      linkUrl: this.props.linkUrl
    };
   
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
            <h1>{this.state.linkName}</h1>
            <h3>{this.state.linkUrl}</h3>
          </div>
        </div>
      </div>
      );
  }
}

export default userLinks;
