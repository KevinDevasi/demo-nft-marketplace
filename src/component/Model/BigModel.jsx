import React from 'react'
import Modal from './Modal'

export const BigModel = ({isOpen, onClose,  onBidSubmit, fullName, setFullName,  email,  setEmail,   bidAmount,  setBidAmount}) => {
    const handleBidSubmit = (e) => {
        e.preventDefault()
        onBidSubmit()
    }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <div className='p-5'>
            <h1 className='capitalize text-2xl font-bold mb-4 text-gray-300'>Place your bit</h1>
            <form onSubmit={handleBidSubmit}>
                <input type='text' placeholder='Full Name' value={fullName} onChange={(e) => setFullName(e.target.value)} className='border p-2 mb-4 w-full text-gray-500 required'
                />
                 <input type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} className='border p-2 mb-4 w-full text-gray-500 required'
                />
                 <input type='number' placeholder='bid Amount' value={bidAmount} onChange={(e) => setBidAmount(e.target.value)} className='border p-2 mb-4 w-full text-gray-500 required'
                />
                <button type='submit' className='border-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700'>
                    Sumbit Bid
                </button>
            </form>
           


        </div>
        
    </Modal>
  )
}

export default BigModel