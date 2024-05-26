# Astro Portal

基于 Astro 的 Poratl 页面

![](public/demo.jpg)

## 食用指南

你需要关注 service-lists.yml 、 site.ts 和 src/icons/

site.ts 定义了站点相关的配置

src/icons/ 存放了侧栏的 svg 图标，和 service 使用 id 进行匹配

service-lists.yml 定义了分类和列表


## 命令列表

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## license

MIT License