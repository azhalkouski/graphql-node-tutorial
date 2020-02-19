const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('../generated/prisma-client');


/**
 * context
 * The context argument is a plain JavaScript object that every resolver in the resolver chain can
 * read from and write to - it thus basically is a means for resolvers to communicate. It’s also
 * possible to already write to it at the moment when the GraphQL server itself is being
 * initialized. So, it’s also a way for you to pass arbitrary data or functions to theresolvers.
 */
const resolvers = {
  Query: {
    // info: () => 'This is the API of the graphql-node tutorial',
    // feed: (root, args, context, info) => {
    //   return context.prisma.links();
    // },
  },
  Mutation: {
    // post: (root, args, context) => {
    //   return context.prisma.createLink({
    //     url: args.url,
    //     description: args.description,
    //   });
    // }
  }
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    }
  },
});

server.start(() => console.log('Server is running on http://localhost:4000'));
