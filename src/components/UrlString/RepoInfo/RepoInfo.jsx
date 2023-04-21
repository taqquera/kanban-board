import React from "react";
import s from './RepoInfo.module.css'
import star from '../../../star.png'

const RepoInfo = () => {
    return (
        <div className={s.repo}>
            <div className={s.repoName}>
                <a className={s.repoLink} href="https://github.com/facebook/react" target="blank">Facebook  >  React</a>
            </div>
            <div className={s.repoRating}>
                <img className={s.starIcon} src={star} alt="" />
                <p>194K stars</p>
            </div>
        </div>
    )
}

export default RepoInfo 