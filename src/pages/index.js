/**
 * 
 * Define home page!
 * 
**/
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Documentation for all Ender.ing projects">
            <Head>
                <html lang="en" dir="ltr" translate="no" />
            </Head>
            <text>This is a temporary page!</text>
            <a href="/docs/old/intro">Old Docs</a>
            <a href="/docs/omni/intro">Omniarium Docs</a>
            <a href="/blog">Blog</a>
        </Layout>
    );
}
