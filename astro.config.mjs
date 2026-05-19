// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // 1. 本番のURLを指定（サイトマップ生成に必須）
  site: 'https://secure-toolkit.com', 
  
  // 2. ── 💡 ここが超重要 ──
  // 本番URLを指定したことで頑固になったAstroに、
  // 「ローカルでは昨日までと同じようにスラッシュ止めで認識して！」と強制する設定です
  trailingSlash: 'always', 
  
  // 3. サイトマップ自動生成プラグインを起動
  integrations: [sitemap()],
});