const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');
const { filter } = require('lodash');
const resolvers = require('./src/resolvers');
require('dotenv').config({ path: './.env.dev' });

const server = new GraphQLServer({
  typeDefs: `${__dirname}/src/schema.graphql`,
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: './src/prisma/prisma.graphql', // the generated Prisma DB schema
      endpoint: process.env.PRISMA_ENDPOINT,          // the endpoint of the Prisma DB service
      secret: 'ama-prisma',                    // specified in database/prisma.yml
    }),
  }),
});

const options = {
  port: 4000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/',
}

server.start(options, () => console.log('Server is running on localhost:4000'))
