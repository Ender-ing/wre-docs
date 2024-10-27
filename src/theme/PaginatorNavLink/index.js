import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
export default function PaginatorNavLink(props) {
  const {permalink, title, subLabel, isNext} = props;
  return (
    <x-effect
      list="ripple elevation focus"
      class={clsx("page-navigation-wrapper",
      (props.isNext) ? "pagination-nav__link--next next-navigation-wrapper-fix" :
        "pagination-nav__link--prev prev-navigation-wrapper-fix"
      )}>
      <Link
        slot="child"
        className={clsx(
          'pagination-nav__link',
          isNext ? 'pagination-nav__link--next' : 'pagination-nav__link--prev',
        )}
        to={permalink}>
        {subLabel && <div className="pagination-nav__sublabel">{subLabel}</div>}
        <div className="pagination-nav__label">{title}</div>
      </Link>
    </x-effect>
  );
}
