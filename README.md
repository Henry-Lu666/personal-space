# 个人网站 — 项目总览

> 导航：[[个人网站-编译]]

## 项目目标

两个核心使命：
1. **立体简历** — 面试官打开后能直观感受到业务经验、AI 建模能力和设计品味
2. **内容发布平台** — 文章和视频内容能方便地发布和浏览

## 当前状态

- **技术栈：纯静态 HTML + CSS + 原生 JS**。无需构建，直接部署到 GitHub Pages。
- **风格方向：海洋沙滩 Hero + 山脉文字穿透 + 沙滩色后续区块**
- **最新简历：** V4 版已同步到 `assets/docs/卢鸿璋的简历_2026.V4.pdf`
- **联系邮箱：** `luhenry620@gmail.com`

## 网站结构

```
/                    ← 首页 (Hero + Career / Projects / Research / Studio 四入口)
/career              ← 职业档案（求职方向、时间线、技术栈）
/projects            ← 项目案例（管理为主 + AI 项目）
/research            ← 论文研究 + 数据管线
/studio              ← 内容工作室（视频展示 + 栏目方向）
/about               ← 个人简介 + 联系方式
/journey             ← 激情燃烧的 3 个月（90 天战报叙事页）
```

## 技术栈

- **前端：**纯静态 HTML5 + 原生 CSS（CSS 变量）+ 少量原生 JS
- **布局：**CSS Grid / Flexbox，响应式
- **字体：**Google Fonts 加载 Playfair Display / Noto Serif SC / Inter / DM Mono
- **部署：**GitHub Pages（库 `personal-space`）
- **域名：**https://hongzhangxiu.xyz

## GitHub 信息

- 用户名：Henry-Lu666
- 仓库：https://github.com/Henry-Lu666/personal-space

## 设计规范摘要

### 色彩系统

**首页 Hero（海洋背景 + 山脉文字）：**
- Hero 背景：热带海滩日落 Unsplash 高清照片
- 渐变叠加：`rgba(7,40,65,.45)` → `rgba(14,80,120,.35)` → `rgba(201,154,46,.1)`
- 山脉文字：`background-clip: text` 配合 `hero_mountain.jpg`

**首页之后的统一海洋风格：**
```
--text:        #f0e6d0    /* 沙滩色正文 */
--text-muted:  #b8a88a    /* 暗沙色 */
--accent:      #d4a843    /* 金色点缀 */
--glass:       rgba(255,255,255,.04)
--glass-border:rgba(212,168,67,.1)
```

### 字体
- 标题：Playfair Display / Noto Serif SC
- 正文：Inter / PingFang SC
- 代码：DM Mono

### 间距
- 8px 网格系统
- 正文最大行宽：680px
- 页面最大宽度：1200px
- section 间距：96px

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
- [设计系统详情](references/design-system.md)
- [反复迭代历史](references/iteration-workflow.md)
