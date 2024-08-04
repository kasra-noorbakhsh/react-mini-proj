import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { setUserAsync } from "./userPageLogic";

import './userPageLogic'

import './UserPage.css'

const UserPage = () => {
    const { userId } = useParams();

    const [user, setUser] = useState({})

    useEffect(() => {
        setUserAsync(setUser, userId)
    }, [])

    return (
        <div className="user-page">
            <img src="../aks.jpg" alt='Avatar' />

            <div className='two-first-properties'>
                <p>شماره کاربر: {user.id}</p>
                <p>نام کاربر: {user.name}</p>
            </div>

            <div className='portfolio'> <div className='portfolio-header'>پرتفولیو کاربر:</div>

                {user.portfolio && user.portfolio.map((portfolioItem, index) => (
                    <div key={index}>
                        <p className='id'>شناسه: {portfolioItem.id}</p>
                        <p>نماد: {portfolioItem.symbol}</p>
                        <p>نام شرکت: {portfolioItem.companyName}</p>
                        <p>خرید: {portfolioItem.purchase}</p>
                        <p>آخرین سود: {portfolioItem.lastDiv}</p>
                        <p>صنعت: {portfolioItem.industry}</p>
                        <p>ارزش حقیقی: {portfolioItem.marketCap}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserPage
