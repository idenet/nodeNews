var News = require('../app/controllers/news')
var User = require('../app/controllers/user')
var Index = require('../app/controllers/index')


module.exports = function(app) {

  //index page
  app.get('/', Index.index)

  //news
  //列表
  app.get('/admin/news/list', User.signinRequired, News.list)
  //上传页
  app.get('/admin/news/new', User.signinRequired, News.new)
  //上传post
  app.post('/admin/news', User.signinRequired, News.savePoster, News.save)
  //更新
  app.get('/admin/news/update/:id', User.signinRequired, News.update)
  //删除
  app.delete('/admin/news/list', User.signinRequired, News.del)


  //user
  //登录
  app.post('/user/signin',User.signin)
  //登录页面的展示
  app.get('/signin', User.showSignin)
  //退出
  app.get('/logout', User.logout)
}