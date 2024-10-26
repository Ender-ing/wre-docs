import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import { XLayoutPane } from '../XLayout';

export default function BlogPostItemWrapper(props) {
  return (
    <XLayoutPane data-fix="width margin">
      <BlogPostItem {...props} />
    </XLayoutPane>
  );
}
