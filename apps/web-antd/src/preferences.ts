import { defineOverridesPreferences } from '@vben/preferences';

/**
 * @description 專案配置檔
 * 只需覆蓋部分配置，未覆蓋的項目會自動使用預設值。
 * !!! 變更配置後請清除快取，否則可能不會生效。
 *
 * 優先級說明：overridesPreferences > localStorage 快取 > config.ts 預設值
 * 合併函式使用 defu（先傳入的值優先），因此：
 *   - config.ts 的 defaultPreferences 優先級最低，會被快取覆蓋
 *   - 此處的 overridesPreferences 優先級最高，不受快取影響，確保設定值生效
 * 結論：需要強制套用的設定（如 defaultAvatar、locale）必須放在此處
 */
export const overridesPreferences = defineOverridesPreferences({
  app: {
    // 預設頭像：放在 overrides 才能蓋過 localStorage 快取
    defaultAvatar: '/maneki-neko.png',
    // 登入後預設首頁
    defaultHomePath: '/demos',
    // 預設語系：強制使用繁體中文
    locale: 'zh-TW',
    name: import.meta.env.VITE_APP_TITLE,
  },
});
