import fs from 'fs';
import path from 'path';

// ─── 【設定値】ここだけご自身の環境に書き換えてください ───
const SITE_URL = 'https://secure-toolkit.com'; 
const API_KEY = '66ade9906a044 b79bb 146 74 aa 663beb'; 
// ────────────────────────────────────────────────────────

const ENDPOINT = 'https://www.bing.com/indexnow';
const SITEMAP_PATH = path.join(process.cwd(), 'dist', 'sitemap.xml'); // ビルド後のサイトマップ

async function notifyIndexNow() {
  try {
    // 1. ビルドされたsitemapからURLを自動抽出（今回の新着記事を拾うため）
    if (!fs.existsSync(SITEMAP_PATH)) {
      console.log('⚠️ sitemap.xml が見つからないため、IndexNowをスキップします。');
      return;
    }
    const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf8');
    const urls = [...sitemapContent.matchAll(/<loc>(文字化け対策含むURL?)<\/loc>/g)].map(m => m[1]);

    if (urls.length === 0) return;

    // 2. BingのAPIにPOSTリクエストを送信
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: SITE_URL.replace('https://', ''),
        key: API_KEY,
        keyLocation: `${SITE_URL}/${API_KEY}.txt`,
        urlList: urls // サイト内の全URL（または新着）をまとめて送信
      })
    });

    if (response.ok) {
      console.log(`🚀 [IndexNow] ${urls.length}件のURLをBingに自動送信しました！`);
    } else {
      console.error('❌ [IndexNow] 送信に失敗しました:', response.statusText);
    }
  } catch (error) {
    console.error('❌ [IndexNow] エラーが発生しました:', error);
  }
}

notifyIndexNow();