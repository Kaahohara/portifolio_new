import { useState, useEffect } from 'react';
import hover_build from '../assets/hover_build.gif';

interface CarouselItem {
  text: string;
  image: string;
}

interface CarouselProps {
  items: CarouselItem[];
  interval?: number; 
}

function Carousel({ items, interval = 5000 }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(timer);
  }, [items, interval]);

  return (
    <div className="relative w-full overflow-hidden h-full min-h-[300px] md:min-h-[350px] lg:min-h-[550px]">
      <div className="absolute top-28 lg:top-20 right-0 z-20 pl-14 flex items-center gap-2 py-2 px-5 text-white bg-slate-600 dark:bg-[#9A37B0] rounded-l-lg text-lg font-bold">
        <div className='flex gap-4'>    
          <p className=''>In build</p>
          <img src={hover_build} alt="Hover Build" className="w-8 h-8 object-contain left-3"/>
        </div>
      </div>
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 lg:gap-28 lg:py-8 justify-center flex flex-col items-center ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
       
          <div className="w-full flex items-center justify-center text-white">
            <p className="leading-relaxed">{item.text}</p>
          </div>

          <div className="w-full p-10 h-[300px] lg:h-full flex justify-center items-center overflow-hidden">
            <img 
              src={item.image} 
              alt={`Slide ${index}`} 
              className="object-cover w-full lg:h-full md:h-full h-[180px]"
            />
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === current ? "dark:bg-[#9A37B0] bg-slate-500 w-6" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;