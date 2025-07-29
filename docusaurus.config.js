// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MARS/WARS Docs',
  tagline: 'Documentation for the MARS/WARS robotics team',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://frc-team-4143.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'FRC-Team-4143', // Usually your GitHub org/user name.
  projectName: 'FRC-Team-4143.github.io', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    '@docusaurus/theme-mermaid'
  ],

  markdown: {
    mermaid: true,
  },

  // Plugins
  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ["en"],
        indexDocs: true,
        indexPages: true,
        docsRouteBasePath: '/docs',
        searchResultLimits: 8,
        searchResultContextMaxLength: 50,
        explicitSearchResultPath: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Set the color mode configuration
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true
      },
      // Setup the navbar with links to the sidebars
      // The sidebarId corresponds to the keys in sidebars.js
      // The label is what will be displayed in the navbar
      // The position can be 'left', 'right', or 'bottom'
      navbar: {
        title: 'Home',
        logo: {
          alt: 'MARS/WARS Logo',
          src: 'img/mw_logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'softwareSidebar',
            position: 'left',
            label: 'Software',
          },
          {
            type: 'docSidebar',
            sidebarId: 'designSidebar',
            position: 'left',
            label: 'Design',
          },
          {
            type: 'docSidebar',
            sidebarId: 'businessServicesSidebar',
            position: 'left',
            label: 'Business Services',
          },
          // adds sight seach to the navbar
          {
            type: 'search',
            position: 'right',
          },
          // GitHub link
          {
            href: 'https://github.com/FRC-Team-4143/FRC-Team-4143.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['git', 'java'],
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true, // Automatically collapse categories in the sidebar
          hideable: true, // Allow users to hide the sidebar
        },
      },
      mermaid: {
        theme: {light: 'base', dark: 'dark'},
      },
    }),
};

export default config;
