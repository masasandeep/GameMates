export default function NavBar(){
    const contents = [
        'homepage',
        'empty_1',
        'empty_2',
        'empty_3'
    ]
    return (
        <div className='bg-violet-950 text-white flex flex-row items-center justify-between'>
            {contents.map((content=>(
                <p className='w-full flex items-center justify-center'>{content}</p>
            )))}
        </div>
    )
}