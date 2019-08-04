function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function loginFormTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"views\u002F\u002Flogin_form.pug":"extends layout_register_login\n\nblock content\n    \u002F\u002F - custom css (see in public\u002Fstylesheets\u002Fstyly.css\n        .login-form-col\n        .btn-style\n        .icn-style\n        .icn-text-style\n    .container-fluid.h-100.p-0\n        .row.justify-content-center.align-items-center.p-0.mt-3\n            i.material-icons.mr-2.icn-style library_music\n            p.text-white.m-0.icn-text-style MusicBox\n        hr\n        .row.justify-content-center.align-items-center.p-0.mx-auto.login-form-col\n            .col.mx-auto.p-0\n                h5.text-white.text-center.font-weight-bold.mb-4 To continue, log in to MusicBox.\n                form(method='post', action='')\n                    .form-group\n                        input#user_name.form-control.mx-auto(type='text'\n                            placeholder='Email address or username' name='username' required\n                        value=(undefined === user ? '' : user.username))\n\n                    .form-group\n                        input#password.form-control.mx-auto(type='password'\n                            placeholder='Password' name='password' required\n                        value=(undefined === user ? '' : user.password))\n\n                    .row.justify-content-center.align-items-center.m-0.login-form-col\n                        .col-sm-5.p-0\n                            .form-check-inline\n                                input#password_checkbox.form-check-input(type='checkbox'\n                                        onclick=\"show_hidden_password()\")\n                                label.form-check-label.text-white(for='password_checkbox') Show Password\n                        .col-sm-7.p-0\n                            button.btn.btn-outline-primary.btn-block.btn-style(type='submit') LOG IN\n\n                if errors\n                    ul.mt-2\n                        for error in errors\n                            li.text-danger!= error.msg\n                    \n                hr.mt-5.mr-5\n                h5.text-white.text-center.font-weight-bold.mb-4 Don't have an account?\n\n                a.button.btn.btn-outline-primary.btn-block.btn-style(href=\"\u002Fregister\") SIGN UP FOR MUSICBOX\n\n","views\u002Flayout_register_login.pug":"doctype\nhtml(lang='en')\n    head\n        meta(charset='utf-8')\n        meta(name='viewport', content='width=device-width, initial-scale=1, shrink-to-fit=no')\n        meta(http-equiv='x-ua-compatible', content='ie=edge')\n        title MusicBox\n        link(rel='stylesheet' href=\"https:\u002F\u002Fmaxcdn.bootstrapcdn.com\u002Fbootstrap\u002F4.3.1\u002Fcss\u002Fbootstrap.min.css\")\n        link(href='https:\u002F\u002Ffonts.googleapis.com\u002Ficon?family=Material+Icons', rel='stylesheet')\n        link(rel='stylesheet', href='\u002Fstylesheets\u002Fstyle.css')\n        link(rel=\"stylesheet\" href=\"\u002Ffontawesome\u002Fcss\u002Fall.css\")\n        script(src=\"https:\u002F\u002Fajax.googleapis.com\u002Fajax\u002Flibs\u002Fjquery\u002F3.4.1\u002Fjquery.min.js\")\n        script(src=\"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fpopper.js\u002F1.14.7\u002Fumd\u002Fpopper.min.js\")\n        script(src=\"https:\u002F\u002Fmaxcdn.bootstrapcdn.com\u002Fbootstrap\u002F4.3.1\u002Fjs\u002Fbootstrap.min.js\")\n        script(src='\u002Fjavascripts\u002Fshow_and_hidden_password.js')\n\n    body\n        block content"};
;var locals_for_with = (locals || {});(function (errors, user) {;pug_debug_line = 1;pug_debug_filename = "views\u002Flayout_register_login.pug";
pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Flayout_register_login.pug";
pug_html = pug_html + "\u003Chtml lang=\"en\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002Flayout_register_login.pug";
pug_html = pug_html + "\u003Chead\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002Flayout_register_login.pug";
pug_html = pug_html + "\u003Cmeta charset=\"utf-8\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002Flayout_register_login.pug";
pug_html = pug_html + "\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002Flayout_register_login.pug";
pug_html = pug_html + "\u003Cmeta http-equiv=\"x-ua-compatible\" content=\"ie=edge\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002Flayout_register_login.pug";
pug_html = pug_html + "\u003Ctitle\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002Flayout_register_login.pug";
pug_html = pug_html + "MusicBox\u003C\u002Ftitle\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002Flayout_register_login.pug";
pug_html = pug_html + "\u003Clink rel=\"stylesheet\" href=\"https:\u002F\u002Fmaxcdn.bootstrapcdn.com\u002Fbootstrap\u002F4.3.1\u002Fcss\u002Fbootstrap.min.css\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002Flayout_register_login.pug";
pug_html = pug_html + "\u003Clink href=\"https:\u002F\u002Ffonts.googleapis.com\u002Ficon?family=Material+Icons\" rel=\"stylesheet\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Flayout_register_login.pug";
pug_html = pug_html + "\u003Clink rel=\"stylesheet\" href=\"\u002Fstylesheets\u002Fstyle.css\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002Flayout_register_login.pug";
pug_html = pug_html + "\u003Clink rel=\"stylesheet\" href=\"\u002Ffontawesome\u002Fcss\u002Fall.css\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Flayout_register_login.pug";
pug_html = pug_html + "\u003Cscript src=\"https:\u002F\u002Fajax.googleapis.com\u002Fajax\u002Flibs\u002Fjquery\u002F3.4.1\u002Fjquery.min.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 13;pug_debug_filename = "views\u002Flayout_register_login.pug";
pug_html = pug_html + "\u003Cscript src=\"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fpopper.js\u002F1.14.7\u002Fumd\u002Fpopper.min.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 14;pug_debug_filename = "views\u002Flayout_register_login.pug";
pug_html = pug_html + "\u003Cscript src=\"https:\u002F\u002Fmaxcdn.bootstrapcdn.com\u002Fbootstrap\u002F4.3.1\u002Fjs\u002Fbootstrap.min.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\u002Flayout_register_login.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fjavascripts\u002Fshow_and_hidden_password.js\"\u003E\u003C\u002Fscript\u003E\u003C\u002Fhead\u003E";
;pug_debug_line = 17;pug_debug_filename = "views\u002Flayout_register_login.pug";
pug_html = pug_html + "\u003Cbody\u003E";
;pug_debug_line = 18;pug_debug_filename = "views\u002Flayout_register_login.pug";
;pug_debug_line = 4;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "\u003C!-- - custom css (see in public\u002Fstylesheets\u002Fstyly.css";
;pug_debug_line = 5;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + ".login-form-col";
;pug_debug_line = 6;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 6;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + ".btn-style";
;pug_debug_line = 7;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 7;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + ".icn-style";
;pug_debug_line = 8;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 8;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + ".icn-text-style--\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "\u003Cdiv class=\"container-fluid h-100 p-0\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "\u003Cdiv class=\"row justify-content-center align-items-center p-0 mt-3\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons mr-2 icn-style\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "library_music\u003C\u002Fi\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "\u003Cp class=\"text-white m-0 icn-text-style\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "MusicBox\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 13;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "\u003Chr\u003E";
;pug_debug_line = 14;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "\u003Cdiv class=\"row justify-content-center align-items-center p-0 mx-auto login-form-col\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "\u003Cdiv class=\"col mx-auto p-0\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "\u003Ch5 class=\"text-white text-center font-weight-bold mb-4\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "To continue, log in to MusicBox.\u003C\u002Fh5\u003E";
;pug_debug_line = 17;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "\u003Cform method=\"post\" action=\"\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"form-control mx-auto\""+" id=\"user_name\" type=\"text\" placeholder=\"Email address or username\" name=\"username\""+pug_attr("required", true, true, true)+pug_attr("value", (undefined === user ? '' : user.username), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 23;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"form-control mx-auto\""+" id=\"password\" type=\"password\" placeholder=\"Password\" name=\"password\""+pug_attr("required", true, true, true)+pug_attr("value", (undefined === user ? '' : user.password), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 28;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "\u003Cdiv class=\"row justify-content-center align-items-center m-0 login-form-col\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-5 p-0\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-check-inline\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "\u003Cinput class=\"form-check-input\" id=\"password_checkbox\" type=\"checkbox\" onclick=\"show_hidden_password()\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "\u003Clabel class=\"form-check-label text-white\" for=\"password_checkbox\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "Show Password\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 34;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-7 p-0\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-outline-primary btn-block btn-style\" type=\"submit\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "LOG IN\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E";
;pug_debug_line = 37;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
if (errors) {
;pug_debug_line = 38;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "\u003Cul class=\"mt-2\"\u003E";
;pug_debug_line = 39;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
// iterate errors
;(function(){
  var $$obj = errors;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var error = $$obj[pug_index0];
;pug_debug_line = 40;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "\u003Cli class=\"text-danger\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + (null == (pug_interp = error.msg) ? "" : pug_interp) + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var error = $$obj[pug_index0];
;pug_debug_line = 40;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "\u003Cli class=\"text-danger\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + (null == (pug_interp = error.msg) ? "" : pug_interp) + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E";
}
;pug_debug_line = 42;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "\u003Chr class=\"mt-5 mr-5\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "\u003Ch5 class=\"text-white text-center font-weight-bold mb-4\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "Don't have an account?\u003C\u002Fh5\u003E";
;pug_debug_line = 45;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "\u003Ca class=\"button btn btn-outline-primary btn-block btn-style\" href=\"\u002Fregister\"\u003E";
;pug_debug_line = 45;pug_debug_filename = "views\u002F\u002Flogin_form.pug";
pug_html = pug_html + "SIGN UP FOR MUSICBOX\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";}.call(this,"errors" in locals_for_with?locals_for_with.errors:typeof errors!=="undefined"?errors:undefined,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}