import React from "react";

import style from './FriendListItem.module.scss';

const FriendListItem = ({ id, avatar, name, isOnline }) => {
    const statusClassName = isOnline ? style.online : style.offline
    return (
        <li key={id} className={style.item}>
            <span className={statusClassName}></span>
            <img className={style.avatar} src={avatar} alt={avatar} width='48' />
            <p className={style.name}>{name}</p>
        </li>
    )
}

export default FriendListItem