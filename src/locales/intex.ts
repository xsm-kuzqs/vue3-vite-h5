import { createI18n } from 'vue-i18n';

// 语言文件
import en from './modules/en.json';
import zh from './modules/zh.json';

// 创建i18n实例
const i18n = createI18n({
  legacy: false, // 使用 Composition API
  locale: 'zh', // 默认语言
  messages: {
    en, // 英文语言包
    zh, // 中文语言包
  },
});

export default i18n;
