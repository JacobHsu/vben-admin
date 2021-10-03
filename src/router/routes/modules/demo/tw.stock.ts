import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
const IFrame = () => import('/@/views/sys/iframe/FrameBlank.vue');

const system: AppRouteModule = {
  path: '/twstock',
  name: 'TWstock',
  component: LAYOUT,
  redirect: '/twstock/shipping',
  meta: {
    icon: 'ion:bar-chart',
    title: t('routes.demo.stock.title'),
  },
  children: [
    {
      path: 'shipping-volume',
      name: 'shippingvolume',
      component: IFrame,
      meta: {
        frameSrc: 'https://www.cmoney.tw/finance/f00010.aspx',
        title: t('routes.demo.stock.shippingvolume'),
      },
    },
    {
      path: 'kospi',
      name: 'KOSPI',
      component: IFrame,
      meta: {
        frameSrc: 'https://www.cnyes.com/global/astock/html5chart.aspx?area=KR&code=KOSPI',
        title: t('routes.demo.stock.kospi'),
      },
    },
    {
      path: 'us-dollar-index',
      name: 'dxy',
      component: IFrame,
      meta: {
        frameSrc: 'https://www.cnyes.com/futures/html5chart/DX.html',
        title: t('routes.demo.stock.dxy'),
      },
    },
    {
      path: 'trust',
      name: 'trust',
      component: IFrame,
      meta: {
        frameSrc: 'http://fubon-ebrokerdj.fbs.com.tw/Z/ZK/ZK0/ZKmain_4_4.djhtm',
        title: t('routes.demo.stock.trust'),
      },
    },
    {
      path: 'shipping',
      name: 'shipping',
      component: IFrame,
      meta: {
        frameSrc:
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vQyuk30N4qW79BNOpBJrJYXuxc80L8Wsraj4JALpVlcg947Od4Yo1NJhYZTOkRMZxTbQOSIWKvuaZEs/pubhtml?gid=0&single=true',
        title: t('routes.demo.stock.shipping'),
      },
    },
    {
      path: 'plastics',
      name: 'plastics',
      component: IFrame,
      meta: {
        frameSrc:
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vQyuk30N4qW79BNOpBJrJYXuxc80L8Wsraj4JALpVlcg947Od4Yo1NJhYZTOkRMZxTbQOSIWKvuaZEs/pubhtml?gid=2054590742&single=true',
        title: t('routes.demo.stock.plastics'),
      },
    },
    {
      path: 'steel',
      name: 'steel',
      component: IFrame,
      meta: {
        frameSrc:
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vQyuk30N4qW79BNOpBJrJYXuxc80L8Wsraj4JALpVlcg947Od4Yo1NJhYZTOkRMZxTbQOSIWKvuaZEs/pubhtml?gid=877667636&single=true',
        title: t('routes.demo.stock.steel'),
      },
    },
    {
      path: 'health',
      name: 'health',
      component: IFrame,
      meta: {
        frameSrc:
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vQyuk30N4qW79BNOpBJrJYXuxc80L8Wsraj4JALpVlcg947Od4Yo1NJhYZTOkRMZxTbQOSIWKvuaZEs/pubhtml?gid=644147855&single=true',
        title: t('routes.demo.stock.health'),
      },
    },
    {
      path: 'electronics',
      name: 'electronics',
      component: IFrame,
      meta: {
        frameSrc:
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vQyuk30N4qW79BNOpBJrJYXuxc80L8Wsraj4JALpVlcg947Od4Yo1NJhYZTOkRMZxTbQOSIWKvuaZEs/pubhtml?gid=1474372627&single=true',
        title: t('routes.demo.stock.electronics'),
      },
    },
  ],
};

export default system;
