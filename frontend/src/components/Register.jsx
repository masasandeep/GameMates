export default function Register(){
    return (
        <div className='m-5 bg-slate-500 p-4'>
            <form className='w-full flex flex-col items-left justify-center'>
                <label for='name'>
                    username
                </label>
                <input type='text' />
                <label for='email'>
                    Email
                </label>
                <input type='email' />
                <label for='password'>
                    Password
                </label>
                <input type='text' />
            </form>
        </div>
    )
}