$(document).on('turbolinks:load', function() {
  function buildHTML(folder){
    var html = `<li class="folder-item">
                  <a href=/folders/${folder.id}/memos>${folder.name}</a>
                </li>`
    return html;
  }
  $('.folder-save-form').on('submit', function(e){
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
      $('.folder-list').append(html)
    })
    .fail(function(){
      alert('error');
    })
    .always(function(data){
      $('.folder-save-btn').prop('disabled', false);
      $('.folder-save-form')[0].reset();
    })
  });

  $(document).ready(function(){
    $(".current.asc").append(" ▲");
    $(".current.desc").append(" ▼");
  });
});
