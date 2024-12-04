import { graphql } from "@/gql";

export const getUserProfileQuery = graphql(`#graphql
query GetUserProfile($username: String!) {
  getUserProfile(username: $username) {
    id
    username
    fullName
    profileImageURL
    bio
    totalTracks
    totalFollowers
    totalFollowings
    followedByMe
  }
}
`);

export const getUserTracksQuery = graphql(`#graphql
query GetUserTracks($username: String!) {
  getUserTracks(username: $username) {
    id
    title
    artist
    duration
    coverImageUrl
    audioFileUrl
    hasLiked
    author {
      id
      profileImageURL
      username
    }
  }
}
`);

