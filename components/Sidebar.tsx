
import { ScrollArea } from "@/components/ui/scroll-area";
import { Library } from "lucide-react";


const LeftSidebar = () => {

	return (
		<div className='h-full flex flex-col gap-2'>
			{/* Navigation menu */}

			{/* Library section */}
			<div className='flex-1 rounded-lg bg-[#121212] p-4'>
				<div className='flex items-center justify-between mb-4'>
					<div className='flex items-center text-white px-2'>
						<Library className='size-5 mr-2' />
						<span className='hidden md:inline'>Playlists</span>
					</div>
				</div>

				<ScrollArea className='h-[calc(100vh-300px)]'>
					<div className='space-y-2'>
						
					</div>
				</ScrollArea>
			</div>
		</div>
	);
};
export default LeftSidebar;