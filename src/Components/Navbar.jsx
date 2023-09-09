import React from 'react';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import {FaTimes} from 'react-icons/fa';
import {CiMenuFries} from 'react-icons/ci';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const [click,setClick]=useState(false);
    const { loginWithRedirect,isAuthenticated,user } = useAuth0();
    const { logout } = useAuth0();
    const handleClick=()=>{
        setClick(!click)
    }
    
    const content=
    <>
    <div className='lg:hidden block absolute top-20 w-full left-0 right-0 bg-gradient-to-r from-fuchsia-600 to-purple-600 transition '>
    <ul className=' text-center text-xl p-10'>
                    
                       
    <li>
                        {
                            isAuthenticated && <p>{user.name}</p>
                        }
                    </li>
                    {
                        isAuthenticated?<li className='text-xl hover:cursor-pointer  rounded-2xl text-white font-poppins bg-gradient-to-r from-fuchsia-600 to-purple-600  p-4 pl-9 pr-9 text-center' >  <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                        Log Out
                      </button></li>: <li className='text-xl hover:cursor-pointer  rounded-2xl text-white font-poppins bg-gradient-to-r from-fuchsia-600 to-purple-600  p-4 pl-9 pr-9 text-center' > <button onClick={() => loginWithRedirect()}>Log In</button></li>
                    }
                    
                    
                    
                    
                </ul>

    </div>
    </>
  return (
    <>
    <div className='h-10vh flex  z-50 px-10  py-2 flex-1 pb-0  mb-4 '>
        
           
        
    
        <div className='lg:flex  lg:flex-1  justify-end hidden'>
            <div className='  justify-end  p-2 '>
                <ul className='flex gap-16'>
                    <li>
                        {
                            isAuthenticated && <p>{user.name}</p>
                        }
                    </li>
                    {
                        isAuthenticated?<li className='text-xl hover:cursor-pointer  rounded-2xl text-white font-poppins bg-gradient-to-r from-fuchsia-600 to-purple-600  p-4 pl-9 pr-9 text-center' >  <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                        Log Out
                      </button></li>: <li className='text-xl hover:cursor-pointer  rounded-2xl text-white font-poppins bg-gradient-to-r from-fuchsia-600 to-purple-600  p-4 pl-9 pr-9 text-center' > <button onClick={() => loginWithRedirect()}>Log In</button></li>
                    }
                    
                       
                        

                  
                        
                   
                    
                </ul>
            </div>
        </div>
        <div>
            {click &&content}
        </div>
        <button className='block lg:hidden transition ' onClick={handleClick}>
            {click ? <FaTimes size="2em"/> : <CiMenuFries size="2em"/>}
        </button>

    </div>
    </>
  )
}



export default Navbar
