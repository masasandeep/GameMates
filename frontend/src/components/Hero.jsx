
const Hero = () => {
    return (
      <main className="h-screen">
           <video autoPlay loop muted id="video" className="min-w-full opacity-75">
              <source src="/gameplay.mp4" type="video/mp4" />
            </video>
            <h2 className="gamecontent text-[72px] font-serif absolute ml-16 bottom-20">
              UNIQUE PLATFORM TO FIND<br/>GAMEMATES
            </h2>
      </main>
    )
  }
  
  export default Hero