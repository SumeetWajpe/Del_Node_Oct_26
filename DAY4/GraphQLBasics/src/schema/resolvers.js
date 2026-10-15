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
};

export default resolvers;
