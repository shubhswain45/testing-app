import Header from "./Header";
import { Skeleton } from "./ui/skeleton";

export function UserAvatarSkeleton() {
    return (
        <div className="text-neutral-400 rounded-lg w-full h-full overflow-hidden overflow-y-auto">
            <Header>
                {/* User Profile Section */}
                <div className="flex items-center gap-6 p-6 shadow-[0_4px_6px_0_rgba(0,0,0,0.1)] mb-6 relative">
                    {/* Avatar */}
                    <Skeleton
                        className="w-32 h-32 flex-shrink-0 rounded-lg"
                    />

                    {/* User Details */}
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-[250px]" />
                                <Skeleton className="h-4 w-[200px]" />
                            </div>



                        </div>
                    </div>
                </div>

                {/* Follow & More Button */}
                <div className="px-6 mb-6 flex items-center justify-start space-x-3">
                    <button className="px-4 py-1 text-white rounded-full hover:bg-[#262626] hover:border-white transition duration-300 ease-in-out text-sm">
                    <Skeleton className="h-4 w-[100px]" />
                    </button>
                    <Skeleton className="h-4 w-[100px]" />
                </div>

            </Header>
        </div>
    );
}
