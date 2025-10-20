import TimelineCard from "./timelinecard"

function Timeline() {
  return (
    <>
    <p className='flex justify-center py-6 text-white text-xl font-bold text-center '>Experience</p>
    <div className='flex justify-center text-center items-center'>
      <p className='text-white w-32 border-2 dark:border-[#9A37B0] rounded-lg p-2'>Today</p>
    </div>
    
    <div className="relative w-full text-white h-auto flex justify-center mt-10">
      
      <div className=" h-[1700px] w-1 bg-white dark:bg-[#9A37B0]">
      </div>
      <div className="absolute top-0 transform bg-white -ml-0.5 w-5 h-5 rounded-full dark:bg-[#9A37B0] z-20"></div>

      <div className="absolute bottom-0 transform bg-white -ml-0.5 w-4 h-4 rounded-full dark:bg-[#9A37B0] z-20"></div>

      <TimelineCard position='left' topPosition='top-[220px]'  date='2025 - Present' empresa='RNP'>  
          À medida que o sol se põe, pintando o céu com tons de laranja e roxo, a cidade se prepara para a noite. As luzes das ruas começam a piscar, uma a uma, criando um colar de pontos brilhantes que se estende até o horizonte. O som do tráfego diminui, substituído pelo murmúrio da vida noturna: o riso abafado de um bar, a melodia distante de um músico de rua e o suave balanço das folhas nas árvores. É um momento de transição, onde a energia frenética do dia se dissolve na calma reflexiva do crepúsculo.
          Em meio a essa serenidade, as estrelas começam a surgir, tímidas no início, mas logo dominando a imensidão escura. Elas nos lembram da nossa pequena escala no vasto cosmos, da nossa conexão com algo muito maior. Olhando para cima, é fácil se perder na beleza e no mistério do universo, esquecendo as preocupações do dia a dia. A noite, com sua quietude e seu céu estrelado, oferece um convite à contemplação, um tempo para respirar e simplesmente ser.
      </TimelineCard>
      <TimelineCard position='right' topPosition='top-[620px]' date='2025 - Present' empresa='RNP'>  
          À medida que o sol se põe, pintando o céu com tons de laranja e roxo, a cidade se prepara para a noite. As luzes das ruas começam a piscar, uma a uma, criando um colar de pontos brilhantes que se estende até o horizonte. O som do tráfego diminui, substituído pelo murmúrio da vida noturna: o riso abafado de um bar, a melodia distante de um músico de rua e o suave balanço das folhas nas árvores. É um momento de transição, onde a energia frenética do dia se dissolve na calma reflexiva do crepúsculo.
          Em meio a essa serenidade, as estrelas começam a surgir, tímidas no início, mas logo dominando a imensidão escura. Elas nos lembram da nossa pequena escala no vasto cosmos, da nossa conexão com algo muito maior. Olhando para cima, é fácil se perder na beleza e no mistério do universo, esquecendo as preocupações do dia a dia. A noite, com sua quietude e seu céu estrelado, oferece um convite à contemplação, um tempo para respirar e simplesmente ser.
      </TimelineCard>
      <TimelineCard position='left' topPosition='top-[1020px]' date='2025 - Present' empresa='RNP'>  
          À medida que o sol se põe, pintando o céu com tons de laranja e roxo, a cidade se prepara para a noite. As luzes das ruas começam a piscar, uma a uma, criando um colar de pontos brilhantes que se estende até o horizonte. O som do tráfego diminui, substituído pelo murmúrio da vida noturna: o riso abafado de um bar, a melodia distante de um músico de rua e o suave balanço das folhas nas árvores. É um momento de transição, onde a energia frenética do dia se dissolve na calma reflexiva do crepúsculo.
          Em meio a essa serenidade, as estrelas começam a surgir, tímidas no início, mas logo dominando a imensidão escura. Elas nos lembram da nossa pequena escala no vasto cosmos, da nossa conexão com algo muito maior. Olhando para cima, é fácil se perder na beleza e no mistério do universo, esquecendo as preocupações do dia a dia. A noite, com sua quietude e seu céu estrelado, oferece um convite à contemplação, um tempo para respirar e simplesmente ser.
      </TimelineCard>

      <TimelineCard position='right' topPosition='top-[1420px]' date='2025 - Present' empresa='RNP'>  
          À medida que o sol se põe, pintando o céu com tons de laranja e roxo, a cidade se prepara para a noite. As luzes das ruas começam a piscar, uma a uma, criando um colar de pontos brilhantes que se estende até o horizonte. O som do tráfego diminui, substituído pelo murmúrio da vida noturna: o riso abafado de um bar, a melodia distante de um músico de rua e o suave balanço das folhas nas árvores. É um momento de transição, onde a energia frenética do dia se dissolve na calma reflexiva do crepúsculo.
          Em meio a essa serenidade, as estrelas começam a surgir, tímidas no início, mas logo dominando a imensidão escura. Elas nos lembram da nossa pequena escala no vasto cosmos, da nossa conexão com algo muito maior. Olhando para cima, é fácil se perder na beleza e no mistério do universo, esquecendo as preocupações do dia a dia. A noite, com sua quietude e seu céu estrelado, oferece um convite à contemplação, um tempo para respirar e simplesmente ser.
      </TimelineCard>
    
    </div>
    <div className='flex justify-center text-center items-center'>
    <p className='dark:text-white w-32 bg-white dark:bg-[#9A37B0] rounded-lg p-2 mt-5'>Start</p>
  </div>
    </>
  )
}

export default Timeline 