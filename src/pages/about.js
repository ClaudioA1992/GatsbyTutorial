import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Contact from '../components/Contact'
import '../styles/about.css'

export default function About() {
    return(
        <Layout>
            <div>
                <h1>About Page</h1>
                <br></br>
                <p>This a test project for interacting with the capabilities of Gatsby and React.</p>
                <p>I used the capabilities it has on constant and easy changes by giving .md files for user experimentation.</p>
                <p>I plan to expand it, as i explore more on it's uses.</p>
                <p>For any contacts, i leave my personal email.</p>
                <br>
                </br>
                <br></br>
                <Contact>
                </Contact>
            </div>
        </Layout>
    )
}