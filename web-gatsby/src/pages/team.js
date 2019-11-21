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
            <div className="card la-card">
              <div key={edge.node.id} className="post">
              <div className="card-header">
                <p className="card-header-title"> {edge.node.frontmatter.title}</p>
              </div>
              <div className="card-content">
                  <p className="content">{edge.node.frontmatter.description}</p>
                  <PostLink  post={edge.node} /> 
              </div>
              </div>
            </div>
          )
    })
  return (
    <Layout>
      <div className="section">
      <div className="container">
          <h1 className="title"> Holi los post del equipo son: </h1>
          <hr />
          {Posts}
      </div>
      </div>
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