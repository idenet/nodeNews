var db = require('../../app')

exports.index = function(req, res) {
  var id = req.query.id
  var news
  if (!id) {
    db.where({
      category: 1
    }).get('news', function(err, results, fields) {
      console.log(results)
      res.render('index', {
        news: results
      })
    })
  } else {
    db.where({
      category: id
    }).get('news', function(err, results, fields) {
      res.json({
        success: 1,
        data: results
      })
    })
  }
}

exports.getdata = function(req, res) {
  var category = req.query.id
  console.log(category)
  db.where({
    category: category
  }).get('news', function(err, results, fields) {
    if (err) {
      console.log(err)
    }
    console.log(results)
      // res.json({
      //   success: 1,
      //   data: results
      // })
  })
}