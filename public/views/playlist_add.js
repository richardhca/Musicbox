function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function playlistAddTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"views\u002F\u002Fplaylist_add.pug":".modal.fade(id=\"addtracks\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"addtracksTitle\" aria-hidden=\"true\")\n    .modal-dialog(role=\"document\")\n        .modal-content.addtracks-form\n            .modal-header\n                h1.modal-title(id=\"addtracksTitle\") Add Tracks\n            .modal-body\n                - const submit_url = '\u002Fplaylist\u002F' + playlist.playlist_id + '\u002Fadd';\n                .d-flex.justify-content-center\n\n                    form#addTrackForm(action=submit_url method='post')\n                        for track in tracks\n                            - const track_id = track.id\n                            - const track_name = (null === track.title ? 'None' : track.title)\n                            .position-relative\n                                input.add_track_info(type='radio' name='ids' value=track_id)\n                                span#trackName #{track_name}\n                        .d-flex.justify-content-around\n                            button#confirmAdd(type='button' class='btn btn-default btn-sm' data-dismiss=\"modal\" aria-label=\"Abort\") Add\n                            button#abortAdd(type='button' class='btn btn-default btn-sm' data-dismiss=\"modal\" aria-label=\"Abort\") Cancel"};
;var locals_for_with = (locals || {});(function (playlist, tracks) {;pug_debug_line = 1;pug_debug_filename = "views\u002F\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal fade\" id=\"addtracks\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addtracksTitle\" aria-hidden=\"true\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002F\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-dialog\" role=\"document\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002F\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-content addtracks-form\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002F\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-header\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002F\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Ch1 class=\"modal-title\" id=\"addtracksTitle\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002F\u002Fplaylist_add.pug";
pug_html = pug_html + "Add Tracks\u003C\u002Fh1\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002F\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-body\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002F\u002Fplaylist_add.pug";
const submit_url = '/playlist/' + playlist.playlist_id + '/add';
;pug_debug_line = 9;pug_debug_filename = "views\u002F\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-center\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002F\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Cform" + (" id=\"addTrackForm\""+pug_attr("action", submit_url, true, false)+" method=\"post\"") + "\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002F\u002Fplaylist_add.pug";
// iterate tracks
;(function(){
  var $$obj = tracks;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var track = $$obj[pug_index0];
;pug_debug_line = 13;pug_debug_filename = "views\u002F\u002Fplaylist_add.pug";
const track_id = track.id
;pug_debug_line = 14;pug_debug_filename = "views\u002F\u002Fplaylist_add.pug";
const track_name = (null === track.title ? 'None' : track.title)
;pug_debug_line = 15;pug_debug_filename = "views\u002F\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Cdiv class=\"position-relative\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "views\u002F\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"add_track_info\""+" type=\"radio\" name=\"ids\""+pug_attr("value", track_id, true, false)) + "\u002F\u003E";
;pug_debug_line = 17;pug_debug_filename = "views\u002F\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Cspan id=\"trackName\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "views\u002F\u002Fplaylist_add.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_name) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var track = $$obj[pug_index0];
;pug_debug_line = 13;pug_debug_filename = "views\u002F\u002Fplaylist_add.pug";
const track_id = track.id
;pug_debug_line = 14;pug_debug_filename = "views\u002F\u002Fplaylist_add.pug";
const track_name = (null === track.title ? 'None' : track.title)
;pug_debug_line = 15;pug_debug_filename = "views\u002F\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Cdiv class=\"position-relative\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "views\u002F\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"add_track_info\""+" type=\"radio\" name=\"ids\""+pug_attr("value", track_id, true, false)) + "\u002F\u003E";
;pug_debug_line = 17;pug_debug_filename = "views\u002F\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Cspan id=\"trackName\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "views\u002F\u002Fplaylist_add.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_name) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

;pug_debug_line = 18;pug_debug_filename = "views\u002F\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-around\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "views\u002F\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-default btn-sm\" id=\"confirmAdd\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Abort\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "views\u002F\u002Fplaylist_add.pug";
pug_html = pug_html + "Add\u003C\u002Fbutton\u003E";
;pug_debug_line = 20;pug_debug_filename = "views\u002F\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-default btn-sm\" id=\"abortAdd\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Abort\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "views\u002F\u002Fplaylist_add.pug";
pug_html = pug_html + "Cancel\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"playlist" in locals_for_with?locals_for_with.playlist:typeof playlist!=="undefined"?playlist:undefined,"tracks" in locals_for_with?locals_for_with.tracks:typeof tracks!=="undefined"?tracks:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}