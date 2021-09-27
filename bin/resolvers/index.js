import { books } from "../mockData.js";
export const resolvers = {
    Query: {
        books: () => books
    }
};
