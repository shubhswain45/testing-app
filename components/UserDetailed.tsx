import { GetUserProfileResponse } from '@/gql/graphql'
import { useCurrentUser } from '@/hooks/auth'
import { useFollowUser } from '@/hooks/user'
import { Ellipsis } from 'lucide-react'
import React from 'react'

function UserDetailed({ user }: { user: GetUserProfileResponse | undefined | null }) {
    const { data } = useCurrentUser()
    const isProfileMine = data?.getCurrentUser?.id == user?.id

    const { mutate: followUser } = useFollowUser()

    return (
        <>
            <div className="flex items-center gap-6 p-6 shadow-[0_4px_6px_0_rgba(0,0,0,0.1)] mb-6 relative">
                {/* Avatar */}
                <img
                    src={user?.profileImageURL || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgYN6WeHs6tndhVLPPLjId5KiXOlZ26pLLig&s"}
                    alt="Profile"
                    className="w-32 h-32 flex-shrink-0 rounded-lg"
                />

                {/* User Details */}
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <h1 className="text-3xl font-bold text-white">{user?.fullName}</h1>
                        <p className="text-white mb-4">{user?.bio}</p>
                        <div className="flex gap-12 mb-4">
                            <div>
                                <p className="text-lg font-semibold text-white">{user?.totalFollowers}</p>
                                <p className="text-white">Followers</p>
                            </div>
                            <div>
                                <p className="text-lg font-semibold text-white">{user?.totalFollowings}</p>
                                <p className="text-white">Following</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Follow & More Button */}
            <div className="px-6 mb-6 flex items-center justify-start space-x-3">
                <button className="px-4 py-1 border-2 border-white text-white rounded-full hover:bg-[#262626] hover:border-white transition duration-300 ease-in-out text-sm" onClick={() => followUser(user?.id || "")}>
                    {
                        isProfileMine ? "Edit Profile" : user?.followedByMe ? "Unfollow" : "Follow"
                    }
                </button>
                <Ellipsis className="text-2xl hover:text-white text-[#6d6d6e] cursor-pointer" />
            </div>
        </>

    )
}

export default UserDetailed