import React from 'react';

import Layout from '../components/Layout/Layout';
import Quiz from '../components/Quiz/Quiz';
import SEO from '../components/seo';

const IndexPage = (props) => (
  <Layout>
    <SEO title={'Learn to Multiply | Times Table Quiz'} pathname={props.path} />
    <Quiz />
  </Layout>
)

export default IndexPage
