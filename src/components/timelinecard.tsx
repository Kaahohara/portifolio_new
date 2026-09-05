import { useEffect, useRef } from "react";

 interface TimelineCardProps {
    position: 'left' | 'right';
    topPosition?: string;
    date?: string;
    empresa?: string;
}

function TimelineCard({ position, date, empresa, children }: React.PropsWithChildren<TimelineCardProps>) {
    const isLeft = position === 'left';
    const cardOrderClass = isLeft ? 'md:col-start-1 lg:col-start-1 md:order-1 lg:order-1' : 'md:col-start-2 lg:col-start-2 md:order-2 lg:order-2';
    const textOrderClass = isLeft ? 'md:col-start-2 lg:col-start-2 md:order-2 lg:order-2 md:text-left lg:text-left md:items-start lg:items-start' : 'md:col-start-1 lg:col-start-1 md:order-1 lg:order-1 md:text-right lg:text-right md:items-end lg:items-end';
    const decorationClass = isLeft ? `${textOrderClass} top-1/2 translate-x-1/2 -translate-y-1/2 right-0` : `${textOrderClass} top-1/2 -translate-x-1/2 -translate-y-1/2 left-0`;
    const lineClass = isLeft ? `${textOrderClass} top-1/2 -translate-y-1/2 right-0` : `${textOrderClass} md:col-start-1 lg:col-start-1 md:order-1 lg:order-1 top-1/2 -translate-y-1/2 right-0  `;
    
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show-element');
                } else {
                    entry.target.classList.remove('show-element');
                }
            });
        }, {
            threshold: 0.1 
        });
    
        if (cardRef.current) {
            observer.observe(cardRef.current);
        }
    
        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
            observer.disconnect();
        };
    }, []); 
        
    return (
        <div 
          ref={cardRef} 
          className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-24 lg:gap-24 items-center z-10 mb-12 md:mb-0 lg:mb-0 hidden-element"
        >   <div className={`flex flex-col justify-center p-4 w-full md:text-left lg:text-left text-right ${textOrderClass}`}>
                <div className="relative flex flex-col w-full ">
                    <p className="text-sm font-semibold text-slate-400 md:text-white lg:text-white">
                        {date}
                    </p>
                    <div className={`${lineClass} absolute h-1 bg-white dark:bg-[#9A37B0] w-2/3 md:w-full lg:w-full }`}></div>
                    <div className={`${decorationClass} absolute w-5 h-5 rounded-full md:visible lg:visible invisible bg-white dark:bg-[#9A37B0] z-20 }`}></div>

                    <p className="text-xl pt-4 font-bold dark:text-white">
                        {empresa}
                    </p>
                </div>
            </div>
            <div className={`bg-slate-500 dark:bg-[#232323] border-2 dark:border-[#9A37B0] rounded-lg shadow-xl w-full ${cardOrderClass}`}>
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-lg text-sm leading-relaxed text-slate-200 min-h-[200px] flex items-center">
                    <div>{children}</div>
                </div>
            </div>
        </div>
    );
}

export default TimelineCard;