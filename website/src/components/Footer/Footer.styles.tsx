import styled from '@emotion/styled';

export const FooterContainer = styled.footer<EmotionDefaults>`
  grid-area: ${props => props.theme.layout.areas.footer};
  padding: 1.2rem 2rem;
  text-align: center;
`;

export const FooterLinkList = styled.ul<EmotionDefaults>`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin: 0;

  li {
    list-style: none;
    margin: 0;
    padding: 0;
    color: ${props => props.theme.colors.graphite};

    &:not(:last-of-type)::after {
      content: '•';
      padding: 0 0.5rem;
    }

    & + & {
      margin-left: 2rem;
    }

    & > a {
      color: inherit;
      text-decoration: none;
      font-family: ${props => props.theme.fonts.sansSerif};
      font-size: 0.8rem;
    }
  }
`;
