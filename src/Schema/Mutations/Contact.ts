import { GraphQLString, GraphQLInt } from "graphql"
import { MessageType } from "../TypeDefs/Messages"
import { Contacts } from "../../Entities/Contacts"

export const CREATE_CONTACT = {
  type: MessageType,
  args: {
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    picture: { type: GraphQLString },
    eyeColor: { type: GraphQLString },
    company: { type: GraphQLString },
    email: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { name, age, picture, eyeColor, company, email } = args
    await Contacts.insert({ name, age, picture, eyeColor, company, email })
    return { successful: true, message: `Contact ${args.name} was created` }
  },
}
