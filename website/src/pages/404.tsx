import React from 'react';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { CenteredWrap } from '../components/Wrapper';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <CenteredWrap>
      <h1>NOT FOUND 😥</h1>
      <p>You just hit a route that doe not exist... the sadness.</p>
    </CenteredWrap>
    <h1>NOT FOUND</h1>
  </Layout>
);

export default NotFoundPage;
