import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import styled from 'styled-components'


const BlogBody = styled.div`
  width: 80%;
  padding: .5rem;
  margin: 3rem auto;

h1 {
  text-align: center;
  margin: 2rem 0;
  padding: 3rem 0;
  font-weight: bold;
  border-bottom: 4px solid #83b799;
  width: 700px;
  transform: rotate(-5deg);
  
  @media (max-width: 750px) {
    width: 350px;
    margin: 2rem auto;
  }
}
`

export default ({ data }) => {
  let post = data.markdownRemark
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout>
    <div id="image-container">
    <Img fluid={featuredImgFluid} style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
    </div>
      <BlogBody>
        
    <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </BlogBody>
    </Layout>
  )
}
export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
