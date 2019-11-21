import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Chat = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>El chat Nahue, el chat</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Chat
