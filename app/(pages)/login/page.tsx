'use client'
import React, { useState } from 'react';
import styles from './login.module.scss';
import Link from 'next/link';
import { toast } from 'react-toastify';
import apiInstance from '@/app/utils/api';
import Loading from '@/app/components/Loading/Loading';
import { useAppSelector } from '@/app/store/hooks';
import { RootState } from '@/app/store/store';
import { useDispatch } from 'react-redux';
import { setUserData } from '@/app/store/slice/userSlice';
import { useRouter } from 'next/navigation';

interface LoginValue {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false);
  const loginMockValue: LoginValue = {
    email: "anurag@gmail.com",
    password: ''
  };
  const [loginValue, setLoginValue] = useState<LoginValue>(loginMockValue);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginValue({
      ...loginValue,
      email: e.target.value
    });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginValue({
      ...loginValue,
      password: e.target.value
    });
  };


  const handleLogin = async (e) => {
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    try {
      if (loginValue.email === "") {
        toast.error('Email cannot be empty');
        return;
      } else if (!emailRegex.test(loginValue.email)) {
        toast.error('Please enter a valid email address');
        return;
      } else if (loginValue.password === "") {
        toast.error('Password cannot be empty');
        return;
      }
      setLoading(true)
      const response = await apiInstance.post('/user/login', {
        email: loginValue.email,
        password: loginValue.password
      });
      dispatch(setUserData({ email: response.data.email, name: response.data.name, id: response.data.id, isLoggedIn: true }));
      localStorage.setItem('tokenchatloom',response.data.token)
      router.push('/')
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.message) {
        console.log(error.response.data.message);
        toast.error(error.response.data.message);
      } else {
        toast.error('An unknown error occurred');
      }
    }
    finally {
      setLoading(false)

    }
  }

  return (
    <div className={styles.container}>
      {loading && <Loading />}
      <div className={styles.cardContainer}>
        <div className={styles.heading}>
          <p>Login</p>
        </div>
        <div className={styles.inputsContainer}>
          <label htmlFor="email">Email</label>
          <input type="text" value={loginValue.email} onChange={handleEmailChange} />
        </div>
        <div className={styles.inputsContainer}>
          <label htmlFor="password">Password</label>
          <input type="password" value={loginValue.password} onChange={handlePasswordChange} />
        </div>
        <Link href={'/'} className={styles.fgpass}>Forget password?</Link>
        <div className={styles.submitbtn}>
          <button onClick={(e)=>{handleLogin(e)}} type='submit'>Login</button>
        </div>
        <div className={styles.naviText}>
          <p>Don&apos;t have a account? <Link href={'/signup'}>Signup</Link></p>
        </div>

      </div>
    </div>
  )
}

export default Login;
