// define all your queries and mutation here
const resolvers = {
    Query: {
        hello: (parentValue, args) => `Hello, ${ args.name || 'World' }!`
    }
};

module.exports = resolvers;