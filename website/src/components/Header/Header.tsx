import React from 'react';
import { GoMarkGithub as GithubIcon } from 'react-icons/go';
import { HeaderWrap, HeaderLogoLink, HeaderGithubLink } from './Header.styles';
import { graphql, useStaticQuery } from 'gatsby';

export const Header: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          repository
        }
      }
    }
  `);

  const { title, repository } = data.site.siteMetadata;

  return (
    <HeaderWrap>
      <HeaderLogoLink to="/">{title}</HeaderLogoLink>
      <HeaderGithubLink href={repository} target="_blank">
        <GithubIcon />
      </HeaderGithubLink>
    </HeaderWrap>
  );
};
