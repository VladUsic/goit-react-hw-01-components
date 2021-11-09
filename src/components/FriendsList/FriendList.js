import React from 'react';

import FriendListItem from './FriendListItem';

import style from './FriendsList.module.scss';

const FriendList = ({ friends }) => {
    if (friends.length === 0) return null
    return <ul className={style.friendList}>{friends.map(FriendListItem)}</ul>
}

export default FriendList