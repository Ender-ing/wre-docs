// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import labels from './transformers/labels.js';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ender Documentation',
  tagline: 'Documentation for all Ender.ing projects!',
  favicon: 'brand/icons/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.ender.ing',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Ender-ing', // Usually your GitHub org/user name.
  projectName: 'Docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          showLastUpdateTime: true, 
          path: 'docs',
          editUrl:
          'https://github.com/Ender-ing/wre-docs/tree/main/',
          remarkPlugins: [
            labels,
          ],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Ender-ing/wre-docs/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {},
      footer: {},
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        defaultLanguage: "txt",
        additionalLanguages: ['batch', 'bash', 'json', 'markup'], // , 'omniarium'
      },
    }),

  plugins: [
    function githubProfilePlugin(context, options) {
      return {
        name: 'resize-profile-plugin',
        async postBuild({ siteConfig }) {
          const { downloadAndResizeGitHubImage } = require('./github/images.js');

          await downloadAndResizeGitHubImage(
            '0xENDER',
            './build/assets/images/0xENDER.png', // Save to static folder
            112,
            112
          );
        },
      };
    },
  ],

  scripts: [
    {
      src: '/assets/js/colors.js',
      async: true,
    },
    {
      src: 'https://resources.ender.ing/web/client/@material/docs.js',
      async: true,
    },
    {
      src: 'https://resources.ender.ing/web/client/material/colors.js',
      async: true,
    },
    {
      src: 'https://resources.ender.ing/web/client/@material/x-layouts.js',
      async: true,
    },
    {
      src: 'https://resources.ender.ing/web/client/@vite/tracking.js',
      async: true,
    },
  ],
  stylesheets: [
    {
      href: 'https://resources.ender.ing/web/client/material/colors.css',
    },
    {
      href: 'https://resources.ender.ing/web/client/material/theme.css',
    },
    {
      href: 'https://resources.ender.ing/web/client/material/layouts.css',
    },
    {
      href: 'https://resources.ender.ing/web/client/material/font.css',
    },
    {
      href: 'https://resources.ender.ing/web/client/material/icons.css',
    },
  ],
};

export default config;
