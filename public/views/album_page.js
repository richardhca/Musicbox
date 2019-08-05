function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function albumPageTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"views\u002F\u002Falbum_page.pug":"#album_page_detail.d-flex.flex-wrap.align-content-start\n    for album in albums\n        - const album_name = (null === album.title ? 'None' : album.title);\n        - const default_cover = '\u002Fimages\u002Fmusic_cover_default_black.png'\n        - const album_cover = (null === album.cover_art_file_name ? default_cover : '\u002Fcovers\u002F' + album.cover_art_file_name)\n        - const album_id = (null === album.id ? 'None' : album.id);\n        - const url = '\u002Falbum\u002Fdetail\u002F' + album_id;\n        .album_card.card.m-3\n            div.album_cover\n                span.album_page_album_id(style='display: none;') #{album_id}\n                a.album_cover_image(href=url)\n                    img.card-img-top(src=album_cover)\n                img.card-img-top.album_play_icon(src='\u002Fimages\u002Fcircled_play.png' href=url)\n            .card-body.p-0.mt-2.d-inline-flex.align-items-center.text-center\n                a.card-text.mt-1.text-white.noselect.album_text(href=url) #{album.title}\n                div\n                    i.far.fa-circle.text-white.noselect.album_select(style='display: none;')"};
;var locals_for_with = (locals || {});(function (albums) {;pug_debug_line = 1;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex flex-wrap align-content-start\" id=\"album_page_detail\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
// iterate albums
;(function(){
  var $$obj = albums;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var album = $$obj[pug_index0];
;pug_debug_line = 3;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
const album_name = (null === album.title ? 'None' : album.title);
;pug_debug_line = 4;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
const default_cover = '/images/music_cover_default_black.png'
;pug_debug_line = 5;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
const album_cover = (null === album.cover_art_file_name ? default_cover : '/covers/' + album.cover_art_file_name)
;pug_debug_line = 6;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
const album_id = (null === album.id ? 'None' : album.id);
;pug_debug_line = 7;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
const url = '/album/detail/' + album_id;
;pug_debug_line = 8;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"album_card card m-3\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"album_cover\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
pug_html = pug_html + "\u003Cspan class=\"album_page_album_id\" style=\"display: none;\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = album_id) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"album_cover_image\""+pug_attr("href", url, true, false)) + "\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"card-img-top\""+pug_attr("src", album_cover, true, false)) + "\u002F\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 13;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"card-img-top album_play_icon\""+" src=\"\u002Fimages\u002Fcircled_play.png\""+pug_attr("href", url, true, false)) + "\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 14;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body p-0 mt-2 d-inline-flex align-items-center text-center\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"card-text mt-1 text-white noselect album_text\""+pug_attr("href", url, true, false)) + "\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = album.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
;pug_debug_line = 16;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 17;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
pug_html = pug_html + "\u003Ci class=\"far fa-circle text-white noselect album_select\" style=\"display: none;\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var album = $$obj[pug_index0];
;pug_debug_line = 3;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
const album_name = (null === album.title ? 'None' : album.title);
;pug_debug_line = 4;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
const default_cover = '/images/music_cover_default_black.png'
;pug_debug_line = 5;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
const album_cover = (null === album.cover_art_file_name ? default_cover : '/covers/' + album.cover_art_file_name)
;pug_debug_line = 6;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
const album_id = (null === album.id ? 'None' : album.id);
;pug_debug_line = 7;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
const url = '/album/detail/' + album_id;
;pug_debug_line = 8;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"album_card card m-3\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"album_cover\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
pug_html = pug_html + "\u003Cspan class=\"album_page_album_id\" style=\"display: none;\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = album_id) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"album_cover_image\""+pug_attr("href", url, true, false)) + "\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"card-img-top\""+pug_attr("src", album_cover, true, false)) + "\u002F\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 13;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"card-img-top album_play_icon\""+" src=\"\u002Fimages\u002Fcircled_play.png\""+pug_attr("href", url, true, false)) + "\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 14;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body p-0 mt-2 d-inline-flex align-items-center text-center\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"card-text mt-1 text-white noselect album_text\""+pug_attr("href", url, true, false)) + "\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = album.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
;pug_debug_line = 16;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 17;pug_debug_filename = "views\u002F\u002Falbum_page.pug";
pug_html = pug_html + "\u003Ci class=\"far fa-circle text-white noselect album_select\" style=\"display: none;\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";}.call(this,"albums" in locals_for_with?locals_for_with.albums:typeof albums!=="undefined"?albums:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}