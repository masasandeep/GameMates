const data = [
    'About',
    'Services',
    'Login',
    'Register'
  ]
  const Navbar = () => {
    return (
      <div className='flex justify-around items-center p-3 text-lg font-bold'>
          <div className="title">GameMates</div>
          <ul className='flex space-x-5'>
            {data.map(link=>(
              <li className="hover:underline hover:decoration-cyan-400">{link}</li>
            ))}
          </ul>
        </div>
    )
  }
  
  export default Navbar