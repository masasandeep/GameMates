import NavBar from "./NavBar.jsx";
import Register from "./Register.jsx";
export default function Header(){
    return (
        <div className='top-0 fixed w-full'>
        <div className="bg-violet-900 flex flex-row items-center justify-between text-white w-full p-2">
            <div className="flex basis-4/5 items-end justify-center w-full text-3xl font-bold">
            GAMEMATES
            </div>
            <div className="flex basis-1/5 w-full">
                <div className='w-[80%] flex flex-row items-center justify-between p-2'>
                    <button>Register</button>
                    <p>OR</p>
                    <button>LOGIN</button>
                </div>
            </div>
        </div>
        <NavBar />
        <Register />
        </div>
    )
}