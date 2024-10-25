import React, { useEffect } from 'react';
import clsx from 'clsx';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import {
  PageMetadata,
  SkipToContentFallbackId,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {useKeyboardNavigation} from '@docusaurus/theme-common/internal';
import SkipToContent from '@theme/SkipToContent';
import AnnouncementBar from '@theme/AnnouncementBar';
import Navbar from '@theme/Navbar';
import LayoutProvider from '@theme/Layout/Provider';
import ErrorPageContent from '@theme/ErrorPageContent';
// Refresh event!
export default function Layout(props) {
  const {
    children,
    wrapperClassName,
    // Not really layout-related, but kept for convenience/retro-compatibility
    title,
    description,
  } = props;
  useKeyboardNavigation();
  useEffect(() => {
    // Dispatch the event when the component mounts
    setTimeout(function(){
      const myEvent = new CustomEvent('docusaurus-plugin-content-docs-refresh', { detail: { message: true } });
      document.dispatchEvent(myEvent);
    }, 0);
  }, []);
  return (
    <LayoutProvider>
      <PageMetadata title={title} description={description} />

      <SkipToContent />

      <AnnouncementBar />

      <Navbar />

      <x-layout
        id={SkipToContentFallbackId}
        className={clsx(
          ThemeClassNames.wrapper.main,
          wrapperClassName,
        )}>
        <div slot="group">
          <div view="full" class="x-layout-pane">
            <ErrorBoundary fallback={(params) => <ErrorPageContent {...params} />}>
              {children}
            </ErrorBoundary>
            </div>
        </div>
      </x-layout>
    </LayoutProvider>
  );
}
