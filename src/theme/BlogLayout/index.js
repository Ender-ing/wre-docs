import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';
import XLayout, { XLayoutGroup, XLayoutPane } from '../XLayout';
export default function BlogLayout(props) {
  const {sidebar, toc, children, ...layoutProps} = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;
  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg">
        <div className="row">
          <XLayout>
            <XLayoutGroup view="static sticky disappear-early">
              <XLayoutPane data-fix="width">
                <BlogSidebar sidebar={sidebar} />
              </XLayoutPane>
            </XLayoutGroup>
            <XLayoutGroup>
              {children}
            </XLayoutGroup>
            {toc && <div className="col col--2">{toc}</div>}
          </XLayout>
        </div>
      </div>
    </Layout>
  );
}
