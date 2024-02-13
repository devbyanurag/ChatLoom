import React from 'react'
import styles from "./ChatsList.module.scss";
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { setUserData } from '@/app/store/slice/userSlice';
import { useRouter } from 'next/navigation';


const ChatsList = () => {
  const dispatch = useAppDispatch();
  const router = useRouter()
  const user = useAppSelector((state) => state.user)



  const val = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

  function handleLogout(){
    dispatch(setUserData({ email: null, name: null, id: null, isLoggedIn: false }));
    localStorage.removeItem('tokenchatloom')
    router.replace('/login')
  }
  return (
    <div className={styles.chatListContainer}>
      <div className={styles.profileContainer}>
        <div className={styles.profileDetails} >
          <Image width="30" height="30" src={'/profile12.jpg'} alt="profile--v1" />
          <p onClick={()=>{handleLogout()}}>{user.name}</p>
        </div>
        <Image width="30" height="30" src="/setting.png" alt="settings--v1" />
      </div>
      <div className={styles.chatsContainer}>
      {
        val.map(data => {
          return <div key={data} className={styles.chatContainer}>
            <div className={styles.chatProfileContainer}>
              <Image width={100} height={100} src={'/profile12.jpg'} alt="profile--v1" />
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