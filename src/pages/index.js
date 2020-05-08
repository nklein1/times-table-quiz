import React from 'react';
import { Link } from 'gatsby';
// import Typography from '@material-ui/core/Typography';

import Layout from '../components/Layout/Layout';
import Quiz from '../components/Quiz/Quiz';
import SEO from '../components/seo';

const breadcrumbs = [
  { url: '/', title:'Aperturepedia' }
];

const IndexPage = (props) => (
  <Layout>
    <Quiz />
  </Layout>
)

export default IndexPage
