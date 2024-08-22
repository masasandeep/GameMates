import {Menu,X} from 'lucide-react'
import { useState } from 'react'
export default function NavBar(){
    const contents = [
        'homepage',
        'empty_1',
        'empty_2',
        'empty_3',
    ]
    const [menu,menuOpen] = useState(false)
    function toggle(){
        menuOpen(!menu)
    }
    return (
        <div className='bg-violet-950 text-white p-2'>
            <div className='hidden md:flex flex-row'>

            {contents.map((content=>(
                <p className='w-full flex items-center justify-center'>{content}</p>
            )))}
            </div>
            <div className='flex flex-col items-center justify-start'>
            <button className='md:hidden' onClick={toggle}>{menu ? <X /> :<Menu />}</button>
            </div>
            {menu && <div className='foex flex-col items-center justify-between md:hidden'>
            {contents.map((content=>(
                <p className='w-full flex items-center justify-center'>{content}</p>
            )))}
            </div>}
        </div>
    )
  }
  
  export default Navbar