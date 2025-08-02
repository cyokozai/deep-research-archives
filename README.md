# 深度研究アーカイブ (Deep Research Archives)

研究結果とアーカイブの集約サイト

## 概要

このサイトは、Astroフレームワークを使用して構築された研究結果の集約サイトです。これまでに作成した調査結果ページのアーカイブ一覧を表示し、個別の調査結果の詳細コンテンツを掲載します。

## 主な機能

- **ホームページ**: 研究結果アーカイブの一覧表示
- **研究結果ページ**: 個別の調査結果詳細（Markdown形式）
- **自動デプロイ**: GitHub Actions による GitHub Pages への自動公開
- **レスポンシブデザイン**: Tailwind CSS による美しいUI

## 技術スタック

- **フレームワーク**: [Astro](https://astro.build/)
- **スタイリング**: [Tailwind CSS](https://tailwindcss.com/)
- **ホスティング**: GitHub Pages
- **CI/CD**: GitHub Actions

## プロジェクト構造

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Header.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       └── research/
│           ├── research-result-1.md
│           └── research-result-2.md
├── .github/
│   └── workflows/
│       └── deploy.yml
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## ローカル開発

### 前提条件

- Node.js 18以上
- npm

### セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview
```

## 新しい研究結果の追加方法

### 1. ブランチの作成

```bash
git checkout -b add-new-research-page
```

### 2. Markdownファイルの作成

`src/pages/research/` ディレクトリに新しいMarkdownファイルを作成します。

```markdown
---
layout: ../../layouts/Layout.astro
title: "研究タイトル"
description: "研究の概要説明"
date: "2024-XX-XX"
tags: ["タグ1", "タグ2", "タグ3"]
---

# 研究タイトル

## 概要

研究内容をここに記述...
```

### 3. コミット・プッシュ

```bash
git add .
git commit -m "Add new research: [研究タイトル]"
git push origin add-new-research-page
```

### 4. プルリクエストの作成とマージ

GitHub上でプルリクエストを作成し、レビュー後にmainブランチへマージします。

### 5. 自動デプロイ

mainブランチへのマージをトリガーとして、GitHub Actionsが自動的に実行され、サイトが更新されます。

## サイトURL

本番サイト: https://cyokozai.github.io/deep-research-archives/

## ライセンス

MIT License

## 貢献

プルリクエストやイシューの作成を歓迎します。
