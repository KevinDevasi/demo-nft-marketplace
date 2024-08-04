import React, { useState } from 'react'
import { FaEthereum } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import BigModel from '../../component/Model/BigModel';

const Card = ({ item }) => {
    const {img, title, price, likes, sale}= item;
    const [isModalopen, setIsModalOpen] = useState(false);
    const [bidAmount, setBidAmount] = useState(price);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");

     const toggleModal =( ) => {
        setIsModalOpen(!isModalopen);

     };
     const handleSubmit = () =>
     {
     
        const data ={
            fullName: fullName,
            email: email,
            ammount: bidAmount
        }
        console.log(data);
        toggleModal();
     }
    return ( 
    <>
        <div className='flex group flex-col space-y-10 rounded-lg overflow-hidden border border-slate-400/10 pb-8 hover:shadow-xl duration-500 ease-in-out hover:shadow-white relative'>
            {/*image*/}
            <div className='flex flex-col items-start relative'>
            <img src={img} alt="object" />
            {
                sale && (
                    <div className='flex space-x-2 items-center justify-center px-4 py-4 bg-gradient-to-r from-red-400 via-fuchsia-500 rounded-xl absolute bottom-5 left-5'>
                       <CiClock2 />
                        <p> 66 : 08 : 45</p>
                    </div>
                    
                )
            }

            </div>
            {/*content*/}
            <div className='px-6 flex flex-col space-y-3'>

            <h3>{title}</h3>
            <div >
                {/*price*/}
                <div className='flex justify-between'>
                    <div className='flex space-x-2 text-indigo-600 items-center'>
                    <FaEthereum size={18}/>
                        <p className='text-sm font-semibold'>{price} ETH</p>
                    </div>
                    <div className='flex space-x-2 text-indigo-600 items-center'>
                    < CiHeart size={18} className='text-red-700'/>
                        <p className='text-sm text-slate-400 font-semibold'>{likes}</p>
                    </div>
                </div>
            </div>

            </div>
            {/*hover*/}
            <div className='absolute hidden top-1/4 left-1/3 md:left-1/4 md:right-1/4 group-hover:flex animate-bounce transition-all ease-in-out duration-1000'>
                <button
                onClick={toggleModal}
                className='text-sm px-6 py-6 bg-indigo-600 rounded-md hover:border-indigo-700 duration-200 ease-in-out'>
                    Place Bit
                </button>
            </div>
        </div>
        {/*model*/}
        <BigModel
        isOpen={isModalopen}
        onClose={toggleModal}
        onBidSubmit={handleSubmit}
        fullName={fullName}
        setFullName={setFullName}
        email={email}
        setEmail={setEmail}
        bidAmount={bidAmount}
        setBidAmount={setBidAmount}
        />

    </>
    );
};

export default Card