$(function() {
  $('.del').click(function(e) {
    var target = $(e.target)
    var id = target.data('id')
    var tr = $('.item-id-' + id)
    $.ajax({
      type: 'DELETE',
      url: '/admin/news/list?id=' + id, //注意url格式
    }).done(function(results) {
      if (results.success === 1) {
        if (tr.length > 0) {
          tr.remove()
        }
      }
    })
  })
})