import { useNavigate } from "react-router";
import NavBar from "./NavBar.jsx";

import store, { loginAction } from "./store/LoginContext.jsx";
import { useSelector } from "react-redux";
export default function Header(){
    const accessToken = useSelector(state=>state.log.accessToken)
    const navigate = useNavigate()
    const register = ()=>{
        navigate('/register')
    }
    const login = ()=>{
        store.dispatch(loginAction.toggle())   
    
    }
    const handleLogout = ()=>{
        store.dispatch(loginAction.logout())
        navigate('/')
    }
    return (
        <div className='top-0 w-full'>
        <div className="bg-violet-900 flex flex-row items-center justify-between text-white w-full p-2">
            <div className="flex basis-4/5 items-end justify-center w-full text-3xl font-bold">
            GAMEMATES
            </div>
            <div className="flex basis-1/5 w-full">
                {accessToken ==='' ? <div className='w-[80%] flex flex-row items-center justify-between p-2'>
                    <button onClick={register}>Register</button>
                    <p>OR</p>
                    <button onClick={login}>LOGIN</button>
                </div>:<button onClick={handleLogout} >Logout</button>}
            </div>
        </div>
        
        <NavBar />
        </div>
    )
}