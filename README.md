## Server
### Node, Graphql, MySql


## First time, to create sql table
At server/src/index.ts main.createConnection change synchronize to true

#### Run:
Inside server file run `yarn dev`

#### Graphql mutation to create contact (http://localhost:4000/graphql):
`mutation {
  createContact(name: "Weber Stein", age: 37,
    picture: "https://i.pravatar.cc/200?u=5f1b3f4b7917ef26107bd58c",
  	eyeColor: "brown", company: "VIAGRAND",
    email: "weber.stein@viagrand.ca") {
      successful
      message
  }
}`
