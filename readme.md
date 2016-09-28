### nodejs练手小项目
---
> 该项目为极客学院前端就业班作业，即实现百度新闻手机客户端后，用nodeJS完成服务端。

#### 使用技术
---
1. 前端
  * requirejs
  * jade
2. 后端
  * express
  * session 来实现会话持久
3. 工程化
  * bower 处理js依赖
  * grunt 自动化

#### 项目结构
---
1. app
  * controllers 处理业务层
  * view 视图层
2. config
  * database 数据库连接管理
  * routes 路由
3. public

#### 项目开启
----
1. 将phpnews.sql导入mysql数据库
2. 在bash中输入```npm init``` 和 ```bower init```加载modules
3. 在bash中在该项目目录下使用grunt启动项目

### 项目优化
---
1. 使用gulp来替代grunt
2. 使用sass/less来书写css，使css可控和更易维护
3. 前端工业化，将css/js/img压缩
