import { css, Global } from '@emotion/core';
import React from 'react';
import { theme } from './Layout.styles';

/**
 * adapted from https://github.com/chakra-ui/chakra-ui/tree/master/packages/chakra-ui/src/CSSReset
 */
export const CSSPreflight = () => (
  <Global
    styles={css`
      /* stylelint-disable */
      html {
        font-family: ${theme.fonts.sansSerif};
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        box-sizing: border-box;
        overflow-y: scroll;
        font-size: 110%;
      }

      body {
        margin: 0;
        padding: 0;
        color: ${theme.colors.black};
        font-family: ${theme.fonts.sansSerif};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: normal;
        word-wrap: break-word;
        font-kerning: normal;
        -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
        -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
        -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
        font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      }

      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      main,
      menu,
      nav,
      section,
      summary {
        display: block;
      }

      audio,
      canvas,
      progress,
      video {
        display: inline-block;
      }

      audio:not([controls]) {
        display: none;
        height: 0;
      }

      progress {
        vertical-align: baseline;
      }

      [hidden],
      template {
        display: none;
      }

      a {
        background-color: transparent;
        -webkit-text-decoration-skip: objects;
      }

      a:active,
      a:hover {
        //outline-width: 0;
      }

      abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        text-decoration: underline dotted;
      }

      b,
      strong {
        font-weight: inherit;
        font-weight: bolder;
      }

      dfn {
        font-style: italic;
      }

      h1 {
        font-size: 2em;
        margin: 0.67em 0;
      }

      mark {
        background-color: #ff0;
        color: #000;
      }

      small {
        font-size: 80%;
      }

      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      sub {
        bottom: -0.25em;
      }

      sup {
        top: -0.5em;
      }

      img {
        border-style: none;
      }

      svg:not(:root) {
        overflow: hidden;
      }

      code,
      kbd,
      pre,
      samp {
        font-family: ${theme.fonts.monospace};
        font-size: 1em;
      }

      figure {
        margin: 1em 40px;
      }

      hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font: inherit;
        margin: 0;
      }

      optgroup {
        font-weight: 700;
      }

      button,
      input {
        overflow: visible;
      }

      button,
      select {
        text-transform: none;
      }

      [type='reset'],
      [type='submit'],
      button,
      html [type='button'] {
        -webkit-appearance: button;
      }

      [type='button']::-moz-focus-inner,
      [type='reset']::-moz-focus-inner,
      [type='submit']::-moz-focus-inner,
      button::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }

      [type='button']:-moz-focusring,
      [type='reset']:-moz-focusring,
      [type='submit']:-moz-focusring,
      button:-moz-focusring {
        outline: 1px dotted ButtonText;
      }

      fieldset {
        border: 1px solid silver;
        margin: 0 2px;
        padding: 0.35em 0.625em 0.75em;
      }

      legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      textarea {
        overflow: auto;
      }

      [type='checkbox'],
      [type='radio'] {
        box-sizing: border-box;
        padding: 0;
      }

      [type='number']::-webkit-inner-spin-button,
      [type='number']::-webkit-outer-spin-button {
        height: auto;
      }

      [type='search'] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      [type='search']::-webkit-search-cancel-button,
      [type='search']::-webkit-search-decoration {
        -webkit-appearance: none;
      }

      ::-webkit-input-placeholder {
        color: inherit;
        opacity: 0.54;
      }

      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }

      img {
        max-width: 100%;
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        color: inherit;
        font-weight: bold;
        font-family: inherit;
        text-rendering: optimizeLegibility;
        line-height: 1.1;
      }

      h1 {
        font-size: 2.25rem;
      }

      h2 {
        font-size: 1.62671rem;
      }

      h3 {
        font-size: 1.38316rem;
      }

      h4 {
        font-size: 1rem;
      }

      h5 {
        font-size: 0.85028rem;
      }

      h6 {
        font-size: 0.78405rem;
      }

      hgroup {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
      }

      ul,
      ol {
        margin-left: 1.45rem;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        list-style-position: outside;
        list-style-image: none;
      }

      dl,
      dd,
      p,
      figure,
      address,
      noscript,
      form,
      iframe,
      fieldset {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
      }

      pre {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        margin-bottom: 1.45rem;
        font-size: 0.85rem;
        line-height: 1.42;
        background: hsla(0, 0%, 0%, 0.04);
        border-radius: 3px;
        overflow: auto;
        word-wrap: normal;
        padding: 1.45rem;
      }

      table {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        font-size: 1rem;
        line-height: 1.45rem;
        border-collapse: collapse;
        width: 100%;
      }

      blockquote {
        margin-left: 1.45rem;
        margin-right: 1.45rem;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
      }

      hr {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: calc(1.45rem - 1px);
        background: hsla(0, 0%, 0%, 0.2);
        border: none;
        height: 1px;
      }

      b,
      strong {
        font-weight: bold;
      }

      dt {
        font-weight: bold;
      }

      th {
        font-weight: bold;
      }

      li {
        margin-bottom: calc(1.45rem / 2);
      }

      ol li {
        padding-left: 0;
      }

      ul li {
        padding-left: 0;
      }

      li > ol {
        margin-left: 1.45rem;
        margin-bottom: calc(1.45rem / 2);
        margin-top: calc(1.45rem / 2);
      }

      li > ul {
        margin-left: 1.45rem;
        margin-bottom: calc(1.45rem / 2);
        margin-top: calc(1.45rem / 2);
      }

      blockquote *:last-child {
        margin-bottom: 0;
      }

      li *:last-child {
        margin-bottom: 0;
      }

      p *:last-child {
        margin-bottom: 0;
      }

      li > p {
        margin-bottom: calc(1.45rem / 2);
      }

      code {
        font-size: 0.85rem;
        line-height: 1.45rem;
      }

      kbd {
        font-size: 0.85rem;
        line-height: 1.45rem;
      }

      samp {
        font-size: 0.85rem;
        line-height: 1.45rem;
      }

      abbr {
        border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
        cursor: help;
      }

      acronym {
        border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
        cursor: help;
      }

      abbr[title] {
        border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
        cursor: help;
        text-decoration: none;
      }

      thead {
        text-align: left;
      }

      td,
      th {
        text-align: left;
        border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
        font-feature-settings: 'tnum';
        -moz-font-feature-settings: 'tnum';
        -ms-font-feature-settings: 'tnum';
        -webkit-font-feature-settings: 'tnum';
        padding-left: 0.96667rem;
        padding-right: 0.96667rem;
        padding-top: 0.725rem;
        padding-bottom: calc(0.725rem - 1px);
      }

      th:first-of-type,
      td:first-of-type {
        padding-left: 0;
      }

      th:last-of-type,
      td:last-of-type {
        padding-right: 0;
      }

      tt,
      code {
        background-color: hsla(0, 0%, 0%, 0.04);
        border-radius: 3px;
        font-family: ${theme.fonts.monospace};
        padding: 0.2em 0;
      }

      pre code {
        background: none;
        line-height: 1.42;
      }

      code::before,
      code::after,
      tt::before,
      tt::after {
        letter-spacing: -0.2em;
        content: ' ';
      }

      pre code::before,
      pre code::after,
      pre tt::before,
      pre tt::after {
        content: '';
      }

      @media only screen and (max-width: 480px) {
        html {
          font-size: 80%;
        }
      }
    `}
  />
);
