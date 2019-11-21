import React from "react"

import '../styles/main.scss';
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="section is-warning">
        <div className="container">
          <h1 className="title title-main">
            Hackathon
          </h1>
          <div className="columns is-variable is-8">
              <div className="column">
                  <p className="subtitle">
                    Proyecto web integrador de la hackaton Agrodreams-Debmedia. <br />
                  </p>
                  <p> Integrantes </p>
                  <ol className="integrantes"> 
                    <li> El sherman </li>
                    <li> Fer-net </li>
                    <li> El señor Chat (Nahue) </li>
                    <li> Ale? </li>
                    <li> Meri </li>
                    <li> Fran </li>
                  </ol>
              </div>
              <div className="column is-offset-1">
                  <img src={'../../07.png'} alt="ideas" className="img-home" />
              </div>
            </div>
              <div className="columns is-vcentered logos">
                <div className="column"><img src={'../../logo-gatsby.png'} alt="gatsby"/></div>
                <div className="column"><img src={'../../logo-node.png'} alt="node"/></div>
                <div className="column"><img src={'../../logo-graphql.png'} alt="graphql"/></div>
                <div className="column"><img src={'../../logo-react.png'}  alt="react"/></div>
              </div>
        </div>
    </section>
  </Layout>
)

export default IndexPage
