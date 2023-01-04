import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../../components/Layout';

export default function GuitarShowcase() {
    return(
        <Layout>
            <div>
                <h1>Here is where my guitar showcase should be</h1>
                <p>I'll test on another project with new elemnts and then i'll complete this one</p>
            </div>
            <Link to="https://www.instagram.com/claudiorowe">Link to my instagram</Link>
        </Layout>
    )
}