import profile from '../assets/profile.jpeg';
import face_django from '../assets/face_django.png';
import face_python from '../assets/face_python.png';
import face_tailwind from '../assets/face_tailwind.png';
import face_postgresql from '../assets/face_postgresql.png';
import face_vue from '../assets/face_vue.png';
import face_react from '../assets/face_react.png';

const techLogos = [
  { src: face_django, alt: 'Django', color: 'border-[#9A37B0]' },
  { src: face_python, alt: 'Python', color: 'border-[#9A37B0]' },
  { src: face_tailwind, alt: 'Tailwind CSS', color: 'border-[#9A37B0]' },
  { src: face_postgresql, alt: 'PostgreSQL', color: 'border-[#9A37B0]' },
  { src: face_react, alt: 'React JS', color: 'border-[#9A37B0]' },    
  { src: face_vue, alt: 'Vue JS', color: 'border-[#9A37B0]' },
];


function TechOrbit() {
  const totalItems = techLogos.length;
  const animationDuration = 20; 

  return (
    <div className="relative flex items-center justify-center w-[250px] lg:w-[500px] h-[500px] lg:h-[500px] rounded-full">
      
      <div className="z-20 w-24 h-24 bg-white dark:bg-[#232323]  border-2 border-[#9A37B0] rounded-full flex items-center justify-center overflow-hidden">
         <img src={profile} alt="Profile" className="w-full lg:max-w-[300px] rounded-full max-h-full object-cover" />
      </div>

      {/* Renderização dos Logos */}
      {techLogos.map((logo, index) => {
        const delay = (animationDuration / totalItems) * index * -1;
        
        return (
          <div 
            key={index}
            className="absolute lg:animate-orbit-desktop animate-orbit-mobile"
            style={{ 
              animationDuration: `${animationDuration}s`,
              animationDelay: `${delay}s` 
            }}
          >
            <div className={`dark:bg-[#1A1A1A] p-3 rounded-full flex items-center justify-center border-2 dark:border-[#9A37B0] border-slate-600 shadow-lg transition-transform hover:scale-125 w-20 h-20`}>
              <img src={logo.src} alt={logo.alt} className="w-10 h-10 object-contain" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TechOrbit;