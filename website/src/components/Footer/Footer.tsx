import React, { FC } from 'react';
import { FooterContainer, FooterLinkList } from './Footer.styles';
import { Link } from 'gatsby';

export const Footer: FC = () => (
  <FooterContainer>
    <FooterLinkList>
      <li>
        <Link to="/code-of-conduct">Code of Conduct</Link>
      </li>
    </FooterLinkList>
  </FooterContainer>
);
