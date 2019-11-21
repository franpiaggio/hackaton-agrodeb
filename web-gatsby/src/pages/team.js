import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import Layout from "../components/layout"
const Team = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge) => {
          return( 
            <div key={edge.node.id} className="post">
              <h2> {edge.node.frontmatter.title} </h2>
              <p>{edge.node.frontmatter.description}</p>
              <PostLink  post={edge.node} /> 
              <hr />
            </div>
          )
    })
  return (
    <Layout>
      <h1> Holi los post del equipito son: </h1>
      <hr />
      {Posts}
    </Layout>
  )
}
export default Team
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date
            path
            title
            description
          }
        }
      }
    }
  }
`