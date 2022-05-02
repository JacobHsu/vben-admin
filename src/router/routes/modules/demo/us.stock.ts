import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
const IFrame = () => import('/@/views/sys/iframe/FrameBlank.vue');

const system: AppRouteModule = {
  path: '/usstock',
  name: 'USstock',
  component: LAYOUT,
  redirect: '/usstock/global',
  meta: {
    icon: 'ion:bar-chart',
    title: t('routes.demo.stock.stock'),
  },
  children: [
    {
      path: 'tradingview',
      name: 'tradingview',
      component: IFrame,
      meta: {
        frameSrc: 'https://jacobhsu.github.io/vue-tradingview-widget/',
        title: t('routes.demo.stock.tradingview'),
      },
    },
    {
      path: 'studies',
      name: 'studies',
      component: IFrame,
      meta: {
        frameSrc: 'https://jacobhsu.github.io/stock-klinechart/',
        title: t('routes.demo.stock.studies'),
      },
    },
    {
      path: 'global',
      name: 'global',
      component: IFrame,
      meta: {
        frameSrc:
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vR6c1SvfY7lfJEI-Aw6M7G_w2dVCZlyhGaFkzWBqYjdhaprSzuIqC4za97hXTw4ouqQyDckBOp38NHt/pubhtml?gid=1851070294&single=true',
        title: t('routes.demo.stock.global'),
      },
    },
    {
      path: 'balanced',
      name: 'balanced',
      component: IFrame,
      meta: {
        frameSrc:
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vR6c1SvfY7lfJEI-Aw6M7G_w2dVCZlyhGaFkzWBqYjdhaprSzuIqC4za97hXTw4ouqQyDckBOp38NHt/pubhtml?gid=221838752&single=true',
        title: t('routes.demo.stock.balanced'),
      },
    },
    {
      path: 'ark',
      name: 'ark',
      component: IFrame,
      meta: {
        frameSrc:
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vR6c1SvfY7lfJEI-Aw6M7G_w2dVCZlyhGaFkzWBqYjdhaprSzuIqC4za97hXTw4ouqQyDckBOp38NHt/pubhtml?gid=1960768263&single=true',
        title: t('routes.demo.stock.ark'),
      },
    },
  ],
};

export default system;
