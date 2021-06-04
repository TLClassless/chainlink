import React, { Component } from 'react'

export class user extends Component {
    render() {
        return (
            <div className="user-page">
                {/* user page header */}
                <div className="header">
                    <div className="user-picture">
                        <img src="" />
                    </div>
                    <div className="user-text">
                        <h1 className="user-real-name">
                            Ben Buckley
                        </h1>
                        <h3 className="user-profile-name">
                            @TLClassless
                        </h3>
                        <p className="user-bio">
                            This is a sample bio for a user, the bio can be up to two lines long.
                        </p>
                    </div>
                </div>

                {/* user page links */}
                <div className="user-links">
                    <div className="user-link">
                        <div className="user-link-favicon">

                        </div>
                        <div className="user-link-text">
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
                <div className="user-footer">
                    <h1>🔗 CHAINLI.NK</h1>
                </div>
            </div>
        )
    }
}

export default user
