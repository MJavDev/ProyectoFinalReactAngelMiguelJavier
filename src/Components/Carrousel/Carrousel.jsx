import banner1 from "../../assets/portada2.jpg";

import "./Carrousel.scss";

const estilosBanner = {
  /* maxWidth: '1600px', */
  height: "60vh",
  backgroundImage: `url(${banner1})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
};

export const Carrousel = () => {
  return (
    <section>
      <div className="imgPort" style={estilosBanner}>
        <h2 className="titulo_banner">FIND YOUR PERFECT PLANT</h2>
      </div>
      {/* <div className='carro'>          
          <img src={banner1} className="img1" alt="" />
        </div>  */}
    </section>
  );
};

/*       <div id="controls-carousel" className="relative w-full" data-carousel="static">
    
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
             
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={banner1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            </div>
           
            <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                <img src={banner1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            </div>
            
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={banner1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            </div>
            
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={banner1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            </div>
            
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={banner1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            </div>
        </div>
        
        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span className="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="sr-only">Next</span>
            </span>
        </button>
    </div> */
