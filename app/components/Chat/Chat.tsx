import React from 'react'
import styles from "./Chat.module.scss";
import IncomingMsg from '../IncomingMsg/IncomingMsg';
import OutgoingMsg from '../OutgoingMsg/OutgoingMsg';

const Chat = () => {
    const imgurl = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return (
        <div className={styles.chatContainer}>

            <div className={styles.header}>
                <div className={styles.profileDetails}>
                    <img src={imgurl} />
                    <div className={styles.profileDetailsValues}>
                        <h3>Zoro Tiwari</h3>
                        <p>Online</p>
                    </div>
                </div>

            </div>
            <div className={styles.chatsMainContainer}>



                <IncomingMsg />
                <IncomingMsg />
                <IncomingMsg />
                <IncomingMsg />
                <IncomingMsg />
                <IncomingMsg />
                <IncomingMsg />
                <IncomingMsg />
                <IncomingMsg />
              
            <OutgoingMsg/>
            </div>
            <div className={styles.footer}>
                <input className={styles.inputText} type="text" placeholder='Type a message here...' />

                <button className={styles.sendBtn}>
                    <img src={'./send.png'} />
                </button>

            </div>


        </div>
    )
}

export default Chat