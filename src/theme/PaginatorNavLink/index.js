import React from 'react';
import PaginatorNavLink from '@theme-original/PaginatorNavLink';
import clsx from 'clsx';

export default function PaginatorNavLinkWrapper(props) {
  return (
    <div className={clsx("page-navigation-wrapper",
          (props.isNext) ? "pagination-nav__link--next next-navigation-wrapper-fix" :
            "pagination-nav__link--prev prev-navigation-wrapper-fix"
        )}>
      <md-ripple aria-hidden="true"></md-ripple>
      <PaginatorNavLink {...props} />
    </div>
  );
}
