import React from "react"
import { graphql } from "gatsby"
import { Jumbo, SEO, Product } from '../components'


export const query = graphql`
       query GET_DATA {
            allSite {
                edges {
                  node {
                   siteMetadata {
                     description
               }
              }
            }
          }

          
            allStripePrice {
                edges {
                    node {
                      id
                      unit_amount
                      product {
                          name 
                          metadata {
                              wear
                              img
                              description_
                        }
                      }
                    }
                }
              }
          

    }
`;

const IndexPage = ({ data }) => {
    console.log(data)
    return (
      <>
        <SEO title="Home" />
        <Jumbo subtitle2={data} />
        <Product products={data.allStripePrice.edges} />
        
      </>

) 

}
export default IndexPage
