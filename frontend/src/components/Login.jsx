import { useSelector } from "react-redux"
import Modal from "./Modal"
import store, { loginAction } from "./store/LoginContext"
export default function Login(){
    const toggle = useSelector(state=>state.log.show)
    const handleSubmit = (e)=>{
        e.preventDefault()
        const fd = new FormData(e.target)
        const data = Object.fromEntries(fd.entries())
        console.log(data)

    }
    return (            
            <Modal open={toggle}>
                <div className="flex flex-row items-end justify-end">
                <button className="text-2xl font-bold m-3" onClick={()=>store.dispatch(loginAction.toggle())}>X</button>
                </div>
            <div className="flex flex-col items-center justify-center p-3 bg-gray-700">
            <h1 className="text-2xl">Login Page</h1>
            <form className='w-full flex flex-col items-center justify-center' onSubmit={handleSubmit}>
            <div className='flex flex-col w-full items-center justify-center'>
                <label htmlFor="name" className="mb-2 text-white font-medium">
                    Username :
                </label>
                <input type='text' name="username" className='p-2 border w-[80%] border-gray-300 rounded-2xl focus:outline-none focus:ring-2
                    focus:ring-blue-500' />
                </div>
            <div className='flex flex-col w-full items-center justify-center'>
                <label htmlFor="name" className="mb-2 text-white font-medium">
                    Password :
                </label>
                <input type='password' name="password" className='p-2 border w-[80%] border-gray-300 rounded-2xl focus:outline-none focus:ring-2
                    focus:ring-blue-500' />
            </div>
            <button type="submit" className="m-2 text-lg text-white bg-cyan-600 p-3 rounded-lg">Log-In</button>
            </form>
            </div>
            </Modal>
    )
}