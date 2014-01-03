/**
 * plugin.js
 *
 * Copyright 2013, Daniel Thies
 * Released under LGPL License.
 *
 */


tinymce.PluginManager.add('mathslate', function(editor,url) {

	function showDialog() {

                var cssId, linkElm, dom=editor.dom,math;

		var win, mathEditor={getMath: null};

		win = editor.windowManager.open({
			title: "Math Editor",
			spacing: 10,
			padding: 10,
			width: 378,
			height: 300,
                        url: M.tinymcefour_mathslate.url,
			buttons: [
				{text: "Insert Inline", onclick: function() {
                                        editor.execCommand('mceInsertContent', 
                                            false, '\\('+
                                            mathEditor.getMath('tex')
                                            +'\\)');
					win.close();
                                        }
				},
				{text: "Insert Display", onclick: function() {
                                        editor.execCommand('mceInsertContent', 
                                            false, '\\['+
                                            mathEditor.getMath('tex')
                                            +'\\]');
					win.close();
                                        }
				},
				{text: "Cancel", onclick: function() {
					win.close();
                                        }
				}
			]
		},
                mathEditor
                );
	}

	editor.addButton('mathslate', {
                image : url+ '/img/mathslate.png',
		tooltip: 'Insert Math',
		onclick: showDialog
	});

	editor.addMenuItem('mathslate', {
		icon: 'mathslate',
		text: 'Insert Math',
		onclick: showDialog,
		context: 'insert'
	});
});
