import React, { useEffect } from 'react';
import Layout from '@theme-original/Layout';

export default function LayoutWrapper(props) {
  useEffect(() => {
    // Dispatch the event when the component mounts
    const refreshEvent = new CustomEvent('docusaurus-plugin-content-docs-refresh', { detail: { message: true } });
    document.dispatchEvent(refreshEvent);
  }, []);
  return (
    <x-layout>
      <div slot="group">
        <div view="full" class="x-layout-pane">
          <Layout {...props} />
        </div>
      </div>
    </x-layout>
  );
}
