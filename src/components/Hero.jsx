
const Hero = () => {
  const textStyle = {
    fontFamily: "Fira Code, monospace",
  };

  return (
    <>
      <section className="bg-white bg-center bg-no-repeat">
      <div className="container mx-auto">       
        
        <div className="max-w-screen-xl px-4 py-20 mx-auto text-center lg:py-36">
          <h1
            className="mb-2 text-4xl text-gray-900 md:text-6xl"
            style={textStyle}
          >
            <br className="block md:hidden" />
            <span className="relative">
              <span className="h-20 pt-2 whitespace-nowrap text-brand-accent">
                Hello World
              </span>
              <span className="{`${styles.cursor} absolute -bottom-0 left-0 -top-1 inline-block bg-white w-full animate-type will-change`}"></span>
            </span>
          </h1>

          <h1
            className="mb-4 text-4xl font-semibold leading-none tracking-tight text-black md:text-5xl lg:text-6xl"
            style={textStyle}
          >
            Redhocode
          </h1>
          <p
            className="mb-8 text-lg text-gray-800 lg:text-xl sm:px-16 lg:px-48"
            style={textStyle}
          >
           Solving problems with algorithms, assisted from the community, documantion, stackofferlow, dev.to, github, chatgpt and youtube.
          </p>
          
           <hr />
          <br />
            <span className="mt-4 text-2xl font-semibold text-gray-700 lg:text-2xl md:text-xl sm:text-l">Spontan!!!</span>
            <br />
            <br />

          <div className="flex flex-col items-center gap-2 mx-auto space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#about" className=" font-regular" style={textStyle}>
            <button
              type="sumbit"
              
              className="text-gray-900
              
              hover:text-white border
                border-gray-800 hover:bg-gray-900 
                focus:ring-4 focus:outline-none focus:ring-gray-300 
                rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
              dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600
              dark:focus:ring-gray-800 w-80 lg:w-80" style={textStyle}
            >
           
              Uh...huy
                
            </button>
              </a>
          </div>
        </div>
        </div>

      </section>
    </>
  );
};

export default Hero;
