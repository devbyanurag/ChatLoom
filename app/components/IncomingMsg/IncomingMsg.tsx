import React from 'react'
import styles from './IncomingMsg.module.scss'
const IncomingMsg = () => {
    return (
        <div className={styles.incomingMsgContainer}>
            <div className={styles.incomingMsg}>
                <p>hello guys </p>
                <div className={styles.msgshape}></div>
            </div>
            <p className={styles.msgOnlineStatus}>Yesterday 12:10 PM</p>
        </div>
    )
}

export default IncomingMsg