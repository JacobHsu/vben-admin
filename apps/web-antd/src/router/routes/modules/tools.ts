import type { RouteRecordRaw } from 'vue-router';

import {
  GITHUB_URL,
  GITHUB_URL_CHROME_EXTENSIONS,
  GITHUB_URL_N8N,
  GITHUB_URL_PUPPETEER,
} from '@vben/constants';

import { IFrameView } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'ion:layers-outline',
      keepAlive: true,
      order: 1000,
      title: $t('examples.title'),
    },
    name: 'Examples',
    path: '/examples',
    children: [
      {
        name: 'Automa',
        path: '/vben-admin/automa',
        component: IFrameView,
        meta: {
          icon: 'mdi:github',
          link: GITHUB_URL,
          title: 'Automa',
        },
      },
      {
        name: 'Chrome extensions',
        path: '/vben-admin/github',
        component: IFrameView,
        meta: {
          icon: 'mdi:github',
          link: GITHUB_URL_CHROME_EXTENSIONS,
          title: 'Chrome extensions',
        },
      },
      {
        name: 'Puppeteer',
        path: '/vben-admin/puppeteer',
        component: IFrameView,
        meta: {
          icon: 'mdi:github',
          link: GITHUB_URL_PUPPETEER,
          title: 'Puppeteer',
        },
      },
      {
        name: 'N8N',
        path: '/vben-admin/n8n',
        component: IFrameView,
        meta: {
          icon: 'mdi:github',
          link: GITHUB_URL_N8N,
          title: 'n8n',
        },
      },
    ],
  },
];

export default routes;
