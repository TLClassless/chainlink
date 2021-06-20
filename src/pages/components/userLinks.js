import React, { Component } from "react";
import style from "../../css/userpage.module.css";
// import defaultUserPhoto from "../../img/portrait-1.jpg";

export class userLinks extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      key: this.props.key,
      linkName: this.props.linkName,
      linkUrl: this.props.linkUrl
    };
  }

  render() {
    let linkName = this.state.linkName;
    let linkUrl = this.state.linkUrl;

    return (
      <div className={style.userLinks}>
        <a className={style.userLink} href={linkUrl}>
          <img
            className={style.userFavicon}
            src={"https://www.google.com/s2/favicons?sz=64&domain_url=" + linkUrl}
            alt="User"
          />
          <div className={style.userLinkText}>
            <h1>{linkName}</h1>
            <h3>{linkUrl}</h3>
          </div>
        </a>
      </div>
      );
  }
}

export default userLinks;
