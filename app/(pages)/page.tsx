'use client'
import styles from "./page.module.scss";
import ChatsList from "../components/ChatsList/ChatsList";
import Chat from "../components/Chat/Chat";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import apiInstance from "../utils/api";
import { toast } from 'react-toastify'
import { useRouter } from "next/navigation";
import { setUserData } from "../store/slice/userSlice";
import Loading from "../components/Loading/Loading";


export default function Home() {
  const dispatch = useAppDispatch();

  //for small devices
  const [isSmallDevice, setIsSmallDevice] = useState<boolean>(false);
  const user = useAppSelector((state) => state.user)
  const router = useRouter()

  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    function handleResize() {
      setIsSmallDevice(window.innerWidth < 767);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
// checking token expired or not
    async function verifyToken(token: string) {
      try {
        setLoading(true)
        const response = await apiInstance.post('/user/verify-login', {
          token: token
        });
        dispatch(setUserData({ email: response.data.email, name: response.data.name, id: response.data.id, isLoggedIn: true }));
      } catch (error: any) {
        if (error.response && error.response.data && error.response.data.message) {
          if (error.response.status === 401) {
            toast.error(error.response.data.message);
            localStorage.removeItem('tokenchatloom')
            router.replace('/login')

          }
        } else {
          toast.error('An unknown error occurred');
        }
      }
      finally {
        setLoading(false)

      }
    }

    const storedToken = localStorage.getItem('tokenchatloom');
    if (storedToken) {
      verifyToken(storedToken);
    }
    else (
      router.replace('/login')
    )
  }, []);


  return (
    <div className={styles.mainContainer}>
      {loading && <Loading />}

      {user.isLoggedIn &&
        (isSmallDevice ? (
          <ChatsList />
        ) : (
          <>
            <ChatsList />
            <Chat />
          </>
        ))

      }

    </div>
  );
}
