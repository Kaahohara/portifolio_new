interface CardProps {
    width: string;
    className?: string; 
}

function Card({ width, className = '', children}: React.PropsWithChildren<CardProps>) {
  return (
    <div className={`rounded-lg border-2 flex items-center flex-col justify-center text-white dark:border-[#9A37B0] p-6 ${width} ${className}`}>
        <div id="container">
        </div>
      {children}
    </div>
    
  );
}

export default Card