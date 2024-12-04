import { ApolloServer } from "@apollo/server";
import bodyParser from "body-parser";
import { expressMiddleware } from "@apollo/server/express4";
import express, { query } from "express";

export async function initServer() {
  const app = express();

  app.use(bodyParser.json());
  const graphqlServer = new ApolloServer({
    typeDefs: `
    type Query{
      hello:String
      }

      type Mutation{
        add(name:String):String}
    `,
    resolvers: {
      Query: {
        hello: () => `Hello World`,
      },
      Mutation: {},
    },
  });

  await graphqlServer.start();
  app.use("/graphql", expressMiddleware(graphqlServer));

  return app;
}
