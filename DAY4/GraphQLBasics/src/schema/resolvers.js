import { userModel } from "../models/users.js";
const resolvers = {
  Query: {
    users: () => {
      return userModel;
    },
  },
};

export default resolvers;
