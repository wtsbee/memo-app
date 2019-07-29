/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.editorConfig = function( config )
{
  config.skin = 'moonocolor';
  // config.uiColor = '#f8f8f8';
  config.height = '50vh';
  config.extraPlugins = 'youtube';
	config.youtube_privacy = true;
  // config.toolbarCanCollapse = true;
  // config.plugins = 'youtube';
  // extraPlugins: [ 'image2', 'uploadfile', ],
  // CKEDITOR.config.extraPlugins = ‘youtube’;
  // config.extraPlugins = "youtube";
  // config.allowedContent = true;
  // config.extraPlugins = ‘codemirror’;
  // config.toolbar.push( { name: 'insert', items: [ 'Image', 'Youtube' ] } );
  // Define changes to default configuration here. For example:
  config.language = 'ja';
  // config.uiColor = '#AADC6E';

  /* Filebrowser routes */
  // The location of an external file browser, that should be launched when "Browse Server" button is pressed.
  config.filebrowserBrowseUrl = "/ckeditor/attachment_files";

  // The location of an external file browser, that should be launched when "Browse Server" button is pressed in the Flash dialog.
  config.filebrowserFlashBrowseUrl = "/ckeditor/attachment_files";

  // The location of a script that handles file uploads in the Flash dialog.
  config.filebrowserFlashUploadUrl = "/ckeditor/attachment_files";

  // The location of an external file browser, that should be launched when "Browse Server" button is pressed in the Link tab of Image dialog.
  config.filebrowserImageBrowseLinkUrl = "/ckeditor/pictures";

  // The location of an external file browser, that should be launched when "Browse Server" button is pressed in the Image dialog.
  config.filebrowserImageBrowseUrl = "/ckeditor/pictures";

  // The location of a script that handles file uploads in the Image dialog.
  config.filebrowserImageUploadUrl = "/ckeditor/pictures?";

  // The location of a script that handles file uploads.
  config.filebrowserUploadUrl = "/ckeditor/attachment_files";

  config.allowedContent = true;
  config.filebrowserUploadMethod = 'form';

  // Toolbar groups configuration.
  config.toolbar = [
    { name: 'document', groups: [ 'mode', 'document', 'doctools' ], items: [ 'Source'] },
    { name: 'clipboard', groups: [ 'clipboard', 'undo' ], items: [ 'Cut', 'Copy', 'Paste', '-', 'Undo', 'Redo' ] },
    // { name: 'editing', groups: [ 'find', 'selection', 'spellchecker' ], items: [ 'Find', 'Replace', '-', 'SelectAll', '-', 'Scayt' ] },
    // { name: 'forms', items: [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ] },
    // { name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
    { name: 'insert', items: [ 'Image', 'Youtube', 'Table', 'HorizontalRule', 'SpecialChar', 'Smiley' ] },
    '/', // 強制改行
    { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] },
    { name: 'forms', items : [ 'Checkbox', 'Radio', 'TextField', 'Textarea' ] },
    { name: 'document', items: [ 'Templates' ] },
    { name: 'editing', items: [ 'Find' ] },
    { name: 'tools', items: [ 'Maximize', 'Zoom' ] },
    '/', // 強制改行
    { name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
    { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
    { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] }
  ];

  config.toolbar_mini = [
    { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] },
    { name: 'styles', items: [ 'Font', 'FontSize' ] },
    { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
    { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
    { name: 'insert', items: [ 'Image', 'Table', 'HorizontalRule', 'SpecialChar' ] }
  ];
  
  CKEDITOR.config.enterMode = 2;
  config.font_names='メイリオ,Meiryo; "Yu Gothic Medium","游ゴシック Medium",YuGothic,"游ゴシック体",YuGothicM,"Yu Gothic"; ＭＳ Ｐゴシック; ＭＳ ゴシック; "游明朝","Yu Mincho",YuMincho; ＭＳ Ｐ明朝; ＭＳ 明朝; Arial/Arial, Helvetica, sans-serif; Comic Sans MS/Comic Sans MS, cursive; Courier New/Courier New, Courier, monospace; Georgia/Georgia, serif; Lucida Sans Unicode/Lucida Sans Unicode, Lucida Grande, sans-serif; Tahoma/Tahoma, Geneva, sans-serif; Times New Roman/Times New Roman, Times, serif; Trebuchet MS/Trebuchet MS, Helvetica, sans-serif; Verdana/Verdana, Geneva, sans-serif';

  config.stylesSet = 'my_styles';

  CKEDITOR.stylesSet.add( 'my_styles', [
    // Block Styles
    { name: 'テキスト文',  element: 'p', styles: { 'font-size': '1em' } },
    { name: '標準テキスト文',  element: 'p',  styles: { 'font-size': '1em','margin': '10px 0 10px 0' } },
    { name: '段1-テキスト文',  element: 'p',  styles: { 'font-size': '1em','margin': '10px 0 10px 10px' } },
    { name: '段2-テキスト文',  element: 'p',  styles: { 'font-size': '1em','margin': '10px 0 10px 25px' } },
    { name: '段3-テキスト文',  element: 'p',  styles: { 'font-size': '1em','margin': '10px 0 10px 40px' } },
    { name: '段4-テキスト文',  element: 'p',  styles: { 'font-size': '1em','margin': '10px 0 10px 55px' } },
    // Inline Styles
    { name: 'マーカー黄',  element: 'span',  styles: { 'background': 'linear-gradient(transparent 45%, #ffff66 45%)' } },
    { name: 'マーカーピンク',  element: 'span',  styles: { 'background': 'linear-gradient(transparent 45%, #ffc9db 45%)'  } },
    { name: 'マーカー水色',  element: 'span',  styles: { 'background': 'linear-gradient(transparent 45%, #acffff 45%)'  } },
    { name: 'マーカー緑',  element: 'span',  styles: { 'background': 'linear-gradient(transparent 45%, #b8ff92 45%)'  } },
    { name: 'マーカーベージュ',  element: 'span',  styles: { 'background': 'linear-gradient(transparent 45%, #ffd791 45%)'  } },
    { name: 'マーカーグレー',  element: 'span',  styles: { 'background': 'linear-gradient(transparent 45%, #ddd 45%)'  } },
    { name: 'ライン赤',  element: 'span',  styles: { 'background': 'linear-gradient(transparent 90%, #ff5a5a 90%)'  } },
  ] );
}
