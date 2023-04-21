import React from "react";
import s from './UrlString.module.css'
import RepoInfo from "./RepoInfo/RepoInfo";

const UrlString = () => {
    return (
        <div>
            <div className={s.inputWrapper}>
                <input className={s.searchString} type="text" placeholder="Enter repo URL" />
                <button className={s.btn}>Load issues</button>
            </div>
            <div>
                <RepoInfo />
            </div>
        </div>
    )
}

export default UrlString