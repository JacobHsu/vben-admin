import type { RouteRecordRaw } from 'vue-router';

import { IFrameView } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'lineicons:btc',
      keepAlive: true,
      order: 1000,
      title: $t('page.crypto.title'),
    },
    name: 'Crypto',
    path: '/crypto',
    children: [
      {
        name: 'BTC',
        path: '/demos/outside/iframe/btc',
        component: IFrameView,
        meta: {
          icon: 'cryptocurrency:btc',
          iframeSrc: 'https://jacobhsu.github.io/crypto-watch/btc',
          title: 'BTC',
        },
      },
      {
        name: 'ETH',
        path: '/demos/outside/iframe/eth',
        component: IFrameView,
        meta: {
          icon: 'cryptocurrency:eth',
          iframeSrc: 'https://jacobhsu.github.io/crypto-watch/eth',
          title: 'ETH',
        },
      },
      {
        name: 'CryptoWatchEma',
        path: '/demos/outside/iframe/cryptowatchema',
        component: IFrameView,
        meta: {
          icon: 'la:chart-line',
          iframeSrc: 'https://jacobhsu.github.io/crypto-watch/ema',
          title: 'Crypto Watch EMA',
        },
      },
      {
        name: 'TradingviewSignal',
        path: '/demos/outside/iframe/signal',
        component: IFrameView,
        meta: {
          icon: 'material-symbols:cardiology-rounded',
          iframeSrc: 'https://crypto-tv-signal.lovable.app/',
          title: 'Tv Signal',
        },
      },
      {
        name: 'OpenStockCrypto',
        path: '/demos/outside/iframe/usstockcrypto',
        component: IFrameView,
        meta: {
          icon: 'uis:chart',
          iframeSrc: 'https://next-open-stock.vercel.app/crypto',
          title: 'OpenStockCrypto',
        },
      },
      {
        name: 'TvWidgetsDemo',
        path: '/crypto/outside/iframe/tvwidgets',
        component: IFrameView,
        meta: {
          icon: 'cryptocurrency:chain',
          iframeSrc: 'https://jacobhsu.github.io/tradingview-widgets',
          title: 'widgets',
        },
      },
      {
        name: 'Polymarket',
        path: '/crypto/outside/iframe/polymarket',
        component: IFrameView,
        meta: {
          icon: 'solar:chart-2-bold-duotone',
          iframeSrc: 'https://v0-crypto-currency-calendar.vercel.app/',
          title: 'Polymarket',
        },
      },
      {
        name: 'rainbow',
        path: '/crypto/outside/iframe/rainbow',
        component: IFrameView,
        meta: {
          icon: 'emojione:rainbow',
          iframeSrc: 'https://charts.bitbo.io/rainbow/',
          title: 'Rainbow Chart',
        },
      },
      {
        name: 'Weekly Calendar',
        path: '/crypto/outside/iframe/calendar',
        component: IFrameView,
        meta: {
          icon: 'ic:baseline-calendar-month',
          iframeSrc: 'https://crypto-weekly-calendar.lovable.app/',
          title: 'Weekly Calendar',
        },
      },
      {
        name: 'Daily Chart',
        path: '/crypto/outside/iframe/dailychart',
        component: IFrameView,
        meta: {
          icon: 'mdi:finance',
          iframeSrc: 'https://crypto-daily-log.lovable.app/',
          title: 'Daily Chart',
        },
      },
      {
        name: 'Maxpain',
        path: '/crypto/outside/iframe/maxpain',
        component: IFrameView,
        meta: {
          icon: 'https://cdn.coinglasscdn.com/static/icon_200.png',
          iframeSrc: 'https://www.coinglass.com/zh-TW/liquidation-maxpain',
          title: 'Maxpain',
        },
      },
      {
        name: 'Mergev2',
        path: '/crypto/outside/iframe/mergev2',
        component: IFrameView,
        meta: {
          icon: 'https://cdn.coinglasscdn.com/static/icon_200.png',
          iframeSrc: 'https://www.coinglass.com/zh-TW/mergev2/BTC-USDT',
          title: 'Mergev2',
        },
      },
      {
        name: 'Coinglass',
        path: '/crypto/outside/iframe/coinglass',
        component: IFrameView,
        meta: {
          icon: 'https://cdn.coinglasscdn.com/static/icon_200.png',
          iframeSrc: 'https://www.coinglass.com/tv/zh-TW/Binance_ETHUSDT',
          title: 'Coinglass',
        },
      },
    ],
  },
];

export default routes;
