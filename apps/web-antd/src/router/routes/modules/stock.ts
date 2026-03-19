import type { RouteRecordRaw } from 'vue-router';

import { IFrameView } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'mdi:chart-line',
      keepAlive: true,
      order: 999,
      title: $t('page.stock.title'),
    },
    name: 'Stock',
    path: '/stock',
    children: [
      {
        name: 'OpenStock',
        path: '/demos/outside/iframe/usstock',
        component: IFrameView,
        meta: {
          icon: 'uis:chart',
          iframeSrc: 'https://next-open-stock.vercel.app/',
          title: 'OpenStock',
        },
      },
      {
        name: 'watchlist',
        path: '/demos/outside/iframe/watchlist',
        component: IFrameView,
        meta: {
          icon: 'uis:align-right',
          iframeSrc:
            'https://docs.google.com/spreadsheets/d/19rG_hVniPCcqaIU8RQA5lACPUDDNxn2qbdjUjAuRFak/edit?usp=sharing',
          title: ' Watchlist',
        },
      },
      {
        name: 'stockbot',
        path: '/demos/outside/iframe/stockbot',
        component: IFrameView,
        meta: {
          icon: 'hugeicons:chat-01',
          iframeSrc: 'https://stockbot-groq-chat.vercel.app/',
          title: 'stockbot',
        },
      },
      {
        name: 'daily-stock-analysis',
        path: '/demos/outside/iframe/daily-stock-analysis',
        component: IFrameView,
        meta: {
          icon: 'basil:chart-pie-solid',
          iframeSrc: 'https://jacobhsu.github.io/daily-stock-analysis',
          title: 'Stock Analysis',
        },
      },
      {
        name: 'rockflow',
        path: '/demos/outside/iframe/rockflow',
        component: IFrameView,
        meta: {
          icon: 'uil:chart-line',
          iframeSrc: 'https://rockalpha.rockflow.ai/',
          title: 'Rockflow',
        },
      },
    ],
  },
];

export default routes;
