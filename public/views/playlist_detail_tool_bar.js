function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function playlistDetailToolBarTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"views\u002F\u002Fplaylist_detail_tool_bar.pug":"div#playlist_detail_tool_bar\n    .d-flex.ml-3\n        .cta.mr-3\n            .toggle-btn.change_icon\n        \u002F\u002Fa(id=\"add_playlist_icon\")\n        i.fas.fa-plus.tool-bar-icon.mr-3.add_tracks_to_playlist\n        \u002F\u002F(data-toggle=\"modal\"\n        \u002F\u002Fdata-target=\"#addtracks\" style='cursor: pointer;')\n\n"};
;pug_debug_line = 1;pug_debug_filename = "views\u002F\u002Fplaylist_detail_tool_bar.pug";
pug_html = pug_html + "\u003Cdiv id=\"playlist_detail_tool_bar\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002F\u002Fplaylist_detail_tool_bar.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex ml-3\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002F\u002Fplaylist_detail_tool_bar.pug";
pug_html = pug_html + "\u003Cdiv class=\"cta mr-3\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002F\u002Fplaylist_detail_tool_bar.pug";
pug_html = pug_html + "\u003Cdiv class=\"toggle-btn change_icon\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002F\u002Fplaylist_detail_tool_bar.pug";
pug_html = pug_html + "\u003C!--a(id=\"add_playlist_icon\")--\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002F\u002Fplaylist_detail_tool_bar.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-plus tool-bar-icon mr-3 add_tracks_to_playlist\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002F\u002Fplaylist_detail_tool_bar.pug";
pug_html = pug_html + "\u003C!--(data-toggle=\"modal\"--\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002F\u002Fplaylist_detail_tool_bar.pug";
pug_html = pug_html + "\u003C!--data-target=\"#addtracks\" style='cursor: pointer;')--\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}