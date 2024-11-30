import { graphql } from "@/gql";

export const getFeedTracksQuery = graphql(`#graphql
   query GetFeedTracks {
  getFeedTracks {
  id
  audioFileUrl  
  coverImageUrl
  }
}
`)
