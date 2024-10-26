/**
 * 
 * Define home page!
 * 
**/
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import XLayout, { XLayoutGroup, XLayoutPane } from '../theme/XLayout';

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Documentation for all Ender.ing projects">

            <Head>
                <html lang="en" dir="ltr" translate="no" />
                <link rel="preconnect" href="https://resources.ender.ing" />
                <link rel="preconnect" href="https://resources.ender.ing" crossorigin />
                <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link rel="preconnect" href="https://www.googletagmanager.com" crossorigin />
            </Head>

            <XLayout>
                <XLayoutGroup>
                    <XLayoutPane view="full">
                        <h1>This is the temporary main docs page!</h1>
                        <br/>
                        <md-elevated-button href="/docs/old/intro">Old Docs</md-elevated-button> <br/>
                        <md-elevated-button href="/docs/contribution/intro">Contribution Docs</md-elevated-button> <br/>
                        <md-elevated-button href="/docs/omni-std1/intro">Omniarium Standard Edition 1.0 Docs</md-elevated-button> <br/>
                        <md-elevated-button href="/blog">Blog</md-elevated-button> <br/>
                    </XLayoutPane>
                </XLayoutGroup>
            </XLayout>
        </Layout>
    );
}
