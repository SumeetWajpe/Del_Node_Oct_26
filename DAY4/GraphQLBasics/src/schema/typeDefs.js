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
type Mutation{
    addUser(newUser:UserInput!):User
}
input UserInput{
    id:ID
    name:String
    age:Int
    email:String
}
`;

export default typeDefs;
