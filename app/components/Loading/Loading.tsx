import React from 'react'
import styles from './Loading.module.scss'
import Image from 'next/image'

const Loading = () => {
  return (
    <div className={styles.container}><Image alt='loading' src="/load2ing.png" height={200} width={200} /></div>
  )
}

export default Loading