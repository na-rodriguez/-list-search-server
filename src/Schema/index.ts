import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { CREATE_CONTACT } from './Mutations/Contact'
import { GET_CONTACTS_BY_NAME, GET_CONTACT } from './Queries/Contact'

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getContact: GET_CONTACT,
    getContactsByName: GET_CONTACTS_BY_NAME,
  },
})

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createContact: CREATE_CONTACT,
  },
})

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
})