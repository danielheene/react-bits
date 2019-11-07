/* eslint @typescript-eslint/no-explicit-any: off */

import React from 'react';
import styled from '@emotion/styled';
import { FiCode as CodeIcon, FiLink as LinkIcon } from 'react-icons/fi';

export const MarkdownContainer = styled.div<EmotionDefaults>`
  padding: 30px 40px;
  color: ${props => props.theme.colors.black};
  position: relative;
  box-sizing: content-box;
  max-width: 750px;
  margin: 0 auto;

  /* stylelint-disable plugin/no-unsupported-browser-features, no-descending-specificity */
  .gatsby-highlight {
    code[class*='language-'],
    pre[class*='language-'] {
      text-align: left;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      word-wrap: normal;
      color: #eee;
      background: #2f2f2f;
      font-family: Roboto Mono, monospace;
      font-size: 1em;
      line-height: 1.5em;

      -moz-tab-size: 4;
      -o-tab-size: 4;
      tab-size: 4;

      -webkit-hyphens: none;
      -moz-hyphens: none;
      -ms-hyphens: none;
      hyphens: none;
    }

    code[class*='language-']::-moz-selection,
    pre[class*='language-']::-moz-selection,
    code[class*='language-'] ::-moz-selection,
    pre[class*='language-'] ::-moz-selection {
      background: #363636;
    }

    code[class*='language-']::selection,
    pre[class*='language-']::selection,
    code[class*='language-'] ::selection,
    pre[class*='language-'] ::selection {
      background: #363636;
    }

    :not(pre) > code[class*='language-'] {
      white-space: normal;
      border-radius: 0.2em;
      padding: 0.1em;
    }

    pre[class*='language-'] {
      overflow: auto;
      position: relative;
      margin: 0.5em 0;
      padding: 1.25em 1em;
    }

    .language-css > code,
    .language-sass > code,
    .language-scss > code {
      color: #fd9170;
    }

    [class*='language-'] .namespace {
      opacity: 0.7;
    }

    .token.atrule {
      color: #c792ea;
    }

    .token.attr-name {
      color: #ffcb6b;
    }

    .token.attr-value {
      color: #a5e844;
    }

    .token.attribute {
      color: #a5e844;
    }

    .token.boolean {
      color: #c792ea;
    }

    .token.builtin {
      color: #ffcb6b;
    }

    .token.cdata {
      color: #80cbc4;
    }

    .token.char {
      color: #80cbc4;
    }

    .token.class {
      color: #ffcb6b;
    }

    .token.class-name {
      color: #f2ff00;
    }

    .token.comment {
      color: #616161;
    }

    .token.constant {
      color: #c792ea;
    }

    .token.deleted {
      color: #ff6666;
    }

    .token.doctype {
      color: #616161;
    }

    .token.entity {
      color: #ff6666;
    }

    .token.function {
      color: #c792ea;
    }

    .token.hexcode {
      color: #f2ff00;
    }

    .token.id {
      color: #c792ea;
      font-weight: bold;
    }

    .token.important {
      color: #c792ea;
      font-weight: bold;
    }

    .token.inserted {
      color: #80cbc4;
    }

    .token.keyword {
      color: #c792ea;
    }

    .token.number {
      color: #fd9170;
    }

    .token.operator {
      color: #89ddff;
    }

    .token.prolog {
      color: #616161;
    }

    .token.property {
      color: #80cbc4;
    }

    .token.pseudo-class {
      color: #a5e844;
    }

    .token.pseudo-element {
      color: #a5e844;
    }

    .token.punctuation {
      color: #89ddff;
    }

    .token.regex {
      color: #f2ff00;
    }

    .token.selector {
      color: #ff6666;
    }

    .token.string {
      color: #a5e844;
    }

    .token.symbol {
      color: #c792ea;
    }

    .token.tag {
      color: #ff6666;
    }

    .token.unit {
      color: #fd9170;
    }

    .token.url {
      color: #ff6666;
    }

    .token.variable {
      color: #ff6666;
    }
  }
  /* stylelint-enable */
`;

export const Blockquote = styled.blockquote<EmotionDefaults>`
  font-family: ${props => props.theme.fonts.sansSerif};
  font-style: italic;
  font-weight: 500;
  color: ${props => props.theme.colors.graphite};
  padding: 0 1em;
  border-left: 0.19em solid ${props => props.theme.colors.lightGray};
  margin: 1em 0;
`;

export const ExampleRenderer = styled.div<EmotionDefaults>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.03);
  background-color: rgba(0, 0, 0, 0.02);
  margin-bottom: 20px;
  border-radius: 5px;
  padding: 20px 15px;
`;

const HeadingAnchorLink = styled.a<EmotionDefaults>`
  display: inline-flex;
  color: inherit;
  position: absolute;
  justify-content: center;
  align-items: center;
  height: 1.7em;
  width: 1.7em;
  top: 50%;
  transform: translate(-100%, -50%);
  transition: opacity 100ms ease-in-out;
  font-size: 0.5em;

  svg {
    pointer-events: none;
    opacity: 0;
  }

  :focus svg {
    opacity: 1;
    pointer-events: auto;
  }
`;

const HeadingSourceLink = styled.a<EmotionDefaults>`
  font-size: 0.6em;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  align-items: center;
  justify-content: flex-end;
  text-decoration: none;
  display: inline-flex;
  color: inherit;
`;

const HeadingContainer = styled.h1<EmotionDefaults>`
  color: ${props => props.theme.colors.black};
  position: relative;
  margin-top: 0.5em;
  margin-bottom: 0.4em;
  padding: 0.2em 0;
  width: 100%;
  box-sizing: border-box;

  h1& {
    padding-right: 1em;
    margin-bottom: 0.7em;
    border-bottom: 1px solid ${props => props.theme.colors.lightGray};
  }

  :hover ${HeadingAnchorLink} svg {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const Heading = (tag: string, repositoryUrl?: string) => props => (
  <HeadingContainer as={tag} {...props}>
    <HeadingAnchorLink href={`#${props.id}`}>
      <LinkIcon />
    </HeadingAnchorLink>

    {props.children}

    {repositoryUrl && (
      <HeadingSourceLink href={repositoryUrl} target="_blank">
        <CodeIcon />
      </HeadingSourceLink>
    )}
  </HeadingContainer>
);
