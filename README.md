<div id="top"></div>

## 使用技術一覧

<div style="display: inline">
  <!-- フロントエンドのフレームワーク一覧 -->
  <a href="https://nodejs.org/ja">
  <img src="https://img.shields.io/badge/-Node.js-000000.svg?logo=node.js&style=for-the-badge">
  </a>
  <a href="https://astro.build/">
  <img src="https://img.shields.io/badge/-Astro-484A7A.svg?logo=astro&style=for-the-badge">
  </a>
</div>

#### 使用ライブラリ

<div>
  <!-- 使用ライブラリ -->
  <p><a href="https://preactjs.com/">Preact</a></p>
  <p><a href="https://github.com/jonasmerlin/astro-seo">astro-seo</a></p>
</div>


## 目次

1. [プロジェクトについて](#プロジェクトについて)
2. [環境](#環境)
3. [ディレクトリ構成](#ディレクトリ構成)
4. [開発環境構築](#開発環境構築)


## プロジェクトについて

<p align="right">(<a href="#top">トップへ</a>)</p>

<!-- プロジェクトの環境を記載 -->
### プロジェクトの概要

<p>
  このサイトはAstroの基本的な構文や使用方法を学習するために制作しました。<br />
  Astroの特徴である「アイランドアーキテクチャ」の考え方を理解し、今回はPreactを導入し動的な部分を学習しましたが、静的HTMLサイトでも効率的に開発できる方法について考察しながら知識を深めることができました。
</p>

### 苦労したところ


### 制作後の振り返り

<p>

</p>

## 環境

<!-- 言語、フレームワーク、ミドルウェア、インフラの一覧とバージョンを記載 -->

| 言語・フレームワーク | バージョン |
| -------------------- | ---------- |
| Node.js              | 18.20.4    |
| astro                | 5.5.3      |

その他のパッケージのバージョンは package.json を参照してください

<p align="right">(<a href="#top">トップへ</a>)</p>

## ディレクトリ構成

```
.
├── .gitignore
├── .prettierrc
├── README.md
├── astro.config.mjs
├── package-lock.json
├── package.json
├── src
│   ├── assets
│   │   ├── astro.svg
│   │   ├── background.svg
│   │   ├── js
│   │   └── styles
│   ├── components
│   │   ├── BlogPost.astro
│   │   ├── Footer.astro
│   │   ├── Greeting.tsx
│   │   ├── Hamburger.astro
│   │   ├── Header.astro
│   │   ├── Navigation.astro
│   │   └── Social.astro
│   ├── content.config.ts (コンテンツコレクション設定ファイル)
│   ├── layouts
│   │   ├── BaseLayout.astro (汎用レイアウト)
│   │   └── MarkDownPostLayout.astro (ブログの詳細ページ用レイアウト)
│   ├── pages
│   │   ├── about.astro
│   │   ├── blog.astro
│   │   ├── index.astro
│   │   ├── posts (コンテンツコレクションpostsの表示先)
│   │   └── tags
│   └── posts (コンテンツコレクション化したposts)
│       ├── post-1.md
│       ├── post-2.md
│       ├── post-3.md
│       ├── post-4.md
│       └── post-5.md
└── tsconfig.json
```

<p align="right">(<a href="#top">トップへ</a>)</p>

## 開発環境構築

### Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
