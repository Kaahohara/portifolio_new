interface IconFlipProps {
    front: string;
    back: string;
   
}

function IconFlip({ front, back }: IconFlipProps) {
    return (
        <div className="w-32 h-32 scene group"> 
            <div className="
                w-full h-full relative flipper 
                transition-transform duration-700 
                group-hover:rotate-y-180 
            ">
                <img className="front absolute w-full h-full backface-hidden" src={`${front}`} alt="Front Face" />
                <img className="back absolute w-full h-full backface-hidden rotate-y-180" src={`${back}`} alt="Back Face" />
            </div>
        </div>
    );
}
export default IconFlip