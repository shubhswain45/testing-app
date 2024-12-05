import { GraphQLClient } from "graphql-request";

export const createGraphqlClient = (token?: string) => {
    return new GraphQLClient('https://connectify-server-app.onrender.com/graphql', {
        credentials: "include"
    });
}
