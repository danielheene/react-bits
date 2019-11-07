/* eslint @typescript-eslint/no-var-requires: off */
const path = require('path');
const _ = require('lodash');
const urlJoin = require('url-join');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  /**
   * Querying all mdx files inside the docs folder for building the documentation
   */
  const docs = await graphql(`
    query {
      allFile(
        filter: { extension: { eq: "mdx" }, sourceInstanceName: { eq: "docs" } }
      ) {
        nodes {
          name
          relativeDirectory
          sourceInstanceName
          mdx: childMdx {
            id
            frontmatter {
              name
              registryName
              repositoryUrl
              keywords
            }
          }
        }
      }
    }
  `);

  /**
   * Handle errors for
   */
  if (docs.errors) {
    reporter.panicOnBuild(
      'Error while running GraphQL query for fetching documentation files.',
      docs.errors
    );
  }

  /**
   * Strip "index" from url name generation: /docs/index --> /docs
   * @param {string} string
   * @returns {string}
   */
  const stripIndex = string => {
    if (!string || typeof string !== 'string')
      throw new Error('cannot strip index names from string');

    return string.trim().toLowerCase() === 'index' ? '' : string;
  };

  const docFiles = docs.data.allFile.nodes.map(node => ({
    id: _.get(node, 'mdx.id', null),
    filename: _.get(node, 'name', ''),
    category: _.get(node, 'relativeDirectory', ''),
    name: _.get(node, 'mdx.frontmatter.name', null),
    registryName: _.get(node, 'mdx.frontmatter.registryName', null),
    repositoryUrl: _.get(node, 'mdx.frontmatter.repositoryUrl', null),
    keywords: _.get(node, 'mdx.frontmatter.keywords', []),
    relativeUrl: urlJoin(
      '/',
      _.get(node, 'sourceInstanceName', ''),
      _.get(node, 'relativeDirectory', ''),
      stripIndex(node.name)
    ),
  }));

  /**
   * create documentation pages
   */
  docFiles.forEach(node => {
    createPage({
      path: node.relativeUrl,
      component: path.resolve('src/templates/docsTemplate.tsx'),
      context: {
        ...node,
        navItems: _.groupBy(docFiles, 'category'),
      },
    });
  });

  /**
   * Query CODE_OF_CONDUCT.md Content
   */
  const codeOfConduct = await graphql(`
    query {
      file(
        sourceInstanceName: { eq: "code-of-conduct" }
        name: { eq: "CODE_OF_CONDUCT" }
      ) {
        id
        mdx: childMdx {
          body
        }
      }
    }
  `);

  /**
   * Handle errors for
   */
  if (codeOfConduct.errors) {
    reporter.panicOnBuild(
      'Error while running GraphQL query for fetching documentation files.',
      docs.errors
    );
  }

  /**
   * Create code of conduct route
   */
  createPage({
    path: '/code-of-conduct',
    component: path.resolve('src/templates/mdxContentTemplate.tsx'),
    context: {
      body: codeOfConduct.data.file.mdx.body,
    },
  });
};
