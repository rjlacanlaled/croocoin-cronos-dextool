const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
require('dotenv').config();

const typeDefs = gql`
    type Query {
        sayHi: String!
    }
`;

const resolvers = {
    Query: {
        sayHi: () => 'Hello world',
    },
};

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
});


apolloServer.listen({ port: 5600}).then(() => {
    console.log('Apollo server running!');
})

const app = express();
const port = process.env.PORT || 5500;
const uri = process.env.ATLAS_URI;

app.use(cors());
app.use(express.json());

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Connected to MongoDB database!');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
