import { GraphQLClient } from "graphql-request";

export const createGraphqlClient = (token?: string) => {
    return new GraphQLClient('https://testing-app-fawn.vercel.app/graphql', {
        credentials: "include"
    });
}
