import React from 'react';
import { Layout } from '../components/Layout';
import { Markdown } from '../components/Markdown';

// eslint-disable-next-line react/display-name
export default ({ pageContext }) => (
  <Layout>
    <Markdown>{pageContext.body}</Markdown>
  </Layout>
);
