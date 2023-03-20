## 基于Antd Design的基础模板

## 一、使用

```bash
# 安装依赖
$ yarn install

# 启动服务
$ yarn start  # visit http://localhost:3333

# 开发环境编译命令
$ yarn run build:dev

# 测试环境编译命令
$ yarn run build:test

# 正式环境编译命令
$ yarn run build:prod

# 运行js代码检查
$ yarn run eslint

# 运行js代码美化功能
$ yarn run prettier


```

使用前请阅读 [使用文档](https://ice.work/docs/guide/about)，使用中遇见的问题也可查阅此文档

## 二、结构目录


```md
├── build/                         # 构建产物
├── mock/                          # 本地模拟数据
│   ├── index.[j,t]s
├── public/
│   ├── index.html                 # 应用入口 HTML
│   └── favicon.png                # Favicon
├── src/                           # 源码路径
│   ├── services                       # 定义全局数据请求
│       └── user.ts
│   ├── components/                # 自定义业务组件
│   │   └── Guide/
│   │       ├── index.[j,t]sx
│   │       ├── index.module.scss
│   ├── layouts/                   # 布局组件
│   │   └── BasicLayout/
│   │       ├── index.[j,t]sx
│   │       └── index.module.scss
│   ├── pages/                     # 页面
│   │   └── Home/                  # home 页面，约定路由转成小写
│   │       ├── components/        # 页面级自定义业务组件
|   │       ├── services           # [可选] 定义页面级数据请求
|   │       |   └── repo.ts
│   │       ├── models.[j,t]sx     # 页面级数据状态
│   │       ├── index.[j,t]sx      # 页面入口
│   │       └── index.module.scss  # 页面样式文件
│   ├── configs/                   # [可选] 配置文件
│   │   └── menu.[j,t]s            # [可选] 菜单配置
│   ├── models/                    # [可选] 应用级数据状态
│   │   └── user.[j,t]s
│   ├── utils/                     # [可选] 工具库
│   ├── global.scss                # 全局样式
│   ├── routes.[j,t]s              # 路由配置
│   └── app.[j,t]s[x]              # 应用入口脚本
├── build.json                     # 工程配置
├── README.md
├── package.json
├── .editorconfig
├── .eslintignore                  # eslint不检查文件
├── .eslintrc                      # eslint配置文件
├── .gitignore
├── .prettierignore                # prettier不检查文件
├── .prettierrc                    # prettier配置文件
├── .gitignore
├── tsconfig.json
└── yarn.lock
```
请务必熟悉项目目录结构，按照结构规范存放代码

## 三、开发部署

1. 修改 src/config.ts 中不同环境的后端baseURL地址
2. 如果是开发环境，可开启mock开发调试，修改 src/config.ts 中 development.mock 为true；非开发环境不支持mock
3. 熟悉目录结构，按照结构要求存放自己代码
4. 进行开发调试（可参考已有demo）
5. 发布部署，模板已集成[前端项目流水线部署前准备](https://leador.yuque.com/nn6l2c/gggty3/hbr0gf)，几乎不需要任何修改

## 四、注意事项

1. 项目模板为空模板，但是配置好发布所需所有编译命令，且可配置dev,test,prod环境后端IP；可作为任何项目基础模板
2. 项目模板默认以```vite```为编译工具，而非```webpack```，如果需要改为```webpack```，请修改```build.json```中vite为false
3. vite编译，请遵循vite规则，特别注意静态资源的处理问题（比如：不能使用require），为避免踩坑，请先阅读以下文档：
   - [静态资源处理](https://ice.work/docs/guide/basic/assets)
   - [Vite模式](https://ice.work/docs/guide/basic/vite/#%E6%9C%AC%E5%9C%B0%E5%BC%80%E5%8F%91%E6%AD%A3%E5%B8%B8%E7%BA%BF%E4%B8%8A%E7%8E%AF%E5%A2%83%E6%8A%A5%E9%94%99-require-is-not-defined)
4. 使用中有任务问题，请联系模板开发者。

