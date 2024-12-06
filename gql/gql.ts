/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "#graphql\n    mutation SignupUser($payload: SignupUserPayload!) {\n        signupUser(payload: $payload) {\n            email\n        }\n    }\n": types.SignupUserDocument,
    "#graphql\n    mutation LoginUser($payload: LoginUserPayload!) {\n        loginUser(payload: $payload) {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n        }\n    }\n": types.LoginUserDocument,
    "#graphql\n    mutation VerifyEmail($payload: VerifyEmailPayload!) {\n        verifyEmail(payload: $payload) {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n        }\n    }\n": types.VerifyEmailDocument,
    "#graphql\n    mutation LogoutUser {\n        logoutUser\n    }\n": types.LogoutUserDocument,
    "#graphql\n    mutation ForgotPassword($emailOrUsername: String!) {\n  forgotPassword(emailOrUsername: $emailOrUsername)\n}\n": types.ForgotPasswordDocument,
    "#graphql\n    mutation ResetPassword($payload: ResetPasswordPayload!){       \n        resetPassword(payload: $payload)\n    }\n": types.ResetPasswordDocument,
    "#graphql\n  mutation CreateTrack($payload: createTrackPayload!) {\n  createTrack(payload: $payload) {\n    id\n    title\n    artist\n    duration\n    coverImageUrl\n    audioFileUrl\n\n    author {\n      id\n      username\n      profileImageURL\n    }\n  }\n}\n": types.CreateTrackDocument,
    "#graphql\nmutation LikeTrack($trackId: String!) {\n  likeTrack(trackId: $trackId)\n}\n": types.LikeTrackDocument,
    "#graphql\n  mutation DeleteTrack($trackId: String!) {\n    deleteTrack(trackId: $trackId)\n  }\n": types.DeleteTrackDocument,
    "#graphql\nmutation FollowUser($userId: String!) {\n  followUser(userId: $userId)\n}\n": types.FollowUserDocument,
    "#graphql\n    query GetCurrentUser {\n        getCurrentUser {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n        }\n    }\n": types.GetCurrentUserDocument,
    "#graphql\nquery GetFeedTracks {\n  getFeedTracks {\n         id\n      title\n      artist\n      duration\n      audioFileUrl  \n      coverImageUrl\n  }\n}\n": types.GetFeedTracksDocument,
    "#graphql\nquery GetTrackById($trackId: String!) {\n  getTrackById(trackId: $trackId) {\n    id\n    title\n    artist\n    duration\n    audioFileUrl  \n    coverImageUrl\n    hasLiked\n  }\n}\n": types.GetTrackByIdDocument,
    "#graphql\nquery GetTrackBydummyId($trackId: String!) {\n  getTrackBydummyId(trackId: $trackId) {\n    id\n    title\n    artist\n    duration\n    audioFileUrl  \n    coverImageUrl\n    hasLiked\n  }\n}\n": types.GetTrackBydummyIdDocument,
    "#graphql\nquery GetUserProfile($username: String!) {\n  getUserProfile(username: $username) {\n    id\n    username\n    fullName\n    profileImageURL\n    bio\n    totalTracks\n    totalFollowers\n    totalFollowings\n    followedByMe\n  }\n}\n": types.GetUserProfileDocument,
    "#graphql\nquery GetUserTracks($username: String!) {\n  getUserTracks(username: $username) {\n    id\n    title\n    artist\n    duration\n    coverImageUrl\n    audioFileUrl\n    hasLiked\n    author {\n      id\n      profileImageURL\n      username\n    }\n  }\n}\n": types.GetUserTracksDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    mutation SignupUser($payload: SignupUserPayload!) {\n        signupUser(payload: $payload) {\n            email\n        }\n    }\n"): (typeof documents)["#graphql\n    mutation SignupUser($payload: SignupUserPayload!) {\n        signupUser(payload: $payload) {\n            email\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    mutation LoginUser($payload: LoginUserPayload!) {\n        loginUser(payload: $payload) {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n        }\n    }\n"): (typeof documents)["#graphql\n    mutation LoginUser($payload: LoginUserPayload!) {\n        loginUser(payload: $payload) {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    mutation VerifyEmail($payload: VerifyEmailPayload!) {\n        verifyEmail(payload: $payload) {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n        }\n    }\n"): (typeof documents)["#graphql\n    mutation VerifyEmail($payload: VerifyEmailPayload!) {\n        verifyEmail(payload: $payload) {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    mutation LogoutUser {\n        logoutUser\n    }\n"): (typeof documents)["#graphql\n    mutation LogoutUser {\n        logoutUser\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    mutation ForgotPassword($emailOrUsername: String!) {\n  forgotPassword(emailOrUsername: $emailOrUsername)\n}\n"): (typeof documents)["#graphql\n    mutation ForgotPassword($emailOrUsername: String!) {\n  forgotPassword(emailOrUsername: $emailOrUsername)\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    mutation ResetPassword($payload: ResetPasswordPayload!){       \n        resetPassword(payload: $payload)\n    }\n"): (typeof documents)["#graphql\n    mutation ResetPassword($payload: ResetPasswordPayload!){       \n        resetPassword(payload: $payload)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n  mutation CreateTrack($payload: createTrackPayload!) {\n  createTrack(payload: $payload) {\n    id\n    title\n    artist\n    duration\n    coverImageUrl\n    audioFileUrl\n\n    author {\n      id\n      username\n      profileImageURL\n    }\n  }\n}\n"): (typeof documents)["#graphql\n  mutation CreateTrack($payload: createTrackPayload!) {\n  createTrack(payload: $payload) {\n    id\n    title\n    artist\n    duration\n    coverImageUrl\n    audioFileUrl\n\n    author {\n      id\n      username\n      profileImageURL\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\nmutation LikeTrack($trackId: String!) {\n  likeTrack(trackId: $trackId)\n}\n"): (typeof documents)["#graphql\nmutation LikeTrack($trackId: String!) {\n  likeTrack(trackId: $trackId)\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n  mutation DeleteTrack($trackId: String!) {\n    deleteTrack(trackId: $trackId)\n  }\n"): (typeof documents)["#graphql\n  mutation DeleteTrack($trackId: String!) {\n    deleteTrack(trackId: $trackId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\nmutation FollowUser($userId: String!) {\n  followUser(userId: $userId)\n}\n"): (typeof documents)["#graphql\nmutation FollowUser($userId: String!) {\n  followUser(userId: $userId)\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    query GetCurrentUser {\n        getCurrentUser {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n        }\n    }\n"): (typeof documents)["#graphql\n    query GetCurrentUser {\n        getCurrentUser {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\nquery GetFeedTracks {\n  getFeedTracks {\n         id\n      title\n      artist\n      duration\n      audioFileUrl  \n      coverImageUrl\n  }\n}\n"): (typeof documents)["#graphql\nquery GetFeedTracks {\n  getFeedTracks {\n         id\n      title\n      artist\n      duration\n      audioFileUrl  \n      coverImageUrl\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\nquery GetTrackById($trackId: String!) {\n  getTrackById(trackId: $trackId) {\n    id\n    title\n    artist\n    duration\n    audioFileUrl  \n    coverImageUrl\n    hasLiked\n  }\n}\n"): (typeof documents)["#graphql\nquery GetTrackById($trackId: String!) {\n  getTrackById(trackId: $trackId) {\n    id\n    title\n    artist\n    duration\n    audioFileUrl  \n    coverImageUrl\n    hasLiked\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\nquery GetTrackBydummyId($trackId: String!) {\n  getTrackBydummyId(trackId: $trackId) {\n    id\n    title\n    artist\n    duration\n    audioFileUrl  \n    coverImageUrl\n    hasLiked\n  }\n}\n"): (typeof documents)["#graphql\nquery GetTrackBydummyId($trackId: String!) {\n  getTrackBydummyId(trackId: $trackId) {\n    id\n    title\n    artist\n    duration\n    audioFileUrl  \n    coverImageUrl\n    hasLiked\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\nquery GetUserProfile($username: String!) {\n  getUserProfile(username: $username) {\n    id\n    username\n    fullName\n    profileImageURL\n    bio\n    totalTracks\n    totalFollowers\n    totalFollowings\n    followedByMe\n  }\n}\n"): (typeof documents)["#graphql\nquery GetUserProfile($username: String!) {\n  getUserProfile(username: $username) {\n    id\n    username\n    fullName\n    profileImageURL\n    bio\n    totalTracks\n    totalFollowers\n    totalFollowings\n    followedByMe\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\nquery GetUserTracks($username: String!) {\n  getUserTracks(username: $username) {\n    id\n    title\n    artist\n    duration\n    coverImageUrl\n    audioFileUrl\n    hasLiked\n    author {\n      id\n      profileImageURL\n      username\n    }\n  }\n}\n"): (typeof documents)["#graphql\nquery GetUserTracks($username: String!) {\n  getUserTracks(username: $username) {\n    id\n    title\n    artist\n    duration\n    coverImageUrl\n    audioFileUrl\n    hasLiked\n    author {\n      id\n      profileImageURL\n      username\n    }\n  }\n}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;