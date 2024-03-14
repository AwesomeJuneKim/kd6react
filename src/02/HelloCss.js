// import React from 'react'
import logo from '../logo.svg'
import './My.css'
import HelloWhite from './HelloWhite';
import HelloYellow from './HelloYellow';
import { LuBanana } from "react-icons/lu";
import { GiPineapple } from "react-icons/gi";



export default function HelloCss() {
    const apikey=process.env.REACT_APP_MV_API;
    console.log(apikey);
    return (
    <div className="main">
        <div class="blur hover:blur-lg">
        <img src={logo} className="imgLogo" alt="logo" /></div>
        {/*  
        <HelloWhite />
        <HelloYellow />*/}
        <div className='text-9xl text-amber-600'><LuBanana /></div>
        <div className='text-9xl text-amber-300'><GiPineapple /></div>

    </div>
    )
}
