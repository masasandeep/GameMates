import { useNavigate } from "react-router"


export default function Register(){
    const navigate = useNavigate()
    const handleRegister= async (e)=>{
        e.preventDefault()
        const fd = new FormData(e.target)
        const data = Object.fromEntries(fd.entries())
        const response = await fetch('http://localhost:5000/api/users/registerUser',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name:data.name,
                email:data.email,
                password:data.password,
                confirmPassword:data.confirmPassword
            })
        })
        if(response.ok){
            const responseData = await response.json()
            console.log(responseData)
            navigate('/')

        }
        else{
            const errorData = await response.json()
            console.log(errorData)
        }


    }
    return (
        <div className='flex flex-row items-center justify-center m-3'>
        <div className='w-[50%] bg-slate-500 p-5'>
            <form className='w-full flex flex-col items-left justify-center' onSubmit={handleRegister}>
            <div className='grid gird-cols-2'>
                <label htmlFor="name" className="mb-2 text-gray-700 font-medium">
                    Username :
                </label>
                <input type='text' name="name" className='p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2
                    focus:ring-blue-500' />
                </div>
            <div className='grid gird-cols-2'>
                <label htmlFor="name" className="mb-2 text-gray-700 font-medium">
                    Email :
                </label>
                <input type='email' name="email" className='p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2
                    focus:ring-blue-500' />
            </div>
            <div className='grid gird-cols-2'>
                <label htmlFor="name" className="mb-2 text-gray-700 font-medium">
                    Password :
                </label>
                <input type='password' name="password" className='p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2
                    focus:ring-blue-500' />
            </div>
            <div className='grid gird-cols-2'>
                <label htmlFor="name" className="mb-2 text-gray-700 font-medium">
                    Confirm Password :
                    </label>
                    <input type='text' name="confirmPassword" className='p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2
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