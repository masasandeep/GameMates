export default function Register(){
    return (
        <div className='flex flex-row items-center justify-center m-3'>
        <div className='w-[50%] bg-slate-500 p-5'>
            <form className='w-full flex flex-col items-left justify-center'>
            <div className='grid gird-cols-2'>
                <label htmlFor="name" className="mb-2 text-gray-700 font-medium">
                    Username :
                </label>
                <input type='text' className='p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2
                    focus:ring-blue-500' />
                </div>
            <div className='grid gird-cols-2'>
                <label htmlFor="name" className="mb-2 text-gray-700 font-medium">
                    Email :
                </label>
                <input type='email' className='p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2
                    focus:ring-blue-500' />
            </div>
            <div className='grid gird-cols-2'>
                <label htmlFor="name" className="mb-2 text-gray-700 font-medium">
                    Password :
                </label>
                <input type='password' className='p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2
                    focus:ring-blue-500' />
            </div>
            <div className='grid gird-cols-2'>
                <label htmlFor="name" className="mb-2 text-gray-700 font-medium">
                    Confirm Password :
                    </label>
                    <input type='text' className='p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2
                       focus:ring-blue-500' />
            </div>
            <div className='flex flex-row items-center justify-center'>
            <input type='submit' className='mt-8 mb-4 bg-cyan-500 p-3 text-lg rounded-lg' />
            </div>
            </form>
        </div>
        </div>
    )
}