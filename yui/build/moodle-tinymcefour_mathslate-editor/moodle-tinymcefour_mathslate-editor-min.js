YUI.add("moodle-tinymcefour_mathslate-editor",function(e,t){M.tinymcefour_mathslate=M.tinymcefour_mathslate||{},M.tinymcefour_mathslate.init=function(e){M.tinymcefour_mathslate.url=e.url},M.tinymcefour_mathslate.initEditor=function(t){function n(t,n){function a(){u.tools.forEach(function(t){var n=new e.DD.Drag({node:"#"+t.id});n.set("data",t.json),n.on("drag:end",function(){this.get("node").setStyle("top","0"),this.get("node").setStyle("left","0")})})}var r=e.guid(),i=e.guid();this.node=e.one("#"+t),this.node.appendChild(e.Node.create('<div id="'+r+'">')),this.node.appendChild(e.Node.create('<div id="'+i+'" class="mathslate-workspace">'));var s=new M.local_mathslate.MathJaxEditor("#"+i),o=top.tinymce.activeEditor.windowManager.getParams();o.getMath=function(e){return s.output(e)},o.undo=function(){s.undo()},o.redo=function(){s.redo()};var u={tools:[],fillToolBox:function(t){function n(t){function n(t){Array.isArray(t[2])&&t[2].forEach(function(r){Array.isArray(r)?n(r):r==="[]"&&(newID=e.guid(),t[2][t[2].indexOf(r)]=["mn",{},"[]"])})}this.id=e.guid(),this.json=JSON.stringify(t),this.HTMLsnippet=[["span",{id:this.id},[["math",{},[t]]]]],n(t),u.tools.push(this)}var i={children:[]};t.forEach(function(t){var r=e.Node.create("<span></span>");t.tools.forEach(function(e){var t=new n(e);MathJax.HTML.addElement(r.getDOMNode(),"span",{},t.HTMLsnippet)}),i.children.push({label:t.label,content:r.getHTML()})});var s=new e.TabView(i);e.one("#"+r)&&s.render("#"+r)},getToolByID:function(e){var t;return this.tools.forEach(function(n){n.id&&n.id===e&&(t=n)}),t}};s.canvas.on("drop:hit",function(e){e.drag.get("data")&&s.addMath(e.drop.get("node").get("id"),e.drag.get("data"))}),e.on("io:success",function(t,n){u.tools.length===0&&(u.fillToolBox(e.JSON.parse(n.response)),MathJax.Hub.Queue(["Typeset",MathJax.Hub,r]),MathJax.Hub.Queue(a))}),n===undefined?e.io(M.tinymcefour_mathslate.config):e.io(n)}new n(t.elementid,t.config)}},"@VERSION@",{requires:["dd-drag","dd-proxy","dd-drop","event","tabview","io-base","json","moodle-local_mathslate-mathjaxeditor"]});
