import { useEffect } from "react";
import TimelineCard from "./timelinecard"

function Timeline() {
  
  return (
    <>
    <p className='flex justify-center py-6 text-white text-xl font-bold text-center '>Experience</p>
    <div className='flex justify-center text-center items-center'>
      <p className='text-white w-32 border-2 dark:border-[#9A37B0] rounded-lg p-2'>Today</p>
    </div>
    
    <div className="relative w-full text-white h-auto flex flex-col gap-12 lg:gap-24 mt-10 max-w-5xl mx-auto px-4">
        
        {/* LINHA VERTICAL: Ela continua absoluta, mas agora ela acompanha a altura do pai dinamicamente (h-full) */}
        <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 lg:left-1/2 lg:-translate-x-1/2 h-full w-1 bg-white dark:bg-[#9A37B0] z-0"></div>
      
      <div className="absolute top-0 invisible md:visible lg:visible transform bg-white md:left-1/2 lg:left-1/2 translate-x-1/2 md:-translate-x-1/2 lg:-translate-x-1/2 w-5 h-5 rounded-full dark:bg-[#9A37B0] z-20"></div>

      <div className="absolute md:left-1/2 lg:left-1/2 invisible md:visible lg:visible translate-x-1/2 md:-translate-x-1/2 lg:-translate-x-1/2 bottom-0 transform bg-white w-4 h-4 rounded-full dark:bg-[#9A37B0] z-20"></div>

      <TimelineCard position='left'  date='2024 - Present' empresa='RNP'>  
        Projeto selecionado em chamada pública pela Rede Nacional de Ensino e Pesquisa (RNP) em parceria com a startup Performance Vegetal.
        Desenvolvimento ponta a ponta (Full Stack) de uma plataforma gamificada para gestão de ações extensionistas e conexão entre instituições e pesquisa.
        Parte do time responsável pela arquitetura, design do sistema, definição de requisitos para automação de processos acadêmicos e execução de todo o ciclo de vida do software (SDLC).
        Python, Django, Alpine.js e PostgreSQL
      </TimelineCard>
      <TimelineCard position='right' date='2025 - 2025' empresa='UOL'>  
         No programa de formação intensiva na Compass UOL, o foco central foi o desenvolvimento full-stack no ecossistema JavaScript. O trabalho envolveu a criação de interfaces dinâmicas e componentizadas com React.js, além da estruturação de back-ends escaláveis em Node.js, aplicando as melhores práticas de mercado para garantir performance e fluidez na aplicação.
      </TimelineCard>

      <TimelineCard position='left' date='2023' empresa='The Brookling Brothers'>  
        Atuando como webmaster fui responsável pela manutenção de portais, fazendo a montagem utilizando componentes modulares para otimizar o desenvolvimento. Possibilitando realizar  migrações internacionais, adaptando e transferindo a estrutura de sites entre diferentes países, garantindo a consistência da plataforma em diversas regiões
      </TimelineCard>
    
    </div>
    <div className='flex justify-center text-center items-center'>
    <p className='dark:text-white text-slate-600 w-32 bg-white dark:bg-[#9A37B0] rounded-lg p-2 mt-5'>Start</p>
  </div>
    </>
  )
}

export default Timeline 