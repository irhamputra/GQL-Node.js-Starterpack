const { GraphQLServer } = require('graphql-yoga');
const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');

const PORT = 4000;

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => `Server is running at http://localhost:${PORT}`);