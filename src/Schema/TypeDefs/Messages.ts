import { GraphQLObjectType, GraphQLString, GraphQLBoolean } from "graphql";

//to handle errors
export const MessageType = new GraphQLObjectType({
  name: "Message",
  fields: () => ({
    successful: { type: GraphQLBoolean },
    message: { type: GraphQLString },
  }),
})
