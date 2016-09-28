var db = require('../../app')
var fs = require("fs")
var path = require('path')
var _ = require('underscore') //更新数据
var dateFormat = require('dateformat') //日期格式化

//列表展示
exports.list = function(req, res) {
  db.select(['news.id', 'news.title', 'news.poster', 'news.updateAt', 'news.hot',
    'category.content'])
  .join('category', 'category.id=news.category','left')
  .get('news', function(err, results, fields) {
    console.log(results)
    res.render('list', {
      title: '后台新闻列表页',
      news: results
    })
  })
}

//新闻上传
exports.new = function(req, res) {
  db.get('category', function(err, results, fields) {
    res.render('admin', {
      title: '后台新闻新增页',
      categories: results,
      news: {}
    })
  })
}

//存储图片
exports.savePoster = function(req, res, next) {
  var posterData = req.files.uploadPoster
  var filePath = posterData.path
  var originalFilename = posterData.originalFilename

  if (originalFilename) {
    fs.readFile(filePath, function(err, data) {
      var timestamp = Date.now()
      var type = posterData.type.split('/')[1]
      var poster = timestamp + '.' + type

      var newPath = path.join(__dirname, '../../', '/public/upload/' + poster)

      fs.writeFile(newPath, data, function(err) {

        req.poster = poster
        next()
      })
    })
  } else {
    next()
  }
}

//保存与更新新闻
exports.save = function(req, res) {
  var newsObj = req.body.news
  var _newsObj
    //如果海报地址存在
  if (req.poster) {
    newsObj.poster = req.poster
  }
  console.log(newsObj)
    //更新,如果上传空值，直接重定向
  if (newsObj.id) {
    if (newsObj.title != "" && newsObj.hot != "") {
      _newsObj = _.extend(newsObj, {
          updateAt: dateFormat(Date.now(), 'yyyy-mm-dd')
        })
      db.where({
        id: newsObj.id
      }).update('news', _newsObj, function(err) {
        if (!err) {
          console.log('update success')
        }
        res.redirect('/admin/news/list')
      })
    } else {
      res.redirect('/admin/news/update/' + newsObj.id)
    }
  } else {
    //插入，不能上传空数据
    if (newsObj.title == "" || newsObj.hot == "" || !newsObj.poster) {
      res.redirect('/admin/news/new')
    } else {
      _newsObj = _.extend(newsObj, {
        createAt: dateFormat(Date.now(), 'yyyy-mm-dd'),
        updateAt: dateFormat(Date.now(), 'yyyy-mm-dd')
      })
      db.insert('news', _newsObj, function(err, info) {
        if (err) {
          console.log(err)
        }
        res.redirect('/admin/news/list')
      })
    }
  }
}

//新闻更新页面，直接调用上传页面
exports.update = function(req, res) {
  var id = req.params.id
  var categories, news
  if (id) {
    db.get('category', function(err, results, fields) {
      categories = results
    })
    db.where({
      id: id
    }).get('news', function(err, results, fields) {
      if (err) {
        console.log(err)
      }
      console.log(results.title)
      for (var i in results) {
        news = results[i]
      }
      // console.log(news)
      res.render('admin', {
        title: '后台新闻更新页',
        categories: categories,
        news: news,
        message: '更新内容不能为空,如果不上传图片则保持原图片不变'
      })
    })
  }
}

//删除功能
exports.del = function(req, res) {
  var id = req.query.id
  if (id) {
    db.where({
      id: id
    }).delete('news', function(err) {
      if (err) {
        console.log(err)
      }
      if (!err) {
        console.log('delete success')
      }
      res.json({
        success: 1
      })
    })
  }
}