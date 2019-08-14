$(document).on('turbolinks:load', function() {
  function appendMemo(memo){
    var html = `<a href=/folders/${memo.folder_id}/memos/${memo.id}>
                  <div class="memo-search-result">
                    <div class="memo-search-result__title">
                      ${memo.name}
                    </div>
                    <div class="memo-search-result__body">
                      ${memo.content}
                    </div>
                  </div>
                </a>`
    $('#header-search-container').append(html);
  }
  function appendErrMsgToHTML(msg) {
    var html = `<span class="memo-item">
                  ${msg}
                </span>`
    return html;
  }

  $('#memo-search-field').on('keyup', function() {
    var input = $('#memo-search-field').val();
    $.ajax({
      type: 'GET',
      url: location.href,
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(data) {
      $("#header-search-container").empty();
      if (data.length !== 0) {
        $('#header-search-container').show();
        data.forEach(function(data){
          appendMemo(data);
        });
      }
      else {
        appendErrMsgToHTML("一致する情報がありません");
      }
    })
    .fail(function() {
      alert('error');
    });
  });
});
