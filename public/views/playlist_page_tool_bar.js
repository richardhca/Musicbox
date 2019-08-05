function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function playlistPageToolBarTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"views\u002F\u002Fplaylist_page_tool_bar.pug":"div#playlist_page_tool_bar.w-100\n    .d-flex.pl-4.pr-4\n        .cta.mr-3\n            .toggle-btn.change_icon\n        a(id=\"add_playlist_icon\")\n            i.fas.fa-plus.tool-bar-icon.mr-3(data-toggle=\"modal\"\n        data-target=\"#mkplaylist\" style='cursor: pointer;')\n        i.fas.fa-search.tool-bar-icon.mr-3(id=\"playlist_search\")\n        \u002F\u002Fi.fas.fa-trash-alt.tool-bar-icon\n    .d-flex.playlist_page_search_area.align-items-center.hidden\n        input.w-100(id=\"playlist_search_input\" type=\"text\" placeholder=\"Search Playlists...\")\n        i.fas.fa-times(id=\"playlist_search_close\")\n\n    include playlist_create","views\u002Fplaylist_create.pug":".modal.fade(id=\"mkplaylist\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"mkplaylistTitle\" aria-hidden=\"true\")\n    .modal-dialog(role=\"document\")\n        .modal-content.mkplaylist-form\n            .modal-header\n                h1.modal-title(id=\"mkplaylistTitle\") Create Playlist\n            .modal-body\n                .d-flex.justify-content-center\n                    form#newPL(action='\u002Fplaylist\u002Fcreate' method='post')\n                        label Playlist Name: \n                            input#playlistName(type='text' name='PlaylistName' required)\n                        label Privacy: \n                            .privacySelect(style='margin-left: 25%;')\n                                input(type='radio' name='privacy' value='false' checked)\n                                p Private\n                            .privacySelect(style='margin-left: 25px;')\n                                input(type='radio' name='privacy' value='true')\n                                p Public\n                        .d-flex.justify-content-around\n                            button#createPL(type='button' class='btn btn-default btn-sm') Create\n                            button#mkPLabort(type='button' class='btn btn-default btn-sm' data-dismiss=\"modal\" aria-label=\"Abort\") Cancel"};
;pug_debug_line = 1;pug_debug_filename = "views\u002F\u002Fplaylist_page_tool_bar.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-100\" id=\"playlist_page_tool_bar\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002F\u002Fplaylist_page_tool_bar.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex pl-4 pr-4\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002F\u002Fplaylist_page_tool_bar.pug";
pug_html = pug_html + "\u003Cdiv class=\"cta mr-3\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002F\u002Fplaylist_page_tool_bar.pug";
pug_html = pug_html + "\u003Cdiv class=\"toggle-btn change_icon\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002F\u002Fplaylist_page_tool_bar.pug";
pug_html = pug_html + "\u003Ca id=\"add_playlist_icon\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002F\u002Fplaylist_page_tool_bar.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-plus tool-bar-icon mr-3\" data-toggle=\"modal\" data-target=\"#mkplaylist\" style=\"cursor: pointer;\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002F\u002Fplaylist_page_tool_bar.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-search tool-bar-icon mr-3\" id=\"playlist_search\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002F\u002Fplaylist_page_tool_bar.pug";
pug_html = pug_html + "\u003C!--i.fas.fa-trash-alt.tool-bar-icon--\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002F\u002Fplaylist_page_tool_bar.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex playlist_page_search_area align-items-center hidden\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002F\u002Fplaylist_page_tool_bar.pug";
pug_html = pug_html + "\u003Cinput class=\"w-100\" id=\"playlist_search_input\" type=\"text\" placeholder=\"Search Playlists...\"\u002F\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002F\u002Fplaylist_page_tool_bar.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-times\" id=\"playlist_search_close\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 1;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal fade\" id=\"mkplaylist\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mkplaylistTitle\" aria-hidden=\"true\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-dialog\" role=\"document\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-content mkplaylist-form\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-header\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "\u003Ch1 class=\"modal-title\" id=\"mkplaylistTitle\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "Create Playlist\u003C\u002Fh1\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-body\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-center\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "\u003Cform id=\"newPL\" action=\"\u002Fplaylist\u002Fcreate\" method=\"post\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "Playlist Name: ";
;pug_debug_line = 11;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "\u003Cinput" + (" id=\"playlistName\" type=\"text\" name=\"PlaylistName\""+pug_attr("required", true, true, false)) + "\u002F\u003E\u003C\u002Flabel\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "Privacy: ";
;pug_debug_line = 13;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "\u003Cdiv class=\"privacySelect\" style=\"margin-left: 25%;\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "\u003Cinput" + (" type=\"radio\" name=\"privacy\" value=\"false\""+pug_attr("checked", true, true, false)) + "\u002F\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "Private\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 16;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "\u003Cdiv class=\"privacySelect\" style=\"margin-left: 25px;\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "\u003Cinput type=\"radio\" name=\"privacy\" value=\"true\"\u002F\u003E";
;pug_debug_line = 18;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 18;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "Public\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Flabel\u003E";
;pug_debug_line = 19;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-around\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-default btn-sm\" id=\"createPL\" type=\"button\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "Create\u003C\u002Fbutton\u003E";
;pug_debug_line = 21;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-default btn-sm\" id=\"mkPLabort\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Abort\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "Cancel\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}