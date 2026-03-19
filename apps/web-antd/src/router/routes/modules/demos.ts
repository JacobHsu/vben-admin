import type { RouteRecordRaw } from 'vue-router';

import { IFrameView } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'ic:baseline-view-in-ar',
      keepAlive: true,
      order: 100,
      title: $t('demos.title'),
    },
    name: 'Demos',
    path: '/demos',
    children: [
      {
        name: 'histock',
        path: '/demos/outside/iframe/histock',
        component: IFrameView,
        meta: {
          icon: 'devicon:codepen',
          iframeSrc: 'https://codepen.io/JacobHsu/full/WbNYVay',
          title: 'Stock Index',
        },
      },
      {
        name: 'stockworld',
        path: '/demos/outside/iframe/stockworld',
        component: IFrameView,
        meta: {
          icon: 'lucide:globe',
          iframeSrc: 'https://jacobhsu.github.io/stock-world-map',
          title: 'Stock World',
        },
      },
      {
        name: 'nstockheatmap',
        path: '/demos/outside/iframe/nstockheatmap',
        component: IFrameView,
        meta: {
          icon: 'tabler:chart-treemap',
          iframeSrc: 'https://www.nstock.tw/market_index/heatmap',
          title: 'Nstock Heatmap',
        },
      },
      {
        name: 'heatmap',
        path: '/demos/outside/iframe/twstock-heatmap',
        component: IFrameView,
        meta: {
          icon: 'tabler:chart-treemap',
          iframeSrc: 'https://jacobhsu.github.io/twstock-heatmap',
          title: 'heatmap',
        },
      },
      {
        name: 'industry',
        path: '/demos/outside/iframe/finlab',
        component: IFrameView,
        meta: {
          icon: 'devicon:minitab',
          iframeSrc: 'https://ai.finlab.tw/industry',
          title: 'industry',
        },
      },
      {
        name: 'day-trading',
        path: '/demos/outside/iframe/day-trading',
        component: IFrameView,
        meta: {
          icon: 'devicon:chrome',
          iframeSrc: 'https://histock.tw/stock/rank.aspx?m=4&d=0&t=dt',
          title: 'day-trading',
        },
      },
      {
        name: 'ranking',
        path: '/demos/outside/iframe/ranking',
        component: IFrameView,
        meta: {
          icon: 'devicon:chrome',
          iframeSrc: 'https://www.cnyes.com/twstock/ranking2.aspx',
          title: 'ranking',
        },
      },
      {
        name: 'shipping',
        path: '/demos/outside/iframe/shipping',
        component: IFrameView,
        meta: {
          icon: 'devicon:googlecloud',
          iframeSrc:
            'https://docs.google.com/spreadsheets/d/e/2PACX-1vQyuk30N4qW79BNOpBJrJYXuxc80L8Wsraj4JALpVlcg947Od4Yo1NJhYZTOkRMZxTbQOSIWKvuaZEs/pubhtml?gid=0&single=true',
          title: 'shipping',
        },
      },
      {
        name: 'twse',
        path: '/demos/outside/iframe/twse',
        component: IFrameView,
        meta: {
          icon: 'devicon:googlecloud',
          iframeSrc:
            'https://docs.google.com/spreadsheets/d/e/2PACX-1vTN9WgNr0blAuxt4eHenoVe7ea5gSSapy0JnNWQ1ymkTczwbvGO0xKgO51ouw6_pdoAT-cHR8CD6MuQ/pubhtml?gid=0&single=true',
          title: ' TWSE',
        },
      },
      {
        name: 'goodinfo',
        path: '/demos/outside/iframe/goodinfo',
        component: IFrameView,
        meta: {
          icon: 'lucide:percent',
          iframeSrc: 'https://jacobhsu.github.io/goodinfo-dividend',
          title: 'goodinfo',
        },
      },
      {
        name: 'stockreplay',
        path: '/demos/outside/iframe/stock-replay',
        component: IFrameView,
        meta: {
          icon: 'lucide:history',
          iframeSrc: 'https://stock-replay.vercel.app/',
          title: 'stockreplay',
        },
      },
    ],
  },
];

export default routes;
