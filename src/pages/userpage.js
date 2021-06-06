import React, { Component } from 'react';
import style from '../css/userpage.module.css';

export class user extends Component {
    render() {
        return (
            <div className={style.userPage}>
                {/* user page header */}
                <div className="header">
                    <div className={style.userPicture}>
                        <img src="" alt="user"/>
                    </div>
                    <div className={style.userText}>
                        <h1 className={style.userFullName}>
                            Ben Buckley
                        </h1>
                        <h3 className={style.userProfileName}>
                            @TLClassless
                        </h3>
                        <p className={style.userBio}>
                            This is a sample bio for a user, the bio can be up to two lines long.
                        </p>
                    </div>
                </div>

                {/* user page links */}
                <div className={style.userLinks}>
                    <div className={style.userLink}>
                        <div className={style.userLinkFavicon}>

                        </div>
                        <div className={style.userLinkText}>
                            <h1>
                                Facebook Link
                            </h1>
                            <h3>
                                https://facebook.com/mark/
                            </h3>
                        </div>
                    </div>
                </div>

                {/* user page footer */}
                <div className={style.userFooter}>
                    <h1>🔗 CHAINLI.NK</h1>
                </div>
            </div>
        )
    }
}

export default user
