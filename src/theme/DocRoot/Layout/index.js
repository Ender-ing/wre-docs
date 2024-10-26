import React, {useState} from 'react';
import {useDocsSidebar} from '@docusaurus/plugin-content-docs/client';
import BackToTopButton from '@theme/BackToTopButton';
import DocRootLayoutSidebar from '@theme/DocRoot/Layout/Sidebar';
import DocRootLayoutMain from '@theme/DocRoot/Layout/Main';
import styles from './styles.module.css';
import XLayout, { XLayoutGroup, XLayoutPane } from '../../XLayout';
export default function DocRootLayout({children}) {
  const sidebar = useDocsSidebar();
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
  return (
    <div className={styles.docsWrapper}>
      <BackToTopButton />
      <XLayout className={styles.docRoot}>
        {sidebar && (
          <XLayoutGroup view="static sticky disappear-early">
            <XLayoutPane>
              <DocRootLayoutSidebar
                sidebar={sidebar.items}
                hiddenSidebarContainer={hiddenSidebarContainer}
                setHiddenSidebarContainer={setHiddenSidebarContainer}
              />
            </XLayoutPane>
          </XLayoutGroup>
        )}
        <XLayoutGroup>
          <XLayoutPane view="full" data-fix="width">
            <DocRootLayoutMain hiddenSidebarContainer={hiddenSidebarContainer}>
              {children}
            </DocRootLayoutMain>
          </XLayoutPane>
        </XLayoutGroup>
      </XLayout>
    </div>
  );
}
