interface CardProps {
  width?: string;
  className?: string;
  hoverText?: string;
  url?: string;
}

function Card({ 
  width = 'w-full', 
  className = '', 
  children, 
  url = '', 
  hoverText = "Ver detalhes" 
}: React.PropsWithChildren<CardProps>) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className={`
        group relative rounded-lg border-2 text-white dark:border-[#9A37B0] min-h-[140px] lg:min-h-[200px]
        overflow-hidden flex justify-center items-center flex-col 
        transition-all duration-300 ${width} ${className}
      `}>
        
        <div className="w-full h-full transition duration-300 flex flex-col justify-center items-center">
          {children}
        </div>

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <span className="text-xl font-bold px-4 text-center">
              {hoverText}
            </span>
          </div>
        
      </div>
    </a>
  );
}

export default Card;