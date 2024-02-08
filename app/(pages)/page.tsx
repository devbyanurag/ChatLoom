'use client'
import styles from "./page.module.scss";
import ChatsList from "../components/ChatsList/ChatsList";
import Chat from "../components/Chat/Chat";
import { useEffect, useState } from "react";

export default function Home() {
  const [isSmallDevice, setIsSmallDevice] = useState<boolean>(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallDevice(window.innerWidth < 767);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.mainContainer}>
      {/* {isSmallDevice ? (
        <ChatsList />
      ) : (
        <>
          <ChatsList />
          <Chat />
        </>
      )} */}
      <ChatsList />
          <Chat />

    </div>
  );
}
