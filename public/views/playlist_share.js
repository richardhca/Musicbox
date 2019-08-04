function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function playlistShareTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"views\u002F\u002Fplaylist_share.pug":".modal.fade(id=\"shareplaylist\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"shareplaylistTitle\" aria-hidden=\"true\")\n    .modal-dialog(role=\"document\")\n        .modal-content.shareplaylist-form\n            .modal-header\n                h1.modal-title(id=\"shareplaylistTitle\") Share Playlist\n            .modal-body\n                .d-flex.justify-content-center\n                    form#newShare(action='\u002Fplaylist\u002Fshare' method='post')\n                        label Enter Username: \n                            input#ShareUser(type='text' name='ShareUser')\n                        .d-flex.justify-content-around\n                            button#confirmShare(type='submit' class='btn btn-default btn-sm') Share\n                            button#abortShare(type='button' class='btn btn-default btn-sm' data-dismiss=\"modal\" aria-label=\"Abort\") Cancel"};
;pug_debug_line = 1;pug_debug_filename = "views\u002F\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal fade\" id=\"shareplaylist\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"shareplaylistTitle\" aria-hidden=\"true\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002F\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-dialog\" role=\"document\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002F\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-content shareplaylist-form\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002F\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-header\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002F\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Ch1 class=\"modal-title\" id=\"shareplaylistTitle\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002F\u002Fplaylist_share.pug";
pug_html = pug_html + "Share Playlist\u003C\u002Fh1\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002F\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-body\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002F\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-center\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002F\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Cform id=\"newShare\" action=\"\u002Fplaylist\u002Fshare\" method=\"post\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002F\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002F\u002Fplaylist_share.pug";
pug_html = pug_html + "Enter Username: ";
;pug_debug_line = 11;pug_debug_filename = "views\u002F\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Cinput id=\"ShareUser\" type=\"text\" name=\"ShareUser\"\u002F\u003E\u003C\u002Flabel\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002F\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-around\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "views\u002F\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-default btn-sm\" id=\"confirmShare\" type=\"submit\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "views\u002F\u002Fplaylist_share.pug";
pug_html = pug_html + "Share\u003C\u002Fbutton\u003E";
;pug_debug_line = 14;pug_debug_filename = "views\u002F\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-default btn-sm\" id=\"abortShare\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Abort\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "views\u002F\u002Fplaylist_share.pug";
pug_html = pug_html + "Cancel\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}