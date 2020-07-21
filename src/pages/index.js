import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default  ({data}) => {
  console.log(data);
  return(
  <Layout>
    <SEO title="Home" />
    <div>
    <h1>Welcome to George's Blog</h1>
    <h4>{`The total number of posts is ${data.allMarkdownRemark.totalCount}`}</h4>
    {
      data.allMarkdownRemark.edges.map(({node})=>(
        <div key={Node.id}>
          <span>{node.frontmatter.title} - {node.frontmatter.date}</span>
          <p>{node.excerpt}</p>
        </div>
      ))
    }
    </div>



    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)}

export const data = graphql` 
query {
  allMarkdownRemark {
    edges {
      node {
        id
        excerpt
        frontmatter {
          date
          description
          title
        }
      }
    }
    totalCount
  }
}
`;
