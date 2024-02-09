import React from 'react'
import styles from './OutgoingMsg.module.scss'
const OutgoingMsg = () => {
    return (
        <div className={styles.outgoingMsgContainer}>
            <div className={styles.outgoingMsg}>
                <p>hello guys </p>
                <div className={styles.msgshape}></div>
            </div>
            <p className={styles.msgOnlineStatus}>Yesterday 12:10 PM</p>
        </div>
    )
}

export default OutgoingMsg