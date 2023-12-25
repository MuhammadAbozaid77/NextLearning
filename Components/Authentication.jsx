"use client"
import React, { useEffect, useState } from 'react';
export {auth , provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from './config';
import Home from './Home';


export default function Authentication() {
    const [authEmail, setAuthEmail] = useState("")
    const handelAuthentication = ()=>{
        signInWithPopup(auth ,provider).then((data)=>{
            setAuthEmail(data.user.email);
            localStorage.setItem("email" , data.user.email)
        })
    }

    useEffect(() => {
        setAuthEmail(localStorage.getItem("email"));

    }, [])
    

  return <>
  
    
        <div className='h-[100vh] flex justify-center items-center'>
            {
                authEmail ? <>  
                        <Home />
                </>
                :
                <div>
                    <button className='py-3 px-5 border shadow-lg rounded font-semibold hover:bg-red-600 hover:text-white duration-200'
                        onClick={handelAuthentication}
                    > 
                        Sign With Google 
                    </button>
                </div>
            }
        </div>
  
  </>
}
