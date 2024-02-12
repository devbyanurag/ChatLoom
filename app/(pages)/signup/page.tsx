'use client'
import React, { useState } from 'react'
import styles from './signup.module.scss'
import Link from 'next/link'

const Signup = () => {
    const [signupComplete, setSignupComplete] = useState(false)

    return (
        <div className={styles.container}>
            {
                !signupComplete ? <div className={styles.cardContainer}>
                    <div className={styles.heading}>
                        <p>Signup</p>
                    </div>
                    <div className={styles.inputsContainer}>
                        <label htmlFor="name">Name</label>
                        <input type="text" />
                    </div>
                    <div className={styles.inputsContainer}>
                        <label htmlFor="email">Email</label>
                        <input type="text" />
                    </div>
                    <div className={styles.inputsContainer}>
                        <label htmlFor="password">Password</label>
                        <input type="text" />
                    </div>
                    <div className={styles.inputsContainer}>
                        <label htmlFor="Cpassword">Confirm Password</label>
                        <input type="text" />
                    </div>
                    <div className={styles.submitbtn}>
                        <button >Signup</button>
                    </div>
                    <div className={styles.naviText}>
                        <p>Already have a account? <Link href={'/login'}>Login</Link></p>
                    </div>

                </div> : <div className={styles.cardContainer} >
                    <h2>Almost there!</h2>
                    <p>Thank you for signing up! To complete your registration, please check your email inbox for a verification link.</p>
                    <p>If you don't see the email within a few minutes, please check your spam folder.</p>
                    <p>Once you've verified your email address, you'll be able to access all the features of our platform.</p>
                </div>
            }


        </div>
    )
}

export default Signup