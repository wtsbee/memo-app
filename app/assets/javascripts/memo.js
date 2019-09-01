$(document).on('turbolinks:load', function() {
  function buildHTML(memo){
    var html = `<tr>
                  <td>
                    <a href=/folders/${memo.folder_id}/memos/${memo.id}>${memo.name}</a>
                  </td>
                  <td style="text-align:center">
                    ー
                  </td>
                </tr>`
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
      $('.memo-table').append(html);
    })
    .fail(function(){
      alert('error');
    })
    .always(function(data){
      $('.memo-save-btn').prop('disabled', false);
      $('.memo-save-form')[0].reset();
    })
  })

  $('.memo-edit-btn').on('click', function(){
    // $('iframe').contents().find('.cke_editable.cke_editable_themed.cke_contents_ltr.cke_show_borders p').remove();
    $('iframe').contents().find('.cke_editable.cke_editable_themed.cke_contents_ltr.cke_show_borders').append(gon.content);
    // $('iframe').contents().find('.cke_editable.cke_editable_themed.cke_contents_ltr.cke_show_borders p').css('margin', '0');
    $('iframe').contents().find('.cke_editable.cke_editable_themed.cke_contents_ltr.cke_show_borders br:first').remove();
  })

  // $('#memo-search-field').on('keyup', function() {
  //   var input = $('#memo-search-field').val();
  //   $.ajax({
  //     type: 'GET',
  //     url: location.href,
  //     data: { keyword: input },
  //     dataType: 'json'
  //   })
  //   .done(function(data) {
  //     $("#header-search-container").empty();
  //     if (data.length !== 0) {
  //       $('#header-search-container').show();
  //       data.forEach(function(data){
  //         appendMemo(data);
  //       });
  //     }
  //     else {
  //       appendErrMsgToHTML("一致する情報がありません");
  //     }
  //   })
  //   .fail(function() {
  //     alert('error');
  //   });
  // });
});
