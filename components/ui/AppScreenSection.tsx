export default function AppScreensSection({
  img1, 
  img2, 
  img3,
  img4,
  img5
}: {img1 : string, img2: string, img3: string, img4?: string, img5?: string}) {
    return (
      <section className="w-full bg-black-100 py-16 flex flex-col items-center justify-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center">
          App Screens
        </h2>
  
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 px-5">
          <div className="relative w-[250px] sm:w-[300px] overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src ={img1}
              alt="App Screen 1"
              className="w-full h-full object-contain"
            />
          </div>  
          <div className="relative w-[250px] sm:w-[300px] overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src={img2}
              alt="App Screen 2"
              className="w-full h-full object-contain"
            />
          </div>  
          <div className="relative w-[250px] sm:w-[300px] overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src={img3}
              alt="App Screen 3"
              className="w-full h-full object-contain"
            />
          </div>
          {img4 && ( 
            <div className="relative w-[250px] sm:w-[300px] overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src={img4}
                alt="App Screen 4"
                className="w-full h-full object-contain"
              />
            </div>
          )}
          
        </div>
      </section>
    );
  }
  