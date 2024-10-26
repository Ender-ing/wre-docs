import React, { useEffect } from 'react';
import Layout from '@theme-original/Layout';

export default function LayoutWrapper(props) {
  useEffect(() => {
    const refreshEvent = new Event('docusaurus-plugin-content-docs-refresh');
    document.dispatchEvent(refreshEvent);
  });
  return (
    <>
      <Layout {...props} />
    </>
  );
}
