import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Heading = ({children}) => {
    const navigate = useNavigate()
    
    return (
        <div className='relative flex justify-between items-center border-b pb-2 mb-2'>
            <div
                className='flex items-center'
            >
            <BsArrowLeft 
                size={20}
                onClick={()=>{
                    navigate(-1)
                }}
                className='cursor-pointer text-red-500'
            />
            <span className='text-center md:text-xl p-2 md:uppercase'>{children}</span>
            </div>
        </div>
    );
};

export default Heading;