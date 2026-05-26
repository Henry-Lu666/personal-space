# 个人网站 — 项目总览

> 导航：[[个人网站-编译]]

## 项目目标

两个核心使命：
1. **立体简历** — 面试官打开后能直观感受到技术深度和设计品味
2. **内容发布平台** — 文章和视频内容能方便地发布和浏览

## 设计方向

经参考网站对比后确定的风格公式：

> 大疆的视觉冲击力 + 蚂蚁集团的深色科技感 + 锤子科技的极简可执行性

### 参考网站评估

| 网站 | 评估 | 是否参考 |
|------|------|---------|
| 飞书 feishu.cn | 首页太杂 | ❌ 不参考 |
| 小米 mi.com | 感觉很棒，但靠产品图撑 | ⚠️ 学布局，不学素材依赖 |
| 蚂蚁集团 antgroup.com | 深色科技感很棒 | ✅ 学深色底+发光渐变 |
| DJI 大疆 dji.com | 最喜欢，视觉冲击力强 | ✅ 学大图冲击+滚动叙事 |
| 锤子科技 smartisan.com | 极简风能接受，相对简单 | ✅ 学极简克制+可执行性 |

### 设计关键词
- 深色底（#0d0d0d）+ 大面积留白
- 每个板块一个强视觉锚点（大字、数据、动效，非产品图）
- 不堆砌内容，一个页面只讲一件事
- 金色/暖色点缀，不用蓝紫渐变
- 视觉冲击力靠排版张力（大字号+大量留白的反差）和滚动节奏感

## 技术栈

- 框架：Astro（首选）
- CSS：原生 CSS + CSS 变量（禁 Tailwind/Bootstrap）
- 部署：GitHub Pages（仓库 `personal-space`）
- 线上：https://hongzhangxiu.xyz（自定义域名）· 备用 https://henry-lu666.github.io/personal-space/

## GitHub 信息

- 用户名：Henry-Lu666
- 仓库：https://github.com/Henry-Lu666/personal-space

## 设计规范摘要

### 色彩系统
```
--bg:           #0d0d0d   /* 页面底色 */
--surface:      #161616   /* 卡片/区块底色 */
--border:       #2a2a2a   /* 边框/分割线 */
--text-primary: #e8e4dc   /* 正文主色 */
--text-muted:   #8a8580   /* 辅助文字 */
--accent:       #c9a84c   /* 点缀金色 */
--accent-dim:   #a08930   /* 金色暗调 */
--code-bg:      #1a1a1a   /* 代码块底色 */
```

### 字体
- 标题：Cormorant Garamond / Noto Serif SC
- 正文：Source Serif 4 / Noto Serif SC
- 代码：DM Mono

### 间距
- 8px 网格系统
- 正文最大行宽：680px
- 页面最大宽度：1200px
- section 间距：96px

### 站点结构
```
/                    ← 首页
/projects            ← 技术项目
/insights            ← 认知沉淀文章
/videos              ← 视频内容（Phase 2）
/about               ← 个人故事 + 求职意向 + 联系方式
```

## 设计红线（绝对禁止）

- ❌ 三栏等宽卡片布局
- ❌ Hero 全屏背景图 + 居中大标题 + 渐变遮罩
- ❌ 蓝紫渐变背景
- ❌ 圆角 >12px
- ❌ Font Awesome 图标堆砌
- ❌ 瀑布流 fade-in 动画
- ❌ 粒子背景/鼠标跟随特效
- ❌ "Welcome to my portfolio" 空洞 Hero
- ❌ 社交媒体图标排一行放页首
- ❌ "Powered by AI" 标注

## 相关文件

- [进度记录](./PROGRESS.md)
