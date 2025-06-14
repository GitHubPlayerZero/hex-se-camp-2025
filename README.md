# 切版作品：個人品牌網站

[Website](https://githubplayerzero.github.io/personal-branding-website-hand/)｜[設計稿](https://www.figma.com/design/bBHUp0TeM0yjAlkjtyxQJI/2025ver.-%E9%AB%94%E9%A9%97%E7%87%9F%E5%AD%B8%E7%94%9F%E8%A8%AD%E8%A8%88%E7%A8%BF?node-id=236-2560&t=v1syAvWmH6CuCvBu-0)

## 📌 特色
- 以 SCSS 手刻格線系統、各種 utility class。
- 以 [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass) 將 SCSS 編譯成 CSS 直接使用。
- 使用 [Swiper](https://swiperjs.com/) 製作首頁「[部落格精選](https://githubplayerzero.github.io/personal-branding-website-hand/#blogFeatures)」文章切換。
- 加入 [GA](https://developers.google.com/analytics?hl=zh-tw) 分析。
- 多頁式（3 頁）。
- 多欄式（Flex 排版）。
- RWD：手機（優先）、平板、桌機。
- 風格：原子化（utility），客製化（語意化）、components（元件化）。
<br>

## 💻 專案結構重點說明
- 📂 assets：靜態資源
    - 📁 images：圖片
    - 📁 js：JavaScript
      - 📄 `swiperBlog.js`：用於首頁「部落格精選」文章切換的 Swiper JS。
      - 📄 `ga.js`：自定義的 GA 事件。
    - 📁 scss：SCSS
        - 📁 base：基本樣式設定
          - 📄 `_reset.scss`：樣式清除（meyerweb）
          - 📄 `_base.scss`：此專案的全站樣式
          - 📄 `_variables.scss`：全局變數
        - 📁 components：共用元件樣式
          - 📄 `_swiper-blog.scss`：用於首頁「部落格精選」文章切換的 Swiper CSS。
          - 📄 其它...
        - 📁 content：有關內容排版的樣式
        - 📁 layout：專門處理佈局的樣式
          - 📄 `_container.scss`：container 容器相關樣式設定（含 RWD）。
          - 📄 `_grid.scss`：格線系統樣式設定（含 RWD）。
        - 📁 functions：共用 function
        - 📁 mixins：共用 mixin
        - 📁 pages：各頁面客製化樣式
        - 📁 utils：各種 utility 樣式
        - 📚 all.scss：樣式主檔，匯入所有需要共用的樣式
- 📁 css：存放編譯出來的 CSS 及其 map 檔案。
- 📄 `index.html`：首頁
- 📄 `blog_list.html`：部落格（文章列表）頁
- 📄 `blog_article.html`：部落格（文章內容）頁

<br>

## 🎬 Demo
### 手機
- 首頁

[mobile_index.webm](https://github.com/user-attachments/assets/9ee39d64-f514-41b6-8426-5d405d3334c2)

- 部落格（文章列表）頁

[mobile_blog_list.webm](https://github.com/user-attachments/assets/fb3ac3a7-da47-4567-bdc4-c63c55215506)

- 部落格（文章內容）頁

[mobile_blog.webm](https://github.com/user-attachments/assets/69ce698d-b577-486c-bc95-aa38089d4943)

<br>

### 桌機
- 首頁

[dt_index.webm](https://github.com/user-attachments/assets/3ee128b9-187f-4049-ad43-31d0400897d8)

- 部落格（文章列表）頁

[dt_blog_list.webm](https://github.com/user-attachments/assets/dd233874-7f78-44fe-b7e4-570adc29559f)

- 部落格（文章內容）頁

[dt_blog.webm](https://github.com/user-attachments/assets/b0e41b06-9ffe-4098-bb0b-419c8ee4d6bc)

<br>

## ⚔️ 相關技巧練習範例
- [使用負數的 margin 疊圖層](https://codepen.io/codepenplayer/pen/wBBNpdX)
- Swiper
  - [Swiper 輪播套件（改變導航按鈕樣式）](https://codepen.io/codepenplayer/pen/gbpxGPe)
  - [Swiper RWD 變換排版](https://codepen.io/codepenplayer/pen/zxGdmjK)
  - [Swiper - Demo 測試](https://codepen.io/codepenplayer/pen/LEPQLqW)
  - [Swiper - 官網基礎範例](https://codepen.io/codepenplayer/pen/ZYzxEKw)

<hr>

✡️ 六角學院 2025 軟工體驗營<br>
僅作為個人學習、作品集，無商業用途，設計稿版權屬六角學院。
