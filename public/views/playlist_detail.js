function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function playlistDetailTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"views\u002F\u002Fplaylist_detail.pug":"div#playlist_detail.d-flex.w-100\n    - const default_cover = '\u002Fimages\u002Fmusic_cover_default_black.png'\n    - const playlist_name = (null === playlist.title ? \"None\" : playlist.title);\n    - const playlist_cover = (null === playlist.cover_art_file_name ? default_cover : '\u002Fcovers\u002F' + playlist.cover_art_file_name);\n    - const tracks = (null === playlist.tracks ? [] : playlist.tracks);\n    - const isShare = (null === playlist.share_id ? 'False' : 'True')\n    - const playlistID = playlist.playlist_id\n    - const tracks_len = playlist.num_tracks;\n    .row.flex-row\n        #playlist_info.col\n            .d-flex.flex-column\n                #playlist_detail_cover.position-relative.text-center\n                    .album_card.card.mr-5\n                        div.playlist_cover_in_detail_page\n                            .playlist_cover_image\n                                img.card-img-top(src=playlist_cover)\n                            img.card-img-top.playlist_play_icon(src='\u002Fimages\u002Fcircled_play.png')\n                #playlist_detail_intro.position-relative.text-center\n                    h4.text-white.noselect #{playlist_name}\n                    button.btn.btn-secondary(id=\"playlist_detail_play_btn\") PLAY\n                    p.text-white.noselect #{tracks_len} TRACKS\n                    .d-inline-block(id=\"playlist_detail_icon_list\")\n                        i.far.fa-heart.text-white.d-inline.mr-4(id=\"like_icon\")\n                        .dropdown.d-inline\n                            i.fas.fa-ellipsis-h.text-white(id=\"playlistDropdownMenu\" role=\"button\"\n                                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style='cursor: pointer;')\n                            .dropdown-menu(aria-labelledby=\"playlistDropdownMenu\")\n                                \u002F\u002Fa.dropdown-item Add to Player\n                                if (isShare === 'False')\n                                    a.dropdown-item(data-toggle=\"modal\" data-target=\"#shareplaylist\") Share\n                                    a.dropdown-item(id='CancelShare') Cancel Share\n                                    a.dropdown-item(id='DelPlaylist') Delete Playlist\n                                else\n                                    a.dropdown-item(id='RejectShare') Reject Share\n\n        #playlist_tracks.col\n            .d-flex\n                #playlist_detail_track_list.list-group\n                    for track in tracks\n                        - const track_name = (null === track.title ? 'None' : track.title)\n                        - const artist_name = (null === track.artists ? 'Anonymous' : track.artists)\n                        - const track_filename = (null === track.file_name ? '' : '\u002Ftracks\u002F'+track.file_name)\n                        - const track_cover = (null === track.cover_art_file_name ? '' : '\u002Fcovers\u002F'+track.cover_art_file_name)\n                        - const track_lyric = (null === track.lyrics ? '' : '..\u002Flyrics\u002F'+track.lyrics)\n                        - const album_name = (undefined === track.album_id ? 'None' : track.album_id.title)\n                        - const genres_name = (null === track.genres ? 'None' : track.genres)\n                        - const duration = (undefined === track.duration ? 'None' : track.duration)\n                        .list-group-item.track_list\n                            .row.flex-nowrap\n                                span.track_list_artist(style='display: none;') #{artist_name}\n                                span.track_list_filename(style='display: none;') #{track_filename}\n                                span.track_list_cover(style='display: none;') #{track_cover}\n                                span.track_lyric(style='display: none;') #{track_lyric}\n                                .col.track_list_icon\n                                    i.material-icons.text-white.noselect music_note\n                                .col.track_list_title\n                                    .text-white.noselect #{track_name}\n                                .col.d-flex.track_list_duration\n                                    .text-white.noselect #{duration}\n                                    .dropdown\n                                        i.material-icons.text-white.noselect.ml-5.track_list_more_icon.hidden_icon(id=\"trackDropdownMenu\"\n                                            role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\") more_horiz\n                                        .dropdown-menu(aria-labelledby=\"trackDropdownMenu\")\n                                            \u002F\u002Fa.dropdown-item Add to Player\n                                            a.dropdown-item Copy Track Link\n                                            \u002F\u002Fa.dropdown-item Share to Other\n                                            a.dropdown-item Delete Track\n\n    include playlist_share","views\u002Fplaylist_share.pug":"- const shareID = playlist.playlist_id;\n.modal.fade(id=\"shareplaylist\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"shareplaylistTitle\" aria-hidden=\"true\")\n    .modal-dialog(role=\"document\")\n        .modal-content.shareplaylist-form\n            .modal-header\n                h1.modal-title(id=\"shareplaylistTitle\") Share Playlist\n            .modal-body\n                .d-flex.justify-content-center\n                    form#newShare(action='\u002Fplaylist\u002F' + shareID + '\u002Fshare' method='post')\n                        label Enter Username: \n                            input#ShareUser(type='text' name='destUser')\n                        .d-flex.justify-content-around\n                            button#confirmShare(type='button' class='btn btn-default btn-sm') Share\n                            button#abortShare(type='button' class='btn btn-default btn-sm' data-dismiss=\"modal\" aria-label=\"Abort\") Cancel\n"};
;var locals_for_with = (locals || {});(function (playlist) {;pug_debug_line = 1;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex w-100\" id=\"playlist_detail\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
const default_cover = '/images/music_cover_default_black.png'
;pug_debug_line = 3;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
const playlist_name = (null === playlist.title ? "None" : playlist.title);
;pug_debug_line = 4;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
const playlist_cover = (null === playlist.cover_art_file_name ? default_cover : '/covers/' + playlist.cover_art_file_name);
;pug_debug_line = 5;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
const tracks = (null === playlist.tracks ? [] : playlist.tracks);
;pug_debug_line = 6;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
const isShare = (null === playlist.share_id ? 'False' : 'True')
;pug_debug_line = 7;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
const playlistID = playlist.playlist_id
;pug_debug_line = 8;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
const tracks_len = playlist.num_tracks;
;pug_debug_line = 9;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"row flex-row\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"col\" id=\"playlist_info\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex flex-column\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"position-relative text-center\" id=\"playlist_detail_cover\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"album_card card mr-5\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"playlist_cover_in_detail_page\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"playlist_cover_image\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"card-img-top\""+pug_attr("src", playlist_cover, true, false)) + "\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 17;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cimg class=\"card-img-top playlist_play_icon\" src=\"\u002Fimages\u002Fcircled_play.png\"\u002F\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 18;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"position-relative text-center\" id=\"playlist_detail_intro\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Ch4 class=\"text-white noselect\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = playlist_name) ? "" : pug_interp)) + "\u003C\u002Fh4\u003E";
;pug_debug_line = 20;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-secondary\" id=\"playlist_detail_play_btn\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "PLAY\u003C\u002Fbutton\u003E";
;pug_debug_line = 21;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cp class=\"text-white noselect\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = tracks_len) ? "" : pug_interp));
;pug_debug_line = 21;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + " TRACKS\u003C\u002Fp\u003E";
;pug_debug_line = 22;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-inline-block\" id=\"playlist_detail_icon_list\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Ci class=\"far fa-heart text-white d-inline mr-4\" id=\"like_icon\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 24;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown d-inline\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-ellipsis-h text-white\" id=\"playlistDropdownMenu\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"cursor: pointer;\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 27;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-menu\" aria-labelledby=\"playlistDropdownMenu\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003C!--a.dropdown-item Add to Player--\u003E";
;pug_debug_line = 29;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
if ((isShare === 'False')) {
;pug_debug_line = 30;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#shareplaylist\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "Share\u003C\u002Fa\u003E";
;pug_debug_line = 31;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\" id=\"CancelShare\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "Cancel Share\u003C\u002Fa\u003E";
;pug_debug_line = 32;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\" id=\"DelPlaylist\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "Delete Playlist\u003C\u002Fa\u003E";
}
else {
;pug_debug_line = 34;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\" id=\"RejectShare\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "Reject Share\u003C\u002Fa\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 36;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"col\" id=\"playlist_tracks\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"list-group\" id=\"playlist_detail_track_list\"\u003E";
;pug_debug_line = 39;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
// iterate tracks
;(function(){
  var $$obj = tracks;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var track = $$obj[pug_index0];
;pug_debug_line = 40;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
const track_name = (null === track.title ? 'None' : track.title)
;pug_debug_line = 41;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
const artist_name = (null === track.artists ? 'Anonymous' : track.artists)
;pug_debug_line = 42;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
const track_filename = (null === track.file_name ? '' : '/tracks/'+track.file_name)
;pug_debug_line = 43;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
const track_cover = (null === track.cover_art_file_name ? '' : '/covers/'+track.cover_art_file_name)
;pug_debug_line = 44;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
const track_lyric = (null === track.lyrics ? '' : '../lyrics/'+track.lyrics)
;pug_debug_line = 45;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
const album_name = (undefined === track.album_id ? 'None' : track.album_id.title)
;pug_debug_line = 46;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
const genres_name = (null === track.genres ? 'None' : track.genres)
;pug_debug_line = 47;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
const duration = (undefined === track.duration ? 'None' : track.duration)
;pug_debug_line = 48;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"list-group-item track_list\"\u003E";
;pug_debug_line = 49;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"row flex-nowrap\"\u003E";
;pug_debug_line = 50;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cspan class=\"track_list_artist\" style=\"display: none;\"\u003E";
;pug_debug_line = 50;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = artist_name) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 51;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cspan class=\"track_list_filename\" style=\"display: none;\"\u003E";
;pug_debug_line = 51;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_filename) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 52;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cspan class=\"track_list_cover\" style=\"display: none;\"\u003E";
;pug_debug_line = 52;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_cover) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 53;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cspan class=\"track_lyric\" style=\"display: none;\"\u003E";
;pug_debug_line = 53;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_lyric) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 54;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_icon\"\u003E";
;pug_debug_line = 55;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons text-white noselect\"\u003E";
;pug_debug_line = 55;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "music_note\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 56;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_title\"\u003E";
;pug_debug_line = 57;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 57;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 58;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"col d-flex track_list_duration\"\u003E";
;pug_debug_line = 59;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 59;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = duration) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 60;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown\"\u003E";
;pug_debug_line = 61;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons text-white noselect ml-5 track_list_more_icon hidden_icon\" id=\"trackDropdownMenu\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\u003E";
;pug_debug_line = 62;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "more_horiz\u003C\u002Fi\u003E";
;pug_debug_line = 63;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-menu\" aria-labelledby=\"trackDropdownMenu\"\u003E";
;pug_debug_line = 64;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003C!--a.dropdown-item Add to Player--\u003E";
;pug_debug_line = 65;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\"\u003E";
;pug_debug_line = 65;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "Copy Track Link\u003C\u002Fa\u003E";
;pug_debug_line = 66;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003C!--a.dropdown-item Share to Other--\u003E";
;pug_debug_line = 67;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\"\u003E";
;pug_debug_line = 67;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "Delete Track\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var track = $$obj[pug_index0];
;pug_debug_line = 40;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
const track_name = (null === track.title ? 'None' : track.title)
;pug_debug_line = 41;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
const artist_name = (null === track.artists ? 'Anonymous' : track.artists)
;pug_debug_line = 42;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
const track_filename = (null === track.file_name ? '' : '/tracks/'+track.file_name)
;pug_debug_line = 43;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
const track_cover = (null === track.cover_art_file_name ? '' : '/covers/'+track.cover_art_file_name)
;pug_debug_line = 44;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
const track_lyric = (null === track.lyrics ? '' : '../lyrics/'+track.lyrics)
;pug_debug_line = 45;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
const album_name = (undefined === track.album_id ? 'None' : track.album_id.title)
;pug_debug_line = 46;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
const genres_name = (null === track.genres ? 'None' : track.genres)
;pug_debug_line = 47;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
const duration = (undefined === track.duration ? 'None' : track.duration)
;pug_debug_line = 48;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"list-group-item track_list\"\u003E";
;pug_debug_line = 49;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"row flex-nowrap\"\u003E";
;pug_debug_line = 50;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cspan class=\"track_list_artist\" style=\"display: none;\"\u003E";
;pug_debug_line = 50;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = artist_name) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 51;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cspan class=\"track_list_filename\" style=\"display: none;\"\u003E";
;pug_debug_line = 51;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_filename) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 52;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cspan class=\"track_list_cover\" style=\"display: none;\"\u003E";
;pug_debug_line = 52;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_cover) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 53;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cspan class=\"track_lyric\" style=\"display: none;\"\u003E";
;pug_debug_line = 53;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_lyric) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 54;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_icon\"\u003E";
;pug_debug_line = 55;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons text-white noselect\"\u003E";
;pug_debug_line = 55;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "music_note\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 56;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_title\"\u003E";
;pug_debug_line = 57;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 57;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 58;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"col d-flex track_list_duration\"\u003E";
;pug_debug_line = 59;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 59;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = duration) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 60;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown\"\u003E";
;pug_debug_line = 61;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons text-white noselect ml-5 track_list_more_icon hidden_icon\" id=\"trackDropdownMenu\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\u003E";
;pug_debug_line = 62;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "more_horiz\u003C\u002Fi\u003E";
;pug_debug_line = 63;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-menu\" aria-labelledby=\"trackDropdownMenu\"\u003E";
;pug_debug_line = 64;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003C!--a.dropdown-item Add to Player--\u003E";
;pug_debug_line = 65;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\"\u003E";
;pug_debug_line = 65;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "Copy Track Link\u003C\u002Fa\u003E";
;pug_debug_line = 66;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003C!--a.dropdown-item Share to Other--\u003E";
;pug_debug_line = 67;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\"\u003E";
;pug_debug_line = 67;pug_debug_filename = "views\u002F\u002Fplaylist_detail.pug";
pug_html = pug_html + "Delete Track\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 1;pug_debug_filename = "views\u002Fplaylist_share.pug";
const shareID = playlist.playlist_id;
;pug_debug_line = 2;pug_debug_filename = "views\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal fade\" id=\"shareplaylist\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"shareplaylistTitle\" aria-hidden=\"true\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-dialog\" role=\"document\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-content shareplaylist-form\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-header\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Ch1 class=\"modal-title\" id=\"shareplaylistTitle\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002Fplaylist_share.pug";
pug_html = pug_html + "Share Playlist\u003C\u002Fh1\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-body\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-center\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Cform" + (" id=\"newShare\""+pug_attr("action", '/playlist/' + shareID + '/share', true, false)+" method=\"post\"") + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002Fplaylist_share.pug";
pug_html = pug_html + "Enter Username: ";
;pug_debug_line = 12;pug_debug_filename = "views\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Cinput id=\"ShareUser\" type=\"text\" name=\"destUser\"\u002F\u003E\u003C\u002Flabel\u003E";
;pug_debug_line = 13;pug_debug_filename = "views\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-around\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "views\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-default btn-sm\" id=\"confirmShare\" type=\"button\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "views\u002Fplaylist_share.pug";
pug_html = pug_html + "Share\u003C\u002Fbutton\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-default btn-sm\" id=\"abortShare\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Abort\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\u002Fplaylist_share.pug";
pug_html = pug_html + "Cancel\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"playlist" in locals_for_with?locals_for_with.playlist:typeof playlist!=="undefined"?playlist:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}