$(function(){
  function buildHTML(memo){
    var html = `<li class="memo-item">
                  <a href=/folders/${memo.folder_id}/memos/${memo.id}>${memo.name}</a>
                </li>`
    return html;
  }
  $('.memo-save-form').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.memo-list').append(html)
    })
    .fail(function(){
      alert('error');
    })
  })
});
