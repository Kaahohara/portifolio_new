import face from '../assets/profile.jpeg';
import TechOrbit from './orbita';

interface HeroSectionProps {
    className?: string; 
    name: string;
    lastname: string;
    profission: string;
}

function HeroSection({ name, lastname, profission, className = '', children}: React.PropsWithChildren<HeroSectionProps>) {
  return (
    <div className={`w-full min-h-[400px] rounded-lg lg:grid md:grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 justify-center lg:justify-between items-center dark:text-black text-white ${className}`}>
      <div className='flex flex-col justify-center items-center gap-4'>
        <div id="container"className="items-start gap-4 lg:px-0 px-5">
            <h1 className="lg:text-5xl text-4xl font-bold leading-none dark:text-white">{name}</h1>
            <h1 className="lg:text-[95px] text-6xl font-aboreto dark:text-[#9A37B0] text-slate-600 font-bold -ml-[5px] lg:-ml-[15px] leading-none">{lastname}</h1>
            <h2 className="lg:text-4xl text-3xl tracking-wider font-aboreto mb-4 leading-none dark:text-white">{profission}</h2>
            {children}
        </div>
        </div>
        <div className="flex lg:justify-end justify-center items-center">
           <TechOrbit />
        </div>
      </div>
    
  );
}

export default HeroSection