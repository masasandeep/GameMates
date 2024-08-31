import React from 'react'
import Header from './Header'
const Profile = () => {
  return (
    <div>
        <Header />
        <div className='flex h-screen'>
            <div className='w-1/3 bg-blue-200'>
            Contacts</div>
            <div className='w-2/3 flex flex-col items-center justify-between m-4'>
            <div>
                Your chat
            </div>
            <div className='flex flex-row'>
                <input placeholder='divs' className='flex-grow' />
                <button>Enter</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Profile