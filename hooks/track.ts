import { createGraphqlClient } from "@/clients/api";
import { CreateTrackPayload } from "@/gql/graphql";
import { createTrackMutation, deleteTrackMutation, likeTrackMutation } from "@/graphql/mutations/track";
import { getFeedTracksQuery, getTrackByIdQuery } from "@/graphql/queries/track";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const useGetFeedTracks = () => {
    return useQuery({
        queryKey: ["feedTracks"],
        queryFn: async () => {
            const graphqlClient = createGraphqlClient()
            const { getFeedTracks } = await graphqlClient.request(getFeedTracksQuery);
            return getFeedTracks;
        }
    })
};

export const useGetTrackById = (trackId: string) => {
    return useQuery({
        queryKey: ["track", trackId],
        queryFn: async () => {
            console.log("inside useGetTrackById");
            
            const graphqlClient = createGraphqlClient()
            const { getTrackById } = await graphqlClient.request(getTrackByIdQuery, {trackId});
            return getTrackById;
        }
    })
};


export const useCreateTrack = () => {
    const router = useRouter();

    return useMutation({
        mutationFn: async (trackData: CreateTrackPayload) => {
            if (!trackData.audioFileUrl) {
                toast.error("Please select an audio file.");
            }

            if (!trackData.title) {
                throw new Error("Title is required!");
            }

            // Convert duration string to a number for comparison
            const durationInSeconds = parseFloat(trackData.duration);
            if (isNaN(durationInSeconds) || durationInSeconds <= 10) {
                throw new Error("Audio must be longer than 10 seconds!");
            }

            try {
                const graphqlClient = createGraphqlClient();
                const { createTrack } = await graphqlClient.request(createTrackMutation, {
                    payload: trackData,
                });
                return createTrack;
            } catch (error: any) {
                throw new Error(
                    error?.response?.errors?.[0]?.message || "Something went wrong"
                );
            }
        },
        onSuccess: () => {
            toast.success("Track created successfully");
            router.back();
        },
        onError: (error: any) => {
            const errorMessage = error.message.split(":").pop()?.trim() || "Something went wrong";
            toast.error(errorMessage);
        },
    });
};


export const useDeleteTrack = () => {
    return useMutation({
        mutationFn: async (trackId: string) => {
            try {
                const graphqlClient = createGraphqlClient()
                const { deleteTrack } = await graphqlClient.request(deleteTrackMutation, { trackId });
                return deleteTrack;
            } catch (error: any) {
                throw new Error(error?.response?.errors?.[0]?.message || "Something went wrong");
            }
        },

        onSuccess: (data) => {
            toast.success("Track Deleted successfully");
        },

        onError: (error: any) => {
            const errorMessage = error.message.split(':').pop()?.trim() || "Something went wrong";
            toast.error(errorMessage);
        }
    });
}

export const useLikeTrack = (
    setIsLiked:React.Dispatch<React.SetStateAction<boolean>>
) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (trackId: string) => {
            try {
                const graphqlClient = createGraphqlClient();
                const { likeTrack } = await graphqlClient.request(likeTrackMutation, { trackId });
                return likeTrack ;
            } catch (error: any) {
                throw new Error(error?.response?.errors?.[0]?.message || 'Something went wrong');
            }
        },
        onSuccess: (data) => {            
            if(data){
                setIsLiked(true)
                toast.success('Liked successfully');
            } else {
                setIsLiked(false)
                toast.success('UnLiked successfully');
            }
            
        },
        onError: (error: any) => {
            const errorMessage = error.message.split(':').pop()?.trim() || 'Something went wrong';
            toast.error(errorMessage);
        },
    });
};