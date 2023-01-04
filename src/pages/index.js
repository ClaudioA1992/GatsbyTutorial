import React from "react"
import Layout from '../components/Layout';
import { header, btn } from '../styles/home.module.css';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Home({ data }) {

  console.log(data);
  const portada = getImage(data.file);

  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Proyecto personal</h2>
          <h3>Develop & Deploy</h3>
          <p>Fullstack developer based in Concepción, Chile</p>
          <Link className={btn} to="/projects"> My Porftolio Projects </Link>
        </div>
        <GatsbyImage image={portada} alt="site banner" style={{maxWidth: '100%'}}></GatsbyImage>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "guitar.jpg"}) {
      id
      childImageSharp {
        gatsbyImageData(
          formats: [AUTO, WEBP, AVIF]
          placeholder: DOMINANT_COLOR
          width: 400
        )
      }
    }
  }
`