import React from 'react'
import styles from "./ChatsList.module.scss";
import Image from 'next/image';


const ChatsList = () => {
  const val = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  const imgurl = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return (
    <div className={styles.chatListContainer}>
      <div className={styles.profileContainer}>
        <div className={styles.profileDetails} >
          <Image width="30" height="30" src={imgurl} alt="profile--v1" />
          <p>Rohan Singh</p>
        </div>
        <Image width="30" height="30" src="./setting.png" alt="settings--v1" />
      </div>
      <div className={styles.chatsContainer}>
      {
        val.map(data => {
          return <div key={data} className={styles.chatContainer}>
            <div className={styles.chatProfileContainer}>
              <Image width="30" height="30" src={imgurl} alt="profile--v1" />
              <div className={styles.profileOverView} >
                <h3>Rishab</h3>
                <p>Aaur bhai kya haal hai sb badiya hai naAaur bhai kya haal hai sb badiya hai naAaur bhai kya haal hai sb badiya hai naAaur bhai kya haal hai sb badiya hai na?</p>
              </div>
            </div>
            <div className={styles.chatNotificationContainer}>
              <p>12:55 pm</p>
              <span></span>
            </div>
          </div>
        })
      }
      </div>


    </div>
  )
}

export default ChatsList