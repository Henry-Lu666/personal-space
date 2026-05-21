# 个人网站 — 进度记录

## 当前阶段：Phase 2 — 多页站点结构已搭建

### 2026-05-19：多页拆分
- [x] 共用样式 `css/site.css`、脚本 `js/site.js`
- [x] `index.html` 首页（Hero + 三入口卡片）
- [x] `projects.html` 项目详情 + 职业时间线
- [x] `research.html` 论文研究（流程、消融、业务发现）
- [x] `about.html` 关于我（简介、能力、教育、联系）

## 历史：Phase 1 — 首页设计稿确认中

### 2026-05-18：首页设计稿 v2

#### 完成事项
- [x] 整合设计规范（README.md）+ Canva风格方向
- [x] 首页 index.html v2 完成
  - 深色底 #0d0d0d + 金色点缀 #c9a84c
  - 衬线标题（Cormorant Garamond / Noto Serif SC）
  - 6大板块：Hero / 项目 / 技能 / 经历 / 研究 / 联系
  - 中英双语
  - 滚动reveal动画（非瀑布流）
  - 8px网格 / max-width 1200px / border-radius ≤ 8px
  - 遵守设计红线（无蓝紫渐变、无粒子、无三栏等宽卡片）
- [x] 截图已发用户确认
- [x] v1 旧版备份为 index_v1_backup.html（蓝紫风格，已废弃）

#### 待办
- [ ] 用户确认设计稿
- [ ] 调整细节（联系方式、LinkedIn、头像等）
- [ ] 配置 Git（WSL）
- [ ] 创建 GitHub 仓库 henry-lu666.github.io
- [ ] 推送部署

### 下一步
1. 等用户反馈
2. 确认后 → Git + GitHub Pages 部署

---

## 里程碑规划

| 阶段 | 内容 | 状态 |
|------|------|------|
| Phase 0 | 需求确认 & 设计探索 | ✅ 完成 |
| Phase 1 | 首页设计稿 → 确认 | 🔄 进行中 |
| Phase 2 | 全站开发（首页+项目+文章+关于） | Phase 1 后 |
| Phase 3 | 内容填充 + 部署上线 | Phase 2 后 |
| Phase 4 | 视频板块 + 持续优化 | Phase 3 后 |

### 2026-05-19：克制版个人品牌前台重构
- [x] 新增 `career.html` 职业档案
- [x] 新增 `studio.html` 内容工作室
- [x] 首页改为 Career / Projects / Research / Studio 四入口
- [x] 视觉系统更新为海洋冲击感 + 黄金比例 + 圆形元素
- [x] 同步更新 `.hermes/agents/site/SOUL.md`
