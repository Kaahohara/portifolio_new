import Card from "../components/card"
import IconFlip from "../components/iconflip"
import Timeline from "../components/timeline"
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


function Home() {

  return (
    <>

    <div className='border-2 dark:border-[#9A37B0] dark:bg-[#232323] rounded-lg p-12'>
    <div className='flex gap-2'>
      <p className='w-1/2 text-white text-left'>À medida que o sol se põe, pintando o céu com tons de laranja e roxo, a cidade se prepara para a noite. As luzes das ruas começam a piscar, uma a uma, criando um colar de pontos brilhantes que se estende até o horizonte. O som do tráfego diminui, substituído pelo murmúrio da vida noturna: o riso abafado de um bar, a melodia distante de um músico de rua e o suave balanço das folhas nas árvores. É um momento de transição, onde a energia frenética do dia se dissolve na calma reflexiva do crepúsculo.
      Em meio a essa serenidade, as estrelas começam a surgir, tímidas no início, mas logo dominando a imensidão escura. Elas nos lembram da nossa pequena escala no vasto cosmos, da nossa conexão com algo muito maior. Olhando para cima, é fácil se perder na beleza e no mistério do universo, esquecendo as preocupações do dia a dia. A noite, com sua quietude e seu céu estrelado, oferece um convite à contemplação, um tempo para respirar e simplesmente ser.
      </p>
      <div className='flex gap-4 justify-end flex-wrap ml-4 w-1/2'>
        <Card  width='w-[130px]'>a</Card>
        <Card  width='w-[130px]'>a</Card>
        <Card  width='w-[130px]'>a</Card>
        <Card  width='w-[130px]'>a</Card>
        <Card  width='w-[130px]'>a</Card>
        <Card  width='w-[130px]'>a</Card>
      </div>
    </div>
    </div>
    <p className='flex justify-center py-6 text-white text-xl font-bold text-center '>Languages</p>
    
    <div className='flex gap-6 justify-center flex-wrap ml-4 w-[1000px]'>
     <Card  width='w-[300px]'> 
        <IconFlip front={face_react} back={fundo_react} />
        <p>React</p>
     </Card>
     <Card  width='w-[300px]'>
         <IconFlip front={face_django} back={fundo_django} />
        <p>Django</p>
        </Card>
     <Card  width='w-[300px]'>
         <IconFlip front={face_python} back={fundo_python} />
        <p>Python</p>
        </Card>
     <Card  width='w-[300px]'>
         <IconFlip front={face_tailwind} back={fundo_tailwind} />
        <p>Tailwind</p>
        </Card>
     <Card  width='w-[300px]'>
         <IconFlip front={face_postgresql} back={fundo_postgresql} />
        <p>PostgreSQL</p>
        </Card>
     <Card  width='w-[300px]'>
         <IconFlip front={face_vue} back={fundo_vue} />
        <p>Vue JS</p>
        </Card>
    </div>
    <Timeline />
    

    </>
  )
}

export default Home
