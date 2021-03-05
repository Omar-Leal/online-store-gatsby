import React from "react"
import { Link, graphql } from "gatsby"
import { Jumbo } from '../components'
import { SEO } from "../components"

export const query = graphql`
          query GET_DESCRIPTION {
            allSite {
              edges {
                node {
                siteMetadata {
                  description
            }
          }
        }
      }
    }
`;

const IndexPage = ({ data }) => {

    return (
      <>
        <SEO title="Home" />
        <Jumbo subtitle2={data} />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/Gracias/">Go to gracias</Link>
      </>

) 

}
export default IndexPage
