import { graphql } from "@/gql"

export const signupUserMutation = graphql(`#graphql
    mutation SignupUser($payload: SignupUserPayload!) {
        signupUser(payload: $payload) {
            email
        }
    }
`)

export const loginUserMutation = graphql(`#graphql
    mutation LoginUser($payload: LoginUserPayload!) {
        loginUser(payload: $payload) {
            id
            profileImageURL
            email
            username
            fullName
            isVerified
        }
    }
`)

export const verifyEmailMutation = graphql(`#graphql
    mutation VerifyEmail($payload: VerifyEmailPayload!) {
        verifyEmail(payload: $payload) {
            id
            profileImageURL
            email
            username
            fullName
            isVerified
        }
    }
`)


export const logoutUserMutation = graphql(`#graphql
    mutation LogoutUser {
        logoutUser
    }
`)

export const forgotPasswordMutation = graphql(`#graphql
    mutation ForgotPassword($emailOrUsername: String!) {
  forgotPassword(emailOrUsername: $emailOrUsername)
}
`)


export const resetPasswordMutation = graphql(`#graphql
    mutation ResetPassword($payload: ResetPasswordPayload!){       
        resetPassword(payload: $payload)
    }
`)