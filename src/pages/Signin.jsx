import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../store/userStore';
import baseUrl from '../utils/baseUrl';
import handleChange from '../utils/handleChange';
import toast_alert from '../utils/toast_alert';

const Signin = () => {
    const {addUser} = useUserStore()
    const navigate= useNavigate()
    const toast = useToast()
    const [loading,setLoading] = useState(false)

    const [value,setValue] = useState({
        phone : '',
        password : ''
    })

    const signin=async(e)=>{
        e.preventDefault()
        if(!value.phone || !value.password){
            return toast_alert(
                toast,
                'Please insert phone or password',
                'error'
            )
        }
        setLoading(true)
        try {
            const res = await axios.post(`${baseUrl}/api/auth/signin`,value)

            if(res.data.status=== 200){
                toast_alert(
                    toast,
                    res.data.message
                )
                localStorage.setItem('token',res.data.token)

                addUser(res.data.data)
                
                navigate('/')
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            return toast_alert(
                toast,
                error.response.data.message,
                'error'
            )
        }
    }


    return (
        <div
            className='h-screen w-full grid md:grid-cols-2 bg-sky-500 text-white'
        >
            <div className='w-full hidden md:flex flex-col justify-center items-center space-y-2 p-4'>
                <h1
                    className='text-4xl font-bold uppercase'
                >
                    Welcome
                </h1>
                <p
                    className='font-bold text-xl'
                >
                    Buy you favourite shoe.
                </p>
                <p
                    className='text-xs'
                >
                    DevWithEasy Solution Ltd.
                </p>
            </div>
            <div className='w-full flex justify-center items-center bg-white/60'>
                
                <form
                    onSubmit={(e)=>signin(e)}
                    className='w-8/12 space-y-2'
                >
                    <input 
                        type='text' 
                        name='phone'
                        onChange={(e)=>handleChange(e,value,setValue)}
                        placeholder='Enter phone number' 
                        className='w-full p-2 text-black rounded-md focus:outline-none placeholder:text-gray-300 shadow'
                    />
                    <input 
                        type='text' 
                        name='password'
                        onChange={(e)=>handleChange(e,value,setValue)}
                        placeholder='Enter password' 
                        className='w-full p-2 text-black rounded-md focus:outline-none placeholder:text-gray-300 shadow'
                    />
                    <button
                        className='w-full p-2 text-center bg-blue-700 text-white rounded-lg shadow'
                    >
                        {
                            loading ? 'Please wait...' : 'Signin'
                        }
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signin;