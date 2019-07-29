/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.editorConfig = function( config )
{
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
    { name: 'insert', items: [ 'Youtube'] },
    { name: 'insert', items: [ 'Html5video'] },
    { name: 'clipboard', items: [ 'SelectAll', 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
    { name: 'editing', items: [ 'Find', '-','SpellChecker', 'Scayt', 'AutoCorrect' ] },
    { name: 'tools', items: [ 'Maximize', 'ShowBlocks', 'Zoom' ] },
    '/', // 強制改行
    { name: 'insert', items: [ 'Image' ] },
    { name: 'links', items: [ 'lightbox', 'Link', 'Unlink', 'Anchor' ] },
    { name: 'insert', items: [ 'Slideshow','Youtube','-','leaflet','Iframe' ] },
    { name: 'insert', items : [ 'Smiley','Glyphicons','FontAwesome','Symbol' ] },
    { name: 'insert', items: [ 'Table', 'HorizontalRule', 'CreateDiv', 'CodeSnippet', 'Code' ] },
    '/', // 強制改行
    { name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike', '-', 'RemoveFormat' ] },
    { name: 'paragraph', items: [ 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote' ] },
    '/', // 強制改行
    { name: 'forms', items : [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ] },
    { name: 'document', items: [ 'Templates' ] },
    { name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize','lineheight' ] },
    { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
    { name: 'about', items: [ 'About' ] },

    // { name: 'insert', items: [ 'Image', 'Youtube' ] },
    { name: 'document', groups: [ 'mode', 'document', 'doctools' ], items: [ 'Source'] },
    { name: 'clipboard', groups: [ 'clipboard', 'undo' ], items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
    // { name: 'editing', groups: [ 'find', 'selection', 'spellchecker' ], items: [ 'Find', 'Replace', '-', 'SelectAll', '-', 'Scayt' ] },
    // { name: 'forms', items: [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ] },
    { name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
    { name: 'insert', items: [ 'Image', 'Flash', 'Table', 'HorizontalRule', 'SpecialChar' ] },
    { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] },
    '/',
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
}
