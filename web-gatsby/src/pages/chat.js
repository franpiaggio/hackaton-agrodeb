import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory'
import App from "../components/chat/App";

import "../components/chat/index.css";

// Create an http link:
const httpLink = new HttpLink({
    uri: 'http://fbf796b0.ngrok.io'
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
    uri: `ws://fbf796b0.ngrok.io`,
    options: {
        reconnect: true,
        lazy: true,
        inactivityTimeout: 30000,
    }
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
    // split based on operation type
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
    },
    wsLink,
    httpLink,
);

const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
});



const Chat = () => (
  <Layout>
    <SEO title="Page two" />
    <h1></h1>
      <div className="el-chat">
          <ApolloProvider client={client}>
              <App />
          </ApolloProvider>
      </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Chat
