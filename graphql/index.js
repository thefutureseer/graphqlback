<<<<<<< HEAD
const typeDefs = require('../graphql/schema/typeDefs.js');
const {root} = require('../graphql/resolver/resolver.js');

module.exports = { typeDefs, root };
=======
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./resolvers/resolvers');

module.exports = {typeDefs, resolvers};
>>>>>>> main
