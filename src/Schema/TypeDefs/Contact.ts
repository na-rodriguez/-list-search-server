import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } from "graphql"

export const ContactType = new GraphQLObjectType({
  name: "Contact",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    picture: { type: GraphQLString },
    eyeColor: { type: GraphQLString },
    company: { type: GraphQLString },
    email: { type: GraphQLString },
  }),
})
