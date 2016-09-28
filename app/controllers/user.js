var db = require('../../app')

exports.showSignin = function(req, res) {
  res.render('signin', {
    title: '登录页面'
  })
}

exports.signin = function(req, res) {
  var _user = req.body.user
  var name = _user.name
  var password = _user.password
  var _results

  db.where({
    name: name
  }).get('user', function(err, results, fields) {
    if (err) {
      console.log(err)
    }
    if (results.length == 0) {
      res.redirect('/signin')
    } else {
      for (var i in results) {
        _results = results[i]
      }
      if (_results.password == password) {
        req.session.user = _results
        console.log(req.session.user)
        res.redirect('/admin/news/list')
      }else{
        //密码不对,直接重定向到首页
        res.redirect('/signin')
      }
    }
  })
}

//logout
exports.logout = function(req, res) {
  delete req.session.user
    //delete app.locals.user
  res.redirect('/signin')
}

exports.signinRequired = function(req, res, next) {
  var user = req.session.user
    // res.locals.user = req.session.user
  if (!user) {
    res.redirect('/signin')
  }
  next()
}