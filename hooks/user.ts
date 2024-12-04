import { createGraphqlClient } from "@/clients/api"
import { followUserMutation } from "@/graphql/mutations/user"
import { getUserProfileQuery, getUserTracksQuery } from "@/graphql/queries/user"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

export const useGetUserProfile = (username: string) => {
    return useQuery({
        queryKey: ['userProfile', username],
        queryFn: async () => {
            const graphqlClient = createGraphqlClient()
            const { getUserProfile } = await graphqlClient.request(getUserProfileQuery, { username })
            return getUserProfile
        }
    })
}

export const useGetUserTracks = (username: string) => {
    return useQuery({
        queryKey: ['userTracks', username],
        queryFn: async () => {
            const graphqlClient = createGraphqlClient()
            const { getUserTracks } = await graphqlClient.request(getUserTracksQuery, { username })
            return getUserTracks
        }
    })
}


export const useFollowUser = () => {
    const router = useRouter();

    return useMutation({
        mutationFn: async (userId: string) => {
            try {
                const graphqlClient = createGraphqlClient();
                const { followUser } = await graphqlClient.request(followUserMutation, { userId });
                return followUser;
            } catch (error: any) {
                throw new Error(error?.response?.errors?.[0]?.message || "Something went wrong");
            }
        },

        onSuccess: (data) => {
            // Explicitly check for true/false or other expected values
            if (data === true) {
                toast.success("Followed!");
            } else if (data === false) {
                toast.success("Unfollowed!");
            } else {
                toast.success("Action completed!");
            }

            // Refresh the page
            router.refresh();
        },

        onError: (error: any) => {
            const errorMessage = error.message.split(':').pop()?.trim() || "Something went wrong";
            toast.error(errorMessage);
        }
    });
};