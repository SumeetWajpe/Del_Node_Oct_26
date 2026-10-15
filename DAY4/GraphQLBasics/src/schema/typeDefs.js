const typeDefs = `#graphql
type User{
    id:ID
    name:String
    age:Int
    email:String
}


type Query{
    users:[User]
    user(id:ID!):User
}

`;

export default typeDefs;
