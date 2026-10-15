const typeDefs = `#graphql
type User{
    id:ID
    name:String
    age:Int
    email:String
}


type Query{
    users:[User]
}

`;

export default typeDefs;
