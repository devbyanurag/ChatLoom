'use client'
import React, { useState } from 'react'
import styles from './signup.module.scss'
import Link from 'next/link'
import { useAppDispatch } from '@/app/store/hooks'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import apiInstance from '@/app/utils/api'
import { setUserData } from '@/app/store/slice/userSlice'
interface SignupValueTypes {
    name: string;
    email: string;
    password: string;
    cpassword: string
  }

const Signup = () => {
    const dispatch = useAppDispatch();
    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(false);
    const signupMockValue: SignupValueTypes = {
        name: 'anurag',
        email: "anurag@gmail.com",
        password: 'hello',
        cpassword: 'hello',


    };
    const [signupValue, setSignupValue] = useState<SignupValueTypes>(signupMockValue);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignupValue({
            ...signupValue,
            name: e.target.value
        });
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignupValue({
            ...signupValue,
            email: e.target.value
        });
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignupValue({
            ...signupValue,
            password: e.target.value
        });
    };
    const handleCPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignupValue({
            ...signupValue,
            cpassword: e.target.value
        });
    };


    const handlesignup = async () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        try {
            if (signupValue.email === "") {
                toast.error('Email cannot be empty');
                return;
            } else if (!emailRegex.test(signupValue.email)) {
                toast.error('Please enter a valid email address');
                return;
            } else if (signupValue.password === "") {
                toast.error('Password cannot be empty');
                return;
            }
            else if (signupValue.name === "") {
                toast.error('name cannot be empty');
                return;
            }
            else if (signupValue.password !==signupValue.cpassword) {
                toast.error('Password and Confirm Password are not same');
                return;
            }
            setLoading(true)
            const response = await apiInstance.post('/user/signup', {
                name: signupValue.name,
                email: signupValue.email,
                password: signupValue.password
            });
            dispatch(setUserData({ email: response.data.email, name: response.data.name, id: response.data.id, isLoggedIn: true }));
            localStorage.setItem('tokenchatloom', response.data.token)
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
            <div className={styles.cardContainer}>
                <div className={styles.heading}>
                    <p>Signup</p>
                </div>
                <div className={styles.inputsContainer}>
                    <label htmlFor="name">Name</label>
                    <input type="text" value={signupValue.name} onChange={handleNameChange}/>
                </div>
                <div className={styles.inputsContainer}>
                    <label htmlFor="email">Email</label>
                    <input type="text" value={signupValue.email} onChange={handleEmailChange}/>
                </div>
                <div className={styles.inputsContainer}>
                    <label htmlFor="password">Password</label>
                    <input type="text" value={signupValue.password} onChange={handlePasswordChange}/>
                </div>
                <div className={styles.inputsContainer}>
                    <label htmlFor="Cpassword">Confirm Password</label>
                    <input type="text" value={signupValue.cpassword} onChange={handleCPasswordChange}/>
                </div>
                <div className={styles.submitbtn}>
                    <button onClick={handlesignup}>Signup</button>
                </div>
                <div className={styles.naviText}>
                    <p>Already have a account? <Link href={'/signup'}>signup</Link></p>
                </div>

            </div>


        </div>
    )
}

export default Signup
