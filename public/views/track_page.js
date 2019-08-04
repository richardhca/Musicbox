function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function trackPageTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"views\u002Ftrack_page.pug":"#track_page_detail\n    #track_page_track_list.list-group\n        .list-group-item.track_list_header\n            .row.flex-nowrap\n                .col.track_list_icon\n                .col\n                    .text-white.noselect Track\n                .col\n                    .text-white.noselect Artist\n                .col\n                    .text-white.noselect Album\n                .col\n                    .text-white.noselect Genres\n                .col\n                    .text-white.noselect Duration\n        for track in tracks\n            - const track_id = track.id\n            - const track_name = (null === track.title ? 'None' : track.title)\n            - const artist_name = (null === track.artists ? 'Anonymous' : track.artists)\n            - const track_filename = (null === track.file_name ? '' : track.file_name)\n            - const track_cover = (null === track.cover_art_file_name ? '' : track.cover_art_file_name)\n            - const track_lyric = (null === track.lyrics ? '' : '..\u002Flyrics\u002F'+track.lyrics)\n            - const album_name = (undefined === track.album_id.title ? 'None' : track.album_id.title)\n            - const genres_name = (null === track.genres ? 'None' : track.genres)\n            - const duration = (undefined === track.duration ? 'None' : track.duration)\n            - const delete_url = (undefined === track.id ? 'None' : '\u002Ftrack\u002Fdelete\u002F' + track.id)\n            .list-group-item.track_list\n                .row.flex-nowrap\n                    span.track_page_track_id(style='display: none;') #{track_id}\n                    span.track_list_filename(style='display: none;') #{track_filename}\n                    span.track_list_cover(style='display: none;') #{track_cover}\n                    span.track_lyric(style='display: none;') #{track_lyric}\n                    .col.track_list_icon\n                        i.material-icons.text-white.noselect(style='cursor: pointer;') music_note\n                    .col.track_list_title\n                        .text-white.noselect #{track_name}\n                    .col.track_list_artist\n                        .text-white.noselect #{artist_name}\n                    .col.track_list_album\n                        .text-white.noselect #{album_name}\n                    .col.track_list_genres\n                        .text-white.noselect #{genres_name}\n                    .col.d-flex.track_list_duration\n                        .text-white.noselect #{duration}\n                        .dropdown\n                            i.material-icons.text-white.noselect.ml-5.track_list_more_icon.hidden_icon(id=\"trackDropdownMenu\"\n                                role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\") more_horiz\n                            .dropdown-menu(aria-labelledby=\"trackDropdownMenu\")\n                                a.dropdown-item Add to Playlist\n                                a.dropdown-item Copy Track Link\n                                a.dropdown-item Share to Other\n                                a.dropdown-item(id='tack_page_delete_track' href=delete_url) Delete Track\n\n                    \u002F\u002Fi.material-icons.text-white.noselect.ml-5.track_list_more_icon more_horiz\n\n\n\n\n\n\n\n\n"};
;var locals_for_with = (locals || {});(function (tracks) {;pug_debug_line = 1;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv id=\"track_page_detail\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"list-group\" id=\"track_page_track_list\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"list-group-item track_list_header\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"row flex-nowrap\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_icon\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "Track\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "Artist\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "Album\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "Genres\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 14;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "Duration\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 16;pug_debug_filename = "views\u002Ftrack_page.pug";
// iterate tracks
;(function(){
  var $$obj = tracks;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var track = $$obj[pug_index0];
;pug_debug_line = 17;pug_debug_filename = "views\u002Ftrack_page.pug";
const track_id = track.id
;pug_debug_line = 18;pug_debug_filename = "views\u002Ftrack_page.pug";
const track_name = (null === track.title ? 'None' : track.title)
;pug_debug_line = 19;pug_debug_filename = "views\u002Ftrack_page.pug";
const artist_name = (null === track.artists ? 'Anonymous' : track.artists)
;pug_debug_line = 20;pug_debug_filename = "views\u002Ftrack_page.pug";
const track_filename = (null === track.file_name ? '' : track.file_name)
;pug_debug_line = 21;pug_debug_filename = "views\u002Ftrack_page.pug";
const track_cover = (null === track.cover_art_file_name ? '' : track.cover_art_file_name)
;pug_debug_line = 22;pug_debug_filename = "views\u002Ftrack_page.pug";
const track_lyric = (null === track.lyrics ? '' : '../lyrics/'+track.lyrics)
;pug_debug_line = 23;pug_debug_filename = "views\u002Ftrack_page.pug";
const album_name = (undefined === track.album_id.title ? 'None' : track.album_id.title)
;pug_debug_line = 24;pug_debug_filename = "views\u002Ftrack_page.pug";
const genres_name = (null === track.genres ? 'None' : track.genres)
;pug_debug_line = 25;pug_debug_filename = "views\u002Ftrack_page.pug";
const duration = (undefined === track.duration ? 'None' : track.duration)
;pug_debug_line = 26;pug_debug_filename = "views\u002Ftrack_page.pug";
const delete_url = (undefined === track.id ? 'None' : '/track/delete/' + track.id)
;pug_debug_line = 27;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"list-group-item track_list\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"row flex-nowrap\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cspan class=\"track_page_track_id\" style=\"display: none;\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_id) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 30;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cspan class=\"track_list_filename\" style=\"display: none;\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_filename) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 31;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cspan class=\"track_list_cover\" style=\"display: none;\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_cover) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 32;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cspan class=\"track_lyric\" style=\"display: none;\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_lyric) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 33;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_icon\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons text-white noselect\" style=\"cursor: pointer;\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "music_note\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 35;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_title\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 37;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_artist\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = artist_name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 39;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_album\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = album_name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 41;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_genres\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = genres_name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 43;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col d-flex track_list_duration\"\u003E";
;pug_debug_line = 44;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 44;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = duration) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 45;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown\"\u003E";
;pug_debug_line = 46;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons text-white noselect ml-5 track_list_more_icon hidden_icon\" id=\"trackDropdownMenu\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "more_horiz\u003C\u002Fi\u003E";
;pug_debug_line = 48;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-menu\" aria-labelledby=\"trackDropdownMenu\"\u003E";
;pug_debug_line = 49;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\"\u003E";
;pug_debug_line = 49;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "Add to Playlist\u003C\u002Fa\u003E";
;pug_debug_line = 50;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\"\u003E";
;pug_debug_line = 50;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "Copy Track Link\u003C\u002Fa\u003E";
;pug_debug_line = 51;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\"\u003E";
;pug_debug_line = 51;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "Share to Other\u003C\u002Fa\u003E";
;pug_debug_line = 52;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"dropdown-item\""+" id=\"tack_page_delete_track\""+pug_attr("href", delete_url, true, false)) + "\u003E";
;pug_debug_line = 52;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "Delete Track\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 54;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003C!--i.material-icons.text-white.noselect.ml-5.track_list_more_icon more_horiz--\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var track = $$obj[pug_index0];
;pug_debug_line = 17;pug_debug_filename = "views\u002Ftrack_page.pug";
const track_id = track.id
;pug_debug_line = 18;pug_debug_filename = "views\u002Ftrack_page.pug";
const track_name = (null === track.title ? 'None' : track.title)
;pug_debug_line = 19;pug_debug_filename = "views\u002Ftrack_page.pug";
const artist_name = (null === track.artists ? 'Anonymous' : track.artists)
;pug_debug_line = 20;pug_debug_filename = "views\u002Ftrack_page.pug";
const track_filename = (null === track.file_name ? '' : track.file_name)
;pug_debug_line = 21;pug_debug_filename = "views\u002Ftrack_page.pug";
const track_cover = (null === track.cover_art_file_name ? '' : track.cover_art_file_name)
;pug_debug_line = 22;pug_debug_filename = "views\u002Ftrack_page.pug";
const track_lyric = (null === track.lyrics ? '' : '../lyrics/'+track.lyrics)
;pug_debug_line = 23;pug_debug_filename = "views\u002Ftrack_page.pug";
const album_name = (undefined === track.album_id.title ? 'None' : track.album_id.title)
;pug_debug_line = 24;pug_debug_filename = "views\u002Ftrack_page.pug";
const genres_name = (null === track.genres ? 'None' : track.genres)
;pug_debug_line = 25;pug_debug_filename = "views\u002Ftrack_page.pug";
const duration = (undefined === track.duration ? 'None' : track.duration)
;pug_debug_line = 26;pug_debug_filename = "views\u002Ftrack_page.pug";
const delete_url = (undefined === track.id ? 'None' : '/track/delete/' + track.id)
;pug_debug_line = 27;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"list-group-item track_list\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"row flex-nowrap\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cspan class=\"track_page_track_id\" style=\"display: none;\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_id) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 30;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cspan class=\"track_list_filename\" style=\"display: none;\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_filename) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 31;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cspan class=\"track_list_cover\" style=\"display: none;\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_cover) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 32;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cspan class=\"track_lyric\" style=\"display: none;\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_lyric) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 33;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_icon\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons text-white noselect\" style=\"cursor: pointer;\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "music_note\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 35;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_title\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 37;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_artist\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = artist_name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 39;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_album\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = album_name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 41;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_genres\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = genres_name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 43;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col d-flex track_list_duration\"\u003E";
;pug_debug_line = 44;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 44;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = duration) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 45;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown\"\u003E";
;pug_debug_line = 46;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons text-white noselect ml-5 track_list_more_icon hidden_icon\" id=\"trackDropdownMenu\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "more_horiz\u003C\u002Fi\u003E";
;pug_debug_line = 48;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-menu\" aria-labelledby=\"trackDropdownMenu\"\u003E";
;pug_debug_line = 49;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\"\u003E";
;pug_debug_line = 49;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "Add to Playlist\u003C\u002Fa\u003E";
;pug_debug_line = 50;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\"\u003E";
;pug_debug_line = 50;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "Copy Track Link\u003C\u002Fa\u003E";
;pug_debug_line = 51;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\"\u003E";
;pug_debug_line = 51;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "Share to Other\u003C\u002Fa\u003E";
;pug_debug_line = 52;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"dropdown-item\""+" id=\"tack_page_delete_track\""+pug_attr("href", delete_url, true, false)) + "\u003E";
;pug_debug_line = 52;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "Delete Track\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 54;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003C!--i.material-icons.text-white.noselect.ml-5.track_list_more_icon more_horiz--\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"tracks" in locals_for_with?locals_for_with.tracks:typeof tracks!=="undefined"?tracks:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}