import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Layout } from '../components/Layout';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { CenteredWrap } from '../components/Wrapper';
import {
  GoMarkGithub as GithubIcon,
  GoChevronRight as ChevronIcon,
} from 'react-icons/go';

const Headline = styled.h1`
  width: 100%;
  font-weight: 600;
  text-align: center;
`;

const HeadlineAccent = styled.span<EmotionDefaults>`
  color: ${props => props.theme.colors.primary};
`;

export const CenteredContainer = styled.div<EmotionDefaults>`
  display: flex;
  flex-direction: column;
  width: 600px;
  max-width: 100%;
  margin: 0 1rem 2rem 1rem;
`;

const Button = styled('a', {
  shouldForwardProp: prop => isPropValid(prop),
})<
  EmotionDefaults & {
    primary?: boolean;
    iconLeft?: boolean;
    iconRight?: boolean;
  }
>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  color: ${props =>
    props.primary ? props.theme.colors.white : props.theme.colors.black};
  background-color: ${props =>
    props.primary ? props.theme.colors.primary : props.theme.colors.lightGray};
  font-size: 1.4rem;
  letter-spacing: -0.05em;
  font-weight: 500;
  line-height: 1.2;
  border-radius: 5px;
  padding: 0.5em 1.2em;
  border: none;
  cursor: pointer;
  width: 100%;
  text-decoration: none;
  transition: background-color 150ms ease-in-out;

  &:not(:last-child) {
    margin-bottom: 0.5em;
  }

  @media (min-width: ${props => props.theme.breakpoint.small}) {
    margin: 0 auto;
    width: auto;

    &:not(:last-child) {
      margin-right: 2em;
      margin-bottom: 0;
    }
  }

  &:hover {
    background-color: ${props =>
      props.primary
        ? props.theme.colors.primaryDark
        : props.theme.colors.mediumGray};
  }

  svg {
    line-height: 0;
    margin-left: ${props => (props.iconRight ? '0.3em' : 0)};
    margin-right: ${props => (props.iconLeft ? '0.3em' : 0)};
  }
`;

const ButtonBar = styled.div<EmotionDefaults>`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  justify-content: center;
  align-items: center;

  @media (min-width: ${props => props.theme.breakpoint.small}) {
    margin: 0 auto;
    flex-direction: row;
  }
`;

const ButtonLink = Button.withComponent(Link);

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      site {
        siteMetadata {
          repository
        }
      }
    }
  `);

  return (
    <Layout>
      <CenteredWrap>
        <CenteredContainer>
          <Headline>
            A collection of{' '}
            <HeadlineAccent>accessible React components,</HeadlineAccent> hooks
            and tools.
          </Headline>
          <ButtonBar>
            <ButtonLink to="/docs" primary iconRight>
              Get Started
              <ChevronIcon />
            </ButtonLink>
            <Button
              target="_blank"
              href={data.site.siteMetadata.repository}
              iconLeft
            >
              <GithubIcon />
              GitHub
            </Button>
          </ButtonBar>
        </CenteredContainer>
      </CenteredWrap>
    </Layout>
  );
}
