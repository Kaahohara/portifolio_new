import Card from "../components/card";
import IconFlip from "../components/iconflip";
import Timeline from "../components/timeline";
import face_react from '../assets/face_react.png';
import fundo_react from '../assets/fundo_react.png';
import face_django from '../assets/face_django.png';
import fundo_django from '../assets/fundo_django.png';
import face_python from '../assets/face_python.png';
import fundo_python from '../assets/fundo_python.png';
import face_tailwind from '../assets/face_tailwind.png';
import fundo_tailwind from '../assets/fundo_tailwind.png';
import face_postgresql from '../assets/face_postgresql.png';
import fundo_postgresql from '../assets/fundo_postgresql.png';
import face_vue from '../assets/face_vue.png';
import fundo_vue from '../assets/fundo_vue.png';
import HeroSection from "../components/herosection";
import logo_ufsm from '../assets/logo_ufsm.png';
import logo_etec from '../assets/logo_etec.png';
import { useState } from "react";

function Home() {
  const [activeTab, setActiveTab] = useState<'formation' | 'certificates'>('formation'); 

  return (
    <>
      <div>
        <HeroSection name='Karina' lastname='Ohara' profission='Web Developer'>
          <div className="flex gap-6">
            <a href="/caminho-para-seu-curriculo.pdf" download>
              <button className="dark:border-[#9A37B0] border-2 dark:hover:border-[#9A37B0] hover:border-slate-600 hover:text-slate-600 dark:hover:text-[#9A37B0] text-white font-bold py-2 px-4 rounded-full">Resume</button>
            </a>
            <a href="#contact">
              <button className="dark:border-[#9A37B0] border-2 dark:hover:border-[#9A37B0] hover:border-slate-600 hover:text-slate-600 dark:hover:text-[#9A37B0] text-white font-bold py-2 px-4 rounded-full">Contact Me</button>
            </a>
          </div>    
        </HeroSection>
      </div>

      <section id="languages" className="flex flex-col items-center w-full">
        <p className='flex justify-center py-6 text-white text-xl font-bold text-center'>Languages</p>
        <div className='gap-6 justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-5 lg:px-0 lg:w-[1000px]'>
          <Card className="min-h-[250px]" hoverText='React JS'> 
              <IconFlip front={face_react} back={fundo_react}  />
          </Card>
          <Card className="min-h-[250px]" hoverText='Django'> 
              <IconFlip front={face_django} back={fundo_django} />
          </Card>
          <Card className="min-h-[250px]" hoverText='Python'>
              <IconFlip front={face_python} back={fundo_python} />
          </Card>
          <Card className="min-h-[250px]" hoverText='Tailwind CSS'>
              <IconFlip front={face_tailwind} back={fundo_tailwind} />
          </Card>
          <Card className="min-h-[250px]" hoverText='PostgreSQL'>
              <IconFlip front={face_postgresql} back={fundo_postgresql} />
          </Card>
          <Card className="min-h-[250px]" hoverText='Vue JS'>
              <IconFlip front={face_vue} back={fundo_vue} />
          </Card>
        </div>
      </section>

      <div className="flex flex-col lg:block justify-center items-center mt-10 px-5 lg:px-0 w-full">
        
        <div className="flex lg:hidden gap-4 w-full justify-center mb-4 relative h-12">
          <button 
            onClick={() => setActiveTab('formation')}
            className={`w-32 h-10 rounded-full font-bold text-sm transition-all border ${activeTab === 'formation' ? 'bg-slate-600 dark:border-[#9A37B0] text-white' : 'bg-slate-800 border-transparent text-slate-400'}`}
          >
            Formation
          </button>
          <button 
            onClick={() => setActiveTab('certificates')}
            className={`w-32 h-10 rounded-full font-bold text-sm transition-all border ${activeTab === 'certificates' ? 'bg-white dark:border-[#9A37B0] text-slate-800' : 'bg-slate-800 border-transparent text-slate-400'}`}
          >
            Certificates
          </button>
        </div>

        <div className="relative h-auto lg:h-[620px] lg:w-[980px] w-full mx-auto ">
          <div 
            onClick={() => setActiveTab('formation')}
            style={{ zIndex: activeTab === 'formation' ? 30 : 10 }}
            className={`rounded-lg transition-all cursor-pointer lg:h-[600px] w-full duration-300 animate-slideInLeft animate-fill-forwards
              ${activeTab === 'formation' 
                ? 'relative lg:absolute top-0 left-0 scale-100 block' 
                : 'hidden lg:absolute lg:block lg:top-8 lg:left-12 scale-95 opacity-90'
              }`}
          >
            <div className="relative dark:bg-black border-2 dark:border-[#9A37B0] bg-slate-600 rounded-lg shadow-xl h-full p-4 lg:p-6">
              <div className="flex flex-col gap-8">
                <p className='flex justify-center py-2 text-white text-xl font-bold text-center lg:block'>Formation</p>
                <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] items-center gap-6 w-full border-b border-white/10 pb-6">
                    <div className="w-full lg:w-60 lg:h-48 h-56 flex-none bg-slate-700/50 rounded-lg overflow-hidden flex items-center justify-center">
                      <img src={logo_ufsm} className="max-w-60 max-h-48 object-contain" alt="UFSM" />
                    </div>
                    <div className="flex flex-col justify-center text-center lg:text-left">
                      <h3 className="text-white font-bold text-2xl mb-2">UFSM</h3>
                      <p className="text-slate-300 text-lg leading-relaxed">Sistemas de Informação</p>
                      <p className="text-slate-300 text-sm leading-relaxed">2020 - 2025</p>
                    </div>
                    <div className="w-full lg:w-60 lg:h-48 h-56 flex-none bg-slate-700/50 rounded-lg overflow-hidden flex items-center justify-center mt-4 lg:mt-0">
                      <img src={logo_etec} className="max-w-60 max-h-48 object-contain" alt="ETEC" />
                    </div>
                    <div className="flex flex-col justify-center text-center lg:text-left">
                      <h3 className="text-white font-bold text-2xl mb-2">ETEC</h3>
                      <p className="text-slate-300 text-lg leading-relaxed">Técnico em Informática</p>
                      <p className="text-slate-300 text-sm leading-relaxed">2018 - 2020</p>
                    </div>
                </div>
              </div>
              
              <div className="hidden lg:flex absolute lg:w-10 lg:h-20 rounded-full dark:bg-black bg-slate-600 top-1/2 -translate-y-1/2 right-0 translate-x-1/2 z-50 items-center justify-center"></div>
            </div>
          </div>

          <div 
            onClick={() => setActiveTab('certificates')}
            style={{ zIndex: activeTab === 'certificates' ? 30 : 10 }}
            className={`animate-slideInRight invisible animate-fill-forwards duration-300 [animation-delay:600ms] cursor-pointer rounded-lg lg:h-[600px] w-full
              ${activeTab === 'certificates' 
                ? 'relative lg:absolute top-0 left-0 scale-100 block' 
                : 'hidden lg:absolute lg:block lg:top-8 lg:left-12 scale-95 opacity-90'
              }`}
          >
            <div className="relative bg-white rounded-lg shadow-xl border border-slate-200 h-full p-4 lg:p-6 flex flex-col justify-between">
              <div>
                <p className='flex justify-center py-6 text-slate-800 text-xl font-bold text-center lg:block '>Certificates</p>
                <div className='grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-4 justify-end mb-10 overflow-y-auto lg:max-h-[440px]'>
                  <Card className="bg-rocketseat bg-cover bg-center" url="https://app.rocketseat.com.br/certificates/1574f398-0d28-47f8-85ce-1f980737f225" hoverText="Fundamentos do React, Fundamentos do Next.js"></Card>
                  <Card className="bg-udemy bg-cover bg-center" url="https://www.udemy.com/certificate/UC-b9047b78-5066-4f48-b0dc-ebc5a0bf392f/" hoverText="The Absolute Beginners Guide to Cyber Security 2026 - Part 1"></Card>
                  <Card className="bg-udemy bg-cover bg-center" url="https://www.udemy.com/certificate/UC-b0389326-3b5c-4b5e-8cc9-d057d3b3e590/" hoverText="JavaScript e TypeScript do básico ao avançado - JS + TS"></Card>
                  <Card className="bg-udemy bg-cover bg-center" url="https://www.udemy.com/certificate/UC-5f15e3bb-b78b-4aa4-8f3f-6708b6614a79/" hoverText="Vue JS - Guia Completo (Vue CLI, Vue Router, Vuex e GraphQL)"></Card>
                  <Card className="bg-ada bg-cover bg-center" url="https://ada.tech/certificate?xode=e06ec31c-c44e-a439-6a0c-c542b6920618" hoverText="Trilha Digital | Coders 24 | Front End"></Card>
                  <Card className="bg-compass bg-cover bg-center" url="https://learning.aircompany.ai/pluginfile.php/1/tool_certificate/issues/1737506705/0212865128KL.pdf" hoverText="Gen AI Technical Certification"></Card> 
                  <Card className="bg-compass bg-cover bg-center" url="https://learning.aircompany.ai/pluginfile.php/1/tool_certificate/issues/1737465077/3623470990KL.pdf" hoverText="AI-Assisted Certified Professional"></Card> 
                </div>
              </div>
              
              <div className="hidden lg:flex absolute lg:w-10 lg:h-20 rounded-full bg-white top-1/2 -translate-y-1/2 right-0 translate-x-1/2 z-50 items-center justify-center"></div>
            </div>
          </div>

        </div>
      </div>

      <Timeline />
    </>
  );
}

export default Home;