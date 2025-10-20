 interface TimelineCardProps {
    position: 'left' | 'right';
    topPosition?: string;
    date?: string;
    empresa?: string;
}

 function TimelineCard({position, topPosition, date, empresa, children}: React.PropsWithChildren<TimelineCardProps>) {
    const positionClasses = position === 'right'
        ? '-left-[50px]' 
        : '-right-[50px]'; 

    const contr = position === 'right' ? 'right-[280px]' : 'left-[280px]';
    const positionClass = position === 'left' ? 'flex justify-end items-end' : 'justify-start items-start';

    const textpositionClasses = position === 'left'
        ? 'left-0 flex justify-end text-start items-end ' 
        : 'right-0 justify-start text-end items-start '; 
   return (
    <>
    <div className={`absolute z-10 ${positionClasses} ${topPosition} bg-slate-500 dark:bg-[#232323] max-h-[400px] border-2 dark:border-[#9A37B0] max-w-[600px] w-[600px] rounded-lg -translate-y-1/2 p-4`}>
        <p>
         {children}
        </p>
    </div>
      
    <div className={`absolute z-10 ${textpositionClasses} ${topPosition} mt-[40px] h-[400px] max-w-[300px] w-[300px] rounded-lg -translate-y-1/2 p-4`}>
        <div className="flex flex-col  w-full justify-center h-full">
            <p>
                {date}
            </p>
                <div className={`my-3 h-1 bg-white dark:bg-[#9A37B0]`}>
                </div>
                <div className={`absolute ${contr} top-1/2 -translate-y-1/2 transform -mb-2 w-5 h-5 rounded-full dark:bg-[#9A37B0] bg-white z-20`}></div>
            <p>
                {empresa}
            </p>
        </div>
    </div>
    </>
    )
    }
    export default TimelineCard