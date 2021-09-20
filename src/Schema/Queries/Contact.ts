import { GraphQLID, GraphQLList, GraphQLString } from 'graphql'
import { ContactType } from '../TypeDefs/Contact'
import { Contacts } from '../../Entities/Contacts'

export const GET_CONTACTS_BY_NAME = {
  type: new GraphQLList(ContactType),
  args: {
    name: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { name } = args;
    if(name === '')
      return await Contacts.find()
    const contacts = await Contacts.find()
    return contacts.filter(
      value =>
        new RegExp(name.trim().replace(" ", ".+"), "i").test(value.name) ? value.name : ''
    )
  },
}

export const GET_CONTACT = {
  type: ContactType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const { id } = args
    return await Contacts.findOne({ id: id });
  },
}

// Regex da pesquisa: considerar caractere de espaço, 
// dado o payload acima name: Weber Stein, 
// se entrar com we in deve retornar no resultado Weber Stein
const partialSearch = (name: string) => {
  var str = "The best things in life are free";
  var res = new RegExp(name.trim().replace(" ", ".+"), "i").test(str);

}
