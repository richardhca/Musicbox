function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function trackPageDeleteStatusToolBarTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"views\u002F\u002Ftrack_page_delete_status_tool_bar.pug":"div#track_page_delete_status_tool_bar.w-100\n    .d-flex.pl-4.pr-4\n        .cta.mr-3\n            .toggle-btn.change_icon\n        i.fas.fa-check.tool-bar-icon.mr-3.track_page_delete_comfirm_icon\n        i.fas.fa-times.tool-bar-icon.mr-3.track_page_delete_cancel_icon\n        i.fas.fa-search.tool-bar-icon.mr-3(id=\"track_search\")"};
;pug_debug_line = 1;pug_debug_filename = "views\u002F\u002Ftrack_page_delete_status_tool_bar.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-100\" id=\"track_page_delete_status_tool_bar\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002F\u002Ftrack_page_delete_status_tool_bar.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex pl-4 pr-4\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002F\u002Ftrack_page_delete_status_tool_bar.pug";
pug_html = pug_html + "\u003Cdiv class=\"cta mr-3\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002F\u002Ftrack_page_delete_status_tool_bar.pug";
pug_html = pug_html + "\u003Cdiv class=\"toggle-btn change_icon\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002F\u002Ftrack_page_delete_status_tool_bar.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-check tool-bar-icon mr-3 track_page_delete_comfirm_icon\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002F\u002Ftrack_page_delete_status_tool_bar.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-times tool-bar-icon mr-3 track_page_delete_cancel_icon\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002F\u002Ftrack_page_delete_status_tool_bar.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-search tool-bar-icon mr-3\" id=\"track_search\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}