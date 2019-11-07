import React, { FC } from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';

interface NavigationSectionsInterface {
  className?: string;
  headline?: string;
  contents: NavItem[];
}

const NavigationSection: FC<NavigationSectionsInterface> = ({
  className,
  contents,
  headline,
}) =>
  contents.length > 0 ? (
    <section className={classNames('navigation__section', className)}>
      {headline && (
        <header className="navigation__section-header">{headline}</header>
      )}
      <ul className="navigation__list">
        {contents.map(({ id, name, relativeUrl }) => (
          <li key={id} className="navigation__item">
            <Link
              className="navigation__link"
              activeClassName="navigation__link--active"
              to={relativeUrl}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  ) : null;

interface NavigationProps {
  className?: string;
  items: NavTree;
}

export const Navigation: FC<NavigationProps> = ({ className, items }) => (
  <nav className={classNames('navigation', className)}>
    {Object.keys(items)
      .sort()
      .map(sectionName => (
        <NavigationSection
          key={`nav-${sectionName}`}
          headline={sectionName}
          contents={items[sectionName]}
        />
      ))}
  </nav>
);
