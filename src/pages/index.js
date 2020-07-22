import React from "react";
import { Link, graphql } from "gatsby";
import styled from 'styled-components';

import Layout from "../components/layout";
import SEO from "../components/seo";

const LinkStyled = styled(Link)`
  text-decoration: none;
`
const BigTitle = styled.h3`
  margin-bottom: 20px;
`;

export default  ({data}) => {

  return(
  <Layout>
    <SEO title="Home" />
    <div>
    <h1>Welcome to George's Blog</h1>
    <h4>{`The total number of posts is ${data.allMarkdownRemark.totalCount}`}</h4>
    {
      data.allMarkdownRemark.edges.map(({node})=>(
        <div key={node.id}>
        <LinkStyled to={node.fields.slug} >
          <BigTitle>{node.frontmatter.title} - {node.frontmatter.date}</BigTitle>
        </LinkStyled>
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
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        fields{
          slug
        }
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
