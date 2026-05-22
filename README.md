# 🪐 Self-Management Toolkit (Web Log & Tools)

このリポジトリは、現代人のための集中力・自己管理サポートサイト『Self-Management Toolkit』のフロントエンド（Astro）ソースコードです。

💡 **本番Webサイトはこちら:** [https://secure-toolkit.com/]

![Self-Management Toolkitの画面イメージ](./images/readme-thumb.png)


---

## 👁️ このプロジェクトについて

本サイトは、情報過多なAI時代において「強い脳」を目指すのではなく、ノイズを減らして「脳のコンディションを整える」ためのコンテンツと実用ツール（タイマー、Nバック計算ゲーム等）を提供する個人開発プロジェクトです。

### 🛠️ 技術スタンス & 構成
- **Framework:** Astro (Static Site Generator)
- **Comments & Reactions:** [giscus](https://giscus.app/) (GitHub Discussions連動型)
- **Styling:** Tailwind CSS / Custom CSS
- **Interactive Tools:** Unity (WebGL) / JavaScript

本リポジトリをパブリックにしている最大の理由は、**giscus（コメント欄）のバックエンドとしてGitHub Discussionsをフル活用するため**です。

---

## 🛡️ ライセンス・コードの利用について

本プロジェクトのソースコードおよびコンテンツは **MIT License** のもとで公開しています。

「大した技術でもないから公開してやるよ」というスタンスでオープンにしていますが、本サイトの真の価値は、このシステム構成そのものではなく、**「試行錯誤して紡いだ記事コンテンツ」**および**「埋め込まれたツールの触り心地」**にあります。

もしこの『Astro × giscus × 世界観』の構成や見せ方を参考にされる場合は、ぜひあなたのブログにgiscusを導入して、オープンソースコミュニティを一緒に盛り上げてください。

---

## 💬 フィードバックについて

当ブログの各記事下部にあるコメント欄は、このリポジトリの **Discussions** とリアルタイムに連動しています。
バグ報告、機能の要望、または「脳の整え方」に関する雑談などがあれば、本番サイトのコメント欄からでも、ここのDiscussionsからでも、GitHubアカウントでお気軽にリアクション・コメントをいただけると励みになります！

---

## 🧞 Local Development (Astro)

手元でプレビュー環境を動かすための基本コマンドです。

```sh
npm install      # 依存パッケージのインストール
npm run dev      # ローカルサーバー起動 (localhost:4321)
npm run build    # 本番用ビルド成果物を ./dist/ に出力