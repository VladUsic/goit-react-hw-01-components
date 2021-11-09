import React from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats';

import styles from './Profile.module.scss';

const Profile = ({name, tag, location, avatar, stats}) => {
return (
<div className={styles.profile}>
  <div className="description">
    <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
    <p className={styles.name}>{name}</p>
    <p className={styles.tag}>{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>

  <Stats {...stats}/>
</div>
    )
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf({
    followers: PropTypes.number, 
    views: PropTypes.number, 
    likes: PropTypes.number,
  }),
}

export default Profile