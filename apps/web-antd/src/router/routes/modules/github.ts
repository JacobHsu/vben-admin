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
      {
        name: 'StockWorldMap',
        path: '/vben-admin/stock-world-map',
        component: IFrameView,
        meta: {
          icon: 'mdi:github',
          link: 'https://github.com/JacobHsu/stock-world-map',
          title: 'Stock World Map',
        },
      },
      {
        name: 'GoodinfoDividend',
        path: '/vben-admin/goodinfo-dividend',
        component: IFrameView,
        meta: {
          icon: 'mdi:github',
          link: 'https://github.com/JacobHsu/goodinfo-dividend',
          title: 'Goodinfo Dividend',
        },
      },
      {
        name: 'GoodinfoXdXr',
        path: '/vben-admin/goodinfo-xd-xr',
        component: IFrameView,
        meta: {
          icon: 'mdi:github',
          link: 'https://github.com/JacobHsu/goodinfo-xd-xr',
          title: 'Goodinfo XD XR',
        },
      },
      {
        name: 'TwstockHeatmap',
        path: '/vben-admin/twstock-heatmap',
        component: IFrameView,
        meta: {
          icon: 'mdi:github',
          link: 'https://github.com/JacobHsu/twstock-heatmap',
          title: 'Twstock Heatmap',
        },
      },
    ],
  },
];

export default routes;
