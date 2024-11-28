import { graphql } from "@/gql";

export const signupUserMutation = graphql(`#graphql
    mutation SignupUser($payload: SignupUserPayload!) {
        signupUser(payload: $payload) {
            email
        }
    }
`)