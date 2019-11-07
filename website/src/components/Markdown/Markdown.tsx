import React, { FC } from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import {
  Blockquote,
  Heading,
  ExampleRenderer,
  MarkdownContainer,
} from './Markdown.styles';

interface MarkdownProps {
  children: string;
  repositoryUrl?: string;
}

export const Markdown: FC<MarkdownProps> = ({ children, repositoryUrl }) => {
  const components = {
    h1: Heading('h1', repositoryUrl),
    h2: Heading('h2'),
    h3: Heading('h3'),
    h4: Heading('h4'),
    h5: Heading('h5'),
    h6: Heading('h6'),
    example: ExampleRenderer,
    blockquote: Blockquote,
  };

  return (
    <MarkdownContainer>
      <MDXProvider components={components}>
        <MDXRenderer>{children}</MDXRenderer>
      </MDXProvider>
    </MarkdownContainer>
  );
};
