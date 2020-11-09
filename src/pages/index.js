import 'preact/debug';
import React from 'react';

import { TimerProvider } from '../utils/TimerContext';
import Layout from '../components/Layout/Layout';
import Quiz from '../components/Quiz/Quiz';
import SEO from '../components/seo';

const IndexPage = (props) => {
  const timerStatus = {
    isReset: true,
    isRunning: false,
    isComplete: false
  };

  return (
    <Layout>
      <SEO title={'Times Table Quiz'} pathname={props.path} />
      <TimerProvider value={timerStatus}>
        <Quiz />
      </TimerProvider>
    </Layout>
  )
}

export default IndexPage
