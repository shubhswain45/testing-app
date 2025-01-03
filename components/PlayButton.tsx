import { Play } from "lucide-react";

const PlayButton = () => {
    return (
        <button
            className={`absolute bottom-3 right-2 bg-green-500 hover:bg-green-400 hover:scale-105 transition-all 
				opacity-0 translate-y-2 group-hover:translate-y-0 ${true ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
        >

            <Play className='size-5 text-black' />

        </button>
    );
};
export default PlayButton;