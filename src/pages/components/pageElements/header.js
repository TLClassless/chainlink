import React, { Component } from 'react';
import style from '../../../css/userpage.module.css';
import { HiDotsCircleHorizontal } from "react-icons/hi";

export class header extends Component {
    render() {
        return (
            <div className={style.headerDiv}>
                <div className={style.headerContainer}>
                    <div className={style.headerItems}>
                        <p></p>
                        <HiDotsCircleHorizontal />
                    </div>
                </div>
            </div>
        )
    }
}

export default header
