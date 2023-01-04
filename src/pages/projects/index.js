import React from 'react';
import Layout from '../../components/Layout';
import { portfolio, projects } from '../../styles/projects.module.css';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Projects({ data }) {

    console.log(data);

    const projectsAr = data.projects.nodes;
    const contact = data.contact.siteMetadata.contact;

    // projectsAr.map(project => 
    //     console.log(project.frontmatter.thumb.childImageSharp.fluid.src)
    //     );


    return(
        <Layout>
            <div className={portfolio}>
                <h2>Portfolio</h2>
                <h3>Projects & Websites I've Created</h3>
                <div className={projects}>
                    {projectsAr.map(project => 
                    {const image = getImage(project.frontmatter.thumb);
                    return (
                        <a href={project.frontmatter.slug} key={project.id}>
                            <div>
                                <GatsbyImage image={image} alt="project image"></GatsbyImage>
                                <h3>{project.frontmatter.title}</h3>
                                <p>{project.frontmatter.stack}</p>
                            </div>
                        </a>
                    )})}
                </div>
                <p> Like what you see? Email me at { contact } for a quote! </p>
            </div>
        </Layout>
    )
}

// export page query

export const query = graphql`
  query ProjectsInfo {
  projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        title
        stack
        slug
        thumb {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, width: 200)
          }
        }
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}
`
