import React from 'react';
import styles from './Statistics.module.scss'

const StatsListItem = ({id, label, percentage}) => {
  return (
    <li key={id} className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span class={styles.percentage}>{percentage}</span>
    </li>
  )
}

const StatsList = ({ items }) => {
  if(items.length === 0) return null
  return <ul className={styles.statList}>{items.map(StatsListItem)}</ul>
}

const Statisctics = ({ items }) => {
    return (
        <section className={styles.statistics}>
      <h2 className={styles.title}>Upload stats</h2>

   <StatsList items={items}/>
</section>
    )
}

export default Statisctics