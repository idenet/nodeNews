var express = require('express') //express框架
var path = require('path') //路径
var serveStatic = require('serve-static') //静态资源
var morgan = require('morgan') //日志
var Db = require('mysql-activerecord') //orm 数据库映射
var multiParser = require('connect-multiparty') //图片

// session
var cookieParser = require('cookie-parser')
var session = require('express-session')
//解析json和form表单的数据
var bodyParser = require('body-parser')

var port = process.env.port || 3000
var app = express()


app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
  })) // for parsing application/x-www-form-urlencoded

app.set("views", "./app/views/pages")
app.set("view engine", 'jade')

app.use(multiParser()) //form表单上传图片插件
//记录日志，如果要记录静态文件的日志，要放在静态文件的前面
if ('development' === app.get('env')) {
  app.set('showStackError', true)
  app.use(morgan(':method :url :status'))
  app.locals.pretty = true
    // mongoose.set('debug', true)
}

//获取静态js css
app.use(serveStatic(path.join(__dirname, 'public')))
app.locals.moment = require('moment')


//news list
var db = new Db.Adapter(require('./config/database').development)

//session
app.use(cookieParser())
app.use(session({
  secret: 'baidunews', // 建议使用 128 个字符的随机字符串
  cookie: { maxAge: 60 * 60 * 1000 },
  resave: true,
  saveUninitialized: true
}))
module.exports = db

//在所有路由中使用session
app.use('/admin',function(req, res, next){
  res.locals.user = req.session.user
  next();
})

app.listen(port)

require('./config/routes')(app) //路由
console.log("news started on port" + port)

