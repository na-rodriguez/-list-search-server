import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { schema } from "./Schema"
import cors from 'cors'
import { createConnection } from 'typeorm'
import { Contacts } from './Entities/Contacts'

const main = async () => {
  await createConnection({
        type: "mysql",
        database: "",
        username: "",
        password: "",
        logging: true,
        synchronize: true,
        entities: [Contacts],
  })

  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use("/graphql", graphqlHTTP({
      schema,
      graphiql: true,
    })
  )

  app.listen(4000, () => {
    console.log("SERVER RUNNING ON PORT 4000");
  })
}

main().catch((err) => {
  console.log(err);
});