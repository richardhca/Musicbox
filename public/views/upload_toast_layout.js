function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function uploadToastLayoutTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"views\u002F\u002Fupload_toast_layout.pug":"div#upload_toast_area\n    .toast.animated(role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\"\n        data-autohide=\"false\")\n        .toast-header\n            div#spinner.mr-auto\n                .spinner-border.spinner-border-sm.text-primary.mr-2(role=\"status\")\n                strong.mr-auto Uploading...\n            div#complete.mr-auto\n                i.fas.fa-check.text-success.mr-2\n                strong.mr-auto Done!\n        .toast-body.p-1(style=\"height: 25px;\")\n            .progress(style=\"height: 16px; width: 250px;\")\n                .progress-bar(role=\"progressbar\" style=\"width: 50%;\")\n"};
;pug_debug_line = 1;pug_debug_filename = "views\u002F\u002Fupload_toast_layout.pug";
pug_html = pug_html + "\u003Cdiv id=\"upload_toast_area\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002F\u002Fupload_toast_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"toast animated\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\" data-autohide=\"false\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002F\u002Fupload_toast_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"toast-header\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002F\u002Fupload_toast_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"mr-auto\" id=\"spinner\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002F\u002Fupload_toast_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"spinner-border spinner-border-sm text-primary mr-2\" role=\"status\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002F\u002Fupload_toast_layout.pug";
pug_html = pug_html + "\u003Cstrong class=\"mr-auto\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002F\u002Fupload_toast_layout.pug";
pug_html = pug_html + "Uploading...\u003C\u002Fstrong\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002F\u002Fupload_toast_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"mr-auto\" id=\"complete\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002F\u002Fupload_toast_layout.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-check text-success mr-2\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002F\u002Fupload_toast_layout.pug";
pug_html = pug_html + "\u003Cstrong class=\"mr-auto\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002F\u002Fupload_toast_layout.pug";
pug_html = pug_html + "Done!\u003C\u002Fstrong\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002F\u002Fupload_toast_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"toast-body p-1\" style=\"height: 25px;\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002F\u002Fupload_toast_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"progress\" style=\"height: 16px; width: 250px;\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "views\u002F\u002Fupload_toast_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"progress-bar\" role=\"progressbar\" style=\"width: 50%;\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}