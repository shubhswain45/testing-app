import { createGraphqlClient } from "@/clients/api";
import { CreateTrackPayload } from "@/gql/graphql";
import { createTrackMutation } from "@/graphql/mutations/track";
import { getFeedTracksQuery, getTrackByIdQuery } from "@/graphql/queries/track";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const useGetFeedTracks = () => {
    return useQuery({
        queryKey: ["feedPosts"],
        queryFn: async () => {
            const graphqlClient = createGraphqlClient()
            const { getFeedTracks } = await graphqlClient.request(getFeedTracksQuery);
            return getFeedTracks;
        }
    })
};

export const useGetTrackById = (id: string) => {
    return useQuery({
        queryKey: ["track", id],
        queryFn: async () => {
            const graphqlClient = createGraphqlClient()
            const { getTrackById } = await graphqlClient.request(getTrackByIdQuery, {id});
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
