import React from 'react'
import styles from './NotFoundBlock.module.scss'

function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <h1>
        <span>:(</span>
        <br />
        Ни чего не найдено
      </h1>
    </div>
  )
}

export default NotFoundBlock;