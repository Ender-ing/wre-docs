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
                <link rel="preconnect" href="https://resources.ender.ing" crossorigin />
            </Head>
            <h1>This is the temporary main docs page!</h1>
            <br/>
            <md-elevated-button href="/docs/old/intro">Old Docs</md-elevated-button>
            <md-elevated-button href="/docs/omni/intro">Omniarium Docs</md-elevated-button>
            <md-elevated-button href="/docs/omni-std1/intro">Omniarium Standard Edition 1.0 Docs</md-elevated-button>
            <md-elevated-button href="/blog">Blog</md-elevated-button>
        </Layout>
    );
}


/*

<x-layout view="collapse" title="פעילות פריסה" description="זהו עמוד עם פריסה בסיסית!">
    <div slot="group" view="static sticky">
        <div class="x-layout-float">
            <h1>פעילות פריסה</h1><text>זהו עמוד עם פריסה בסיסית!</text>
        </div>
        <div class="x-layout-pane">
            [pane content]
        </div>
        <div class="x-layout-pane">
            [pane content]
        </div>
    </div>
    <div slot="group">
        <div view="full" class="x-layout-pane">
            [pane content]
        </div>
        <div style="height: 400px;" class="x-layout-pane">
            [pane content]
        </div>
    </div>
</x-layout>

<x-layout view="collapse">
    <div slot="group">
        <div view="full" class="x-layout-pane">
            [pane content]
        </div>
    </div>
</x-layout>
*/