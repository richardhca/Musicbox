function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function playlistPageTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"views\u002F\u002Fplaylist_page.pug":"#playlist_page_detail.d-flex.flex-wrap.align-content-start\n    for playlist in playlists\n        - const playlist_name = (null === playlist.title ? 'Untitled' : playlist.title)\n        - const playlist_path = '\u002Fplaylists\u002F' + playlist.title\n        - const playlist_id = (null === playlist.playlist_id ? '' : playlist.playlist_id)\n        - const url = '\u002Fplaylist\u002F' + \"detail\u002F\" + playlist_id ;\n        - const isShare = (null === playlist.share_id ? 'False' : playlist.share_id)\n        .playlist_card.card.m-3\n            div.playlist_cover\n                span.playlist_page_playlist_id(style='display: none;') #{playlist_id}\n                a.playlist_cover_image(href=url)\n                    if (isShare === 'False')\n                        img.card-img-top(src='\u002Fimages\u002Fmusic_cover_default_white.png')\n                    else\n                        img.card-img-top(src='\u002Fimages\u002Fmusic_cover_default_black.png')\n                img.card-img-top.playlist_play_icon(src='\u002Fimages\u002Fcircled_play.png')\n            .card-body.p-0.mt-2.d-inline-flex.align-items-center.text-center\n                a.card-text.mt-1.text-white.noselect.playlist_text(href=url) #{playlist_name}\n                div\n                    i.far.fa-circle.text-white.noselect.playlist_select(style='display: none;')"};
;var locals_for_with = (locals || {});(function (playlists) {;pug_debug_line = 1;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex flex-wrap align-content-start\" id=\"playlist_page_detail\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
// iterate playlists
;(function(){
  var $$obj = playlists;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var playlist = $$obj[pug_index0];
;pug_debug_line = 3;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
const playlist_name = (null === playlist.title ? 'Untitled' : playlist.title)
;pug_debug_line = 4;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
const playlist_path = '/playlists/' + playlist.title
;pug_debug_line = 5;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
const playlist_id = (null === playlist.playlist_id ? '' : playlist.playlist_id)
;pug_debug_line = 6;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
const url = '/playlist/' + "detail/" + playlist_id ;
;pug_debug_line = 7;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
const isShare = (null === playlist.share_id ? 'False' : playlist.share_id)
;pug_debug_line = 8;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"playlist_card card m-3\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"playlist_cover\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cspan class=\"playlist_page_playlist_id\" style=\"display: none;\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = playlist_id) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"playlist_cover_image\""+pug_attr("href", url, true, false)) + "\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
if ((isShare === 'False')) {
;pug_debug_line = 13;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cimg class=\"card-img-top\" src=\"\u002Fimages\u002Fmusic_cover_default_white.png\"\u002F\u003E";
}
else {
;pug_debug_line = 15;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cimg class=\"card-img-top\" src=\"\u002Fimages\u002Fmusic_cover_default_black.png\"\u002F\u003E";
}
pug_html = pug_html + "\u003C\u002Fa\u003E";
;pug_debug_line = 16;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cimg class=\"card-img-top playlist_play_icon\" src=\"\u002Fimages\u002Fcircled_play.png\"\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 17;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body p-0 mt-2 d-inline-flex align-items-center text-center\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"card-text mt-1 text-white noselect playlist_text\""+pug_attr("href", url, true, false)) + "\u003E";
;pug_debug_line = 18;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = playlist_name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
;pug_debug_line = 19;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 20;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Ci class=\"far fa-circle text-white noselect playlist_select\" style=\"display: none;\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var playlist = $$obj[pug_index0];
;pug_debug_line = 3;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
const playlist_name = (null === playlist.title ? 'Untitled' : playlist.title)
;pug_debug_line = 4;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
const playlist_path = '/playlists/' + playlist.title
;pug_debug_line = 5;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
const playlist_id = (null === playlist.playlist_id ? '' : playlist.playlist_id)
;pug_debug_line = 6;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
const url = '/playlist/' + "detail/" + playlist_id ;
;pug_debug_line = 7;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
const isShare = (null === playlist.share_id ? 'False' : playlist.share_id)
;pug_debug_line = 8;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"playlist_card card m-3\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"playlist_cover\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cspan class=\"playlist_page_playlist_id\" style=\"display: none;\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = playlist_id) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"playlist_cover_image\""+pug_attr("href", url, true, false)) + "\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
if ((isShare === 'False')) {
;pug_debug_line = 13;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cimg class=\"card-img-top\" src=\"\u002Fimages\u002Fmusic_cover_default_white.png\"\u002F\u003E";
}
else {
;pug_debug_line = 15;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cimg class=\"card-img-top\" src=\"\u002Fimages\u002Fmusic_cover_default_black.png\"\u002F\u003E";
}
pug_html = pug_html + "\u003C\u002Fa\u003E";
;pug_debug_line = 16;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cimg class=\"card-img-top playlist_play_icon\" src=\"\u002Fimages\u002Fcircled_play.png\"\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 17;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body p-0 mt-2 d-inline-flex align-items-center text-center\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"card-text mt-1 text-white noselect playlist_text\""+pug_attr("href", url, true, false)) + "\u003E";
;pug_debug_line = 18;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = playlist_name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
;pug_debug_line = 19;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 20;pug_debug_filename = "views\u002F\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Ci class=\"far fa-circle text-white noselect playlist_select\" style=\"display: none;\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";}.call(this,"playlists" in locals_for_with?locals_for_with.playlists:typeof playlists!=="undefined"?playlists:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}