import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import {graphql} from 'gatsby';


export default ({data})=>{
    const post = data.markdownRemark;
    return(
    <div>
        <SEO />
        <Layout>
            <h1>{post.frontmatter.title}</h1>

            <div dangerouslySetInnerHTML={{__html: post.html}} />
        </Layout>
    </div>
)}

export const query = graphql`
query($slug: String!) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    html
    frontmatter {
      title
    }
  }
}
`;