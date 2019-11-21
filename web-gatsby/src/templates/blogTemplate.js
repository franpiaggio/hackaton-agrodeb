import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
export default function Template({
  data, // Graphql inyecta data de la query al final del documento
}) {
  const { markdownRemark } = data // data.markdownRemark tiene la data del post
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1 className="title">{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <hr />
        <Link to="/team">Volver</Link>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`