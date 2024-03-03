import { Metadata, Viewport } from 'next';

import packageJson from '../package.json';

export type SiteConfig = typeof siteConfig;

const favicon = packageJson.icon;

export const siteConfig: {
  metadata: Metadata;
  viewport: Viewport;
} = {
  metadata: {
    title: {
      default: packageJson.name.toUpperCase(),
      template: `%s - ${packageJson.name.toUpperCase()}`,
    },

    description: packageJson.description,
    icons: {
      icon: favicon,
      shortcut: favicon,
      apple: favicon,
    },
  },
  viewport: {
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: 'white' },
      { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
  },
};
