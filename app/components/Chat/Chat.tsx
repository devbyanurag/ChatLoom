import React from 'react'
import styles from "./Chat.module.scss";
import IncomingMsg from '../IncomingMsg/IncomingMsg';
import OutgoingMsg from '../OutgoingMsg/OutgoingMsg';
import Image from 'next/image';

const Chat = () => {
    return (
        <div className={styles.chatContainer}>

            <div className={styles.header}>
                <div className={styles.profileDetails}>
                    <Image alt='img' src={'/profile12.jpg'} width={100} height={100} />
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
                    <Image src={'/send.png'} alt='send' width={100} height={100} />
                </button>

            </div>


        </div>
    )
}

export default Chat