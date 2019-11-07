import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import { Markdown } from '../components/Markdown';

// eslint-disable-next-line react/display-name
export default ({ data, pageContext }) => {
  const { navItems, repositoryUrl } = pageContext;

  return (
    <Layout navItems={navItems}>
      <Markdown repositoryUrl={repositoryUrl}>{data.mdx.body}</Markdown>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      body
    }
  }
`;
