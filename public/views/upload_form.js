function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function uploadFormTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"views\u002F\u002Fupload_form.pug":".modal.fade(id=\"uploadpane\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"uploadpaneTitle\" aria-hidden=\"true\")\n    .modal-dialog(role=\"document\")\n        .modal-content.upload-form\n            .modal-header\n                h1.modal-title(id=\"uploadpaneTitle\") Upload Music\n                button.close(type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\")\n                    span(aria-hidden=\"true\") &times;\n            .modal-body\n                p Upload Your mp3 \u002F wav files here!\n                form#uf(action='\u002Fupload' method='post' enctype='multipart\u002Fform-data')\n                    input#sf(type='file' name='tracks' accept='audio\u002Fmp3, audio\u002Fwav'\n                        style='display: none;' multiple)\n                    input#pickfiles.upload-button(type='button' class='btn btn-default btn-sm' value='Select'\n                        onclick=\"document.getElementById('sf').click()\")\n                    input#uploadfiles.upload-button(type='button' class='btn btn-default btn-sm' value='Upload')\n\n                div#filelist"};
;pug_debug_line = 1;pug_debug_filename = "views\u002F\u002Fupload_form.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal fade\" id=\"uploadpane\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"uploadpaneTitle\" aria-hidden=\"true\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002F\u002Fupload_form.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-dialog\" role=\"document\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002F\u002Fupload_form.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-content upload-form\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002F\u002Fupload_form.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-header\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002F\u002Fupload_form.pug";
pug_html = pug_html + "\u003Ch1 class=\"modal-title\" id=\"uploadpaneTitle\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002F\u002Fupload_form.pug";
pug_html = pug_html + "Upload Music\u003C\u002Fh1\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002F\u002Fupload_form.pug";
pug_html = pug_html + "\u003Cbutton class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002F\u002Fupload_form.pug";
pug_html = pug_html + "\u003Cspan aria-hidden=\"true\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002F\u002Fupload_form.pug";
pug_html = pug_html + "&times;\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002F\u002Fupload_form.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-body\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002F\u002Fupload_form.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002F\u002Fupload_form.pug";
pug_html = pug_html + "Upload Your mp3 \u002F wav files here!\u003C\u002Fp\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002F\u002Fupload_form.pug";
pug_html = pug_html + "\u003Cform id=\"uf\" action=\"\u002Fupload\" method=\"post\" enctype=\"multipart\u002Fform-data\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002F\u002Fupload_form.pug";
pug_html = pug_html + "\u003Cinput" + (" id=\"sf\" type=\"file\" name=\"tracks\" accept=\"audio\u002Fmp3, audio\u002Fwav\" style=\"display: none;\""+pug_attr("multiple", true, true, false)) + "\u002F\u003E";
;pug_debug_line = 14;pug_debug_filename = "views\u002F\u002Fupload_form.pug";
pug_html = pug_html + "\u003Cinput class=\"upload-button btn btn-default btn-sm\" id=\"pickfiles\" type=\"button\" value=\"Select\" onclick=\"document.getElementById('sf').click()\"\u002F\u003E";
;pug_debug_line = 16;pug_debug_filename = "views\u002F\u002Fupload_form.pug";
pug_html = pug_html + "\u003Cinput class=\"upload-button btn btn-default btn-sm\" id=\"uploadfiles\" type=\"button\" value=\"Upload\"\u002F\u003E\u003C\u002Fform\u003E";
;pug_debug_line = 18;pug_debug_filename = "views\u002F\u002Fupload_form.pug";
pug_html = pug_html + "\u003Cdiv id=\"filelist\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}