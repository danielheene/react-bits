import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const HeaderWrap = styled.header<EmotionDefaults>`
  grid-area: ${props => props.theme.layout.areas.header};
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  padding: 15px 1em;
`;

export const HeaderLogoLink = styled(Link)<EmotionDefaults>`
  font-size: 1.2em;
  line-height: 1;
  font-weight: bold;
  font-family: ${props => props.theme.fonts.monospace};
  color: ${props => props.theme.colors.white};
  text-decoration: none;
`;

export const HeaderGithubLink = styled.a<EmotionDefaults>`
  display: block;
  font-size: 1.4em;
  color: ${props => props.theme.colors.white};
  text-decoration: none;

  svg {
    display: block;
  }
`;
