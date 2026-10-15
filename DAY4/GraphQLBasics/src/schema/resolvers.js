import { userModel } from "../models/users.js";
const resolvers = {
  Query: {
    users: () => {
      return userModel;
    },
    user: (_, { id }) => {
      return userModel.find(u => u.id == id);
    },
  },
  Mutation: {
    addUser: (_, { newUser }) => {
      let newUserToBeInserted = newUser;
      userModel.push(newUserToBeInserted);
      return newUserToBeInserted;
    },
  },
};

export default resolvers;
