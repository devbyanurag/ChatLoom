import React from 'react'
import styles from "./ChatsList.module.scss";


const ChatsList = () => {
  return (
    <div className={styles.chatListContainer}>
      <div className={styles.profileContainer}>
        <div className={styles.profileDetails} >
          <img width="30" height="30" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile--v1" />
          <p>Rohan Singh</p>
        </div>
        <img width="30" height="30" src="./setting.png" alt="settings--v1" />

      </div>

    </div>
  )
}

export default ChatsList