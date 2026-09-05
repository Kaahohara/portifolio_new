import Card from "../components/card"
import Carrousel from "../components/carrousel";
import ecommerce from '../assets/ecommerce.jpeg';
import investimentos from '../assets/investimentos.png';
import gtmais from '../assets/mais_acao.jpeg';
import precobanana from '../assets/preco_banana.jpeg';
import blogcompass from '../assets/blog_compass.jpeg';
import portifolio from '../assets/portifolio.jpeg';
function Projects() {
  const meusProjetos = [
     
      {
        text: "Sistema de gerênciamento de investimentos com React e Django",
        image: investimentos
      },
      {
          text: "Sistema de e-commerce feito na Compass UOL com React e TypeScript",
          image: ecommerce
      }
    ];
  return (
    <>
    <p className="flex justify-center py-6 text-white text-xl font-bold text-center">Projects</p>
    
    <div className="flex flex-col gap-8 px-4">
      <Card className="lg:min-h-[410px] md:min-h-[350px] animate-dribbleInLeft animate-fill-forwards" url="https://maisacao.rnp.br/landing-page/">
        <img src={gtmais} alt="Mais Ação"></img>
      </Card>
      <Card className="lg:min-h-[410px] md:min-h-[350px] animate-dribbleInRight animate-fill-forwards" url="">
        <img src={precobanana} alt="Preço de Banana"></img>
      </Card>
      <Card className="lg:min-h-[410px] md:min-h-[350px] animate-dribbleInLeft animate-fill-forwards" url="https://kaahohara.github.io/blog_compass/">
        <img src={blogcompass} alt="Blog Compass"></img>
      </Card>
      <Card className="lg:min-h-[410px] md:min-h-[350px] animate-dribbleInRight animate-fill-forwards" url="https://kaahohara.github.io/PortifolioGabrielHenrique/#/">
        <img src={portifolio} alt="Portfólio"></img>
      </Card>
    </div>
    <p className="flex justify-center mt-6 text-white text-xl font-bold text-center">Projects in development</p>

    <div className='dark:bg-[#232323] px-4 rounded-lg overflow-hidden'>
      <Carrousel items={meusProjetos} interval={5000} />
    </div>
    </>
  )
}

export default Projects
