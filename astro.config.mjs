// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap'; // 1. インポートを追加

// https://astro.build/config
export default defineConfig({
  // 2. あなたの本番URLを必ず指定（末尾のスラッシュは無し）
  site: 'https://secure-toolkit.com', 
  
  // 3. 統合機能（integrations）の配列にsitemap()を追加
  integrations: [sitemap()],
});