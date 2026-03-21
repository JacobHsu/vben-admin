import type { RouteRecordRaw } from 'vue-router';

import { IFrameView } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'mdi:github',
      keepAlive: true,
      order: 1000,
      title: $t('source.title'),
    },
    name: 'Source',
    path: '/source',
    children: [
      {
        name: 'GithubOpenStock',
        path: '/vben-admin/openstock',
        component: IFrameView,
        meta: {
          icon: 'mdi:github',
          link: 'https://github.com/JacobHsu/next-open-stock',
          title: 'OpenStock',
        },
      },
      {
        name: 'CryptoWatch',
        path: '/vben-admin/cryptowatch',
        component: IFrameView,
        meta: {
          icon: 'mdi:github',
          link: 'https://github.com/JacobHsu/crypto-watch',
          title: 'CryptoWatch',
        },
      },
      {
        name: 'StockReplay',
        path: '/vben-admin/stockreplay',
        component: IFrameView,
        meta: {
          icon: 'mdi:github',
          link: 'https://github.com/JacobHsu/stock-replay',
          title: 'StockReplay',
        },
      },
    ],
  },
];

export default routes;
