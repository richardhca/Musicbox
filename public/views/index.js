function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function indexTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"views\u002Findex.pug":"extends layout_index\n\nblock content\n    div#main-area.container-fluid.p-0\n        #container.d-flex.flex-row\n            \u002F\u002F sidebar\n            .d-flex.flex-nowrap\n                #sidebar.list-group.collapse.show.width\n                    #sidebaricon.list-group-item.d-inline-block\n                        i.fas.fa-headphones-alt.d-none.d-lg-inline\n                        span.d-none.d-lg-inline.d-md-none.text-white.noselect MusicBox\n                        span.d-md-inline.d-lg-none.text-white.text-addrev.noselect MB\n\n                    a.list-group-item.d-inline-block.mt-3(href=\"\u002Ftrack\" id=\"track_button\")\n                        i.fas.fa-music.d-inline\n                        span.d-none.d-lg-inline.text-white Track\n\n\n                    a.list-group-item.d-inline-block(href=\"\u002Falbum\" id=\"album_button\")\n                        i.fas.fa-compact-disc.d-inline\n                        span.d-none.d-lg-inline.text-white Album\n\n\n                    a.list-group-item.d-inline-block(href=\"\u002Fplaylist\" id=\"playlist_button\")\n                        i.fas.fa-stream.d-inline\n                        span.d-none.d-lg-inline.text-white Playlist\n\n                    a.list-group-item.d-inline-block.mt-auto\n                        hr\n                        i.fas.fa-user-circle.d-inline\n                        span.d-none.d-lg-inline.text-white Profile\n\n                    a.list-group-item.d-inline-block.mb-4(href=\"\u002Flogout\")\n                        i.fas.fa-sign-out-alt.d-inline\n                        span.d-none.d-lg-inline.text-white Logout\n\n            #app-screen.d-flex.flex-column.flex-grow-1\n\n                #playlist_create\n                    if page === \"playlist_page_get\" || page === \"playlist_create\"\n                        include playlist_create\n\n                #add_to_playlist\n                    if page === \"playlist_detail_get\"\n                        include playlist_add\n\n                #share_playlist\n                    if page === \"playlist_detail_get\"\n                        include playlist_share\n\n                #delete_comfirm\n                    if page === \"track_page_get\" || page === \"track_create\"\n                        include tracks_delete_comfirm_layout\n                    else if page === \"playlist_page_get\" || page === \"playlist_create\"\n                        include playlists_delete_comfirm_layout\n                    else if page === \"album_page_get\"\n                        include albums_delete_comfirm_layout\n                    else if page === \"album_detail_get\"\n                        include albums_delete_comfirm_in_detail_layout\n\n                \u002F\u002F tool area\n                \u002F\u002Finclude upload_form\n                #tool-bar.d-flex.pb-0.pt-4\n                    if page === \"track_page_get\" || page === \"track_create\"\n                        include track_page_tool_bar\n                    else if page === \"playlist_page_get\" || page === \"playlist_create\"\n                        include playlist_page_tool_bar\n                    else if page === \"album_page_get\"\n                        include album_page_tool_bar\n                    else if page === \"album_detail_get\"\n                        include album_detail_tool_bar\n                    else if page === \"playlist_detail_get\"\n                        include playlist_detail_tool_bar\n\n                #search-bar\n                    if page === \"track_page_get\" || page === \"track_create\"\n                        include track_page_search_bar\n                    else if page === \"playlist_page_get\" || page === \"playlist_create\"\n                        include playlist_page_search_bar\n                    else if page === \"album_page_get\"\n                        include album_page_search_bar.html\n\n                \u002F\u002F content area\n                #item-info\n                    #content-area.d-flex.flex-wrap.p-4.align-content-start\n                        if page === \"track_page_get\"\n                            include track_page\n                        else if page === \"playlist_page_get\"\n                            include playlist_page\n                        else if page === \"album_page_get\"\n                            include album_page\n                        else if page === \"album_detail_get\"\n                            include album_detail\n                        else if page === \"playlist_detail_get\"\n                            include playlist_detail\n\n\n\n            .position-absolute.music-player-area\n                include upload_toast_layout\n                \u002F\u002Fdiv#aplayer\n                include aplayer\n\n    script(type='text\u002Fjavascript' src='\u002Fjavascripts\u002Faplayer.js')\n","views\u002Flayout_index.pug":"doctype\nhtml(lang='en')\n    head\n        meta(charset='utf-8')\n        meta(name='viewport', content='width=device-width, initial-scale=1, shrink-to-fit=no')\n        meta(http-equiv='x-ua-compatible', content='ie=edge')\n        title MusicBox\n        \u002F\u002F CSS\n        link(rel='stylesheet' href=\"https:\u002F\u002Fmaxcdn.bootstrapcdn.com\u002Fbootstrap\u002F4.3.1\u002Fcss\u002Fbootstrap.min.css\")\n        link(rel='stylesheet' href=\"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fanimate.css\u002F3.7.2\u002Fanimate.min.css\")\n        link(href='https:\u002F\u002Ffonts.googleapis.com\u002Ficon?family=Material+Icons', rel='stylesheet')\n        link(href='https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Faplayer\u002F1.10.1\u002FAPlayer.min.css', rel='stylesheet')\n        link(rel='stylesheet', href='\u002Fstylesheets\u002Faplayerconfig.css')\n        link(rel='stylesheet', href='\u002Fstylesheets\u002Fstyle.css')\n        link(rel='stylesheet', href='\u002Fstylesheets\u002Fuploadform.css')\n        link(rel='stylesheet', href='\u002Fstylesheets\u002Foperateplaylist.css')\n        link(rel=\"stylesheet\" href=\"\u002Ffontawesome\u002Fcss\u002Fall.css\")\n        \u002F\u002F javscript and jquery\n        script(src='\u002Fjavascripts\u002Fshow_and_hidden_password.js')\n        script(src=\"https:\u002F\u002Fajax.googleapis.com\u002Fajax\u002Flibs\u002Fjquery\u002F3.4.1\u002Fjquery.min.js\")\n        script(src=\"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fpopper.js\u002F1.14.3\u002Fumd\u002Fpopper.min.js\")\n        script(src=\"https:\u002F\u002Fmaxcdn.bootstrapcdn.com\u002Fbootstrap\u002F4.3.1\u002Fjs\u002Fbootstrap.min.js\")\n        script(src='https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Faplayer\u002F1.10.1\u002FAPlayer.min.js')\n        script(src='\u002Fjqueries\u002FloadIndex.js')\n        script(src='\u002Fjqueries\u002FresizeDiv.js')\n        script(src='\u002Fjqueries\u002FloadTrackPageContent.js')\n        script(src='\u002Fjqueries\u002FloadPlaylistPageContent.js')\n        script(src='\u002Fjqueries\u002FloadAlbumPageContent.js')\n        script(src='\u002Fjqueries\u002FloadAlbumDetailContent.js')\n        script(src='\u002Fjqueries\u002FloadPlaylistDetailContent.js')\n        script(src='\u002Fjqueries\u002FuploadFormFeatures.js')\n        script(src='\u002Fjqueries\u002FplayPlaylistFeatures.js')\n        script(src='\u002Fjqueries\u002FtrackListEventHandler.js')\n        script(src='\u002Fjqueries\u002FalbumPlaylistEventHandler.js')\n        script(src='\u002Fjqueries\u002FplaylistPageActionHandler.js')\n        script(src='\u002Fjqueries\u002FtoggleIcon.js')\n        script(src='\u002Fjqueries\u002FsearchHandler.js')\n        script(src='\u002Fbundles\u002FsessionStorageBundle.js')\n\n        \u002F\u002F pug template\n        script(src='\u002Fviews\u002Ftrack_page.js')\n        script(src='\u002Fviews\u002Ftrack_page_tool_bar.js')\n        script(src='\u002Fviews\u002Falbum_page.js')\n        script(src='\u002Fviews\u002Falbum_page_tool_bar.js')\n        script(src='\u002Fviews\u002Falbum_detail.js')\n        script(src='\u002Fviews\u002Falbum_detail_tool_bar.js')\n        script(src='\u002Fviews\u002Fplaylist_page.js')\n        script(src='\u002Fviews\u002Fplaylist_page_tool_bar.js')\n        script(src='\u002Fviews\u002Fplaylist_detail.js')\n        script(src='\u002Fviews\u002Fplaylist_detail_tool_bar.js')\n        script(src='\u002Fviews\u002Ftrack_page_delete_status_tool_bar.js')\n        script(src='\u002Fviews\u002Falbum_page_delete_status_tool_bar.js')\n        script(src='\u002Fviews\u002Fplaylist_page_delete_status_tool_bar.js')\n        script(src='\u002Fviews\u002Fplaylist_add.js')\n        script(src='\u002Fviews\u002Fplaylist_create.js')\n        script(src='\u002Fviews\u002Fplaylist_share.js')\n        script(src='\u002Fviews\u002Ftracks_delete_comfirm_layout.js')\n        script(src='\u002Fviews\u002Falbums_delete_comfirm_layout.js')\n        script(src='\u002Fviews\u002Falbums_delete_comfirm_in_detail_layout.js')\n        script(src='\u002Fviews\u002Fplaylists_delete_comfirm_layout.js')\n        script(src='\u002Fviews\u002Ftrack_page_search_bar.js')\n        script(src='\u002Fviews\u002Falbum_page_search_bar.js')\n        script(src='\u002Fviews\u002Fplaylist_page_search_bar.js')\n\n        \u002F\u002F dev lib\n        script(src='https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fjs-beautify\u002F1.10.1\u002Fbeautify-html.js')\n\n    body.fade-out\n        block content","views\u002Fplaylist_create.pug":".modal.fade(id=\"mkplaylist\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"mkplaylistTitle\" aria-hidden=\"true\")\n    .modal-dialog(role=\"document\")\n        .modal-content.mkplaylist-form\n            .modal-header\n                h1.modal-title(id=\"mkplaylistTitle\") Create Playlist\n            .modal-body\n                .d-flex.justify-content-center\n                    form#newPL(action='\u002Fplaylist\u002Fcreate' method='post')\n                        label Playlist Name: \n                            input#playlistName(type='text' name='PlaylistName' required)\n                        label Privacy: \n                            .privacySelect(style='margin-left: 25%;')\n                                input(type='radio' name='privacy' value='false' checked)\n                                p Private\n                            .privacySelect(style='margin-left: 25px;')\n                                input(type='radio' name='privacy' value='true')\n                                p Public\n                        .d-flex.justify-content-around\n                            button#createPL(type='button' class='btn btn-default btn-sm') Create\n                            button#mkPLabort(type='button' class='btn btn-default btn-sm' data-dismiss=\"modal\" aria-label=\"Abort\") Cancel","views\u002Fplaylist_add.pug":".modal.fade(id=\"addtracks\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"addtracksTitle\" aria-hidden=\"true\")\n    .modal-dialog(role=\"document\")\n        .modal-content.addtracks-form\n            .modal-header\n                h1.modal-title(id=\"addtracksTitle\") Add Tracks\n            .modal-body\n                - const submit_url = '\u002Fplaylist\u002F' + playlist.playlist_id + '\u002Fadd';\n                .d-flex.justify-content-center\n\n                    form#addTrackForm(action=submit_url method='post')\n                        for track in tracks\n                            - const track_id = track.id\n                            - const track_name = (null === track.title ? 'None' : track.title)\n                            .position-relative\n                                input.add_track_info(type='radio' name='ids' value=track_id)\n                                span#trackName #{track_name}\n                        .d-flex.justify-content-around\n                            button#confirmAdd(type='button' class='btn btn-default btn-sm' data-dismiss=\"modal\" aria-label=\"Abort\") Add\n                            button#abortAdd(type='button' class='btn btn-default btn-sm' data-dismiss=\"modal\" aria-label=\"Abort\") Cancel","views\u002Fplaylist_share.pug":"- const shareID = playlist.playlist_id;\n.modal.fade(id=\"shareplaylist\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"shareplaylistTitle\" aria-hidden=\"true\")\n    .modal-dialog(role=\"document\")\n        .modal-content.shareplaylist-form\n            .modal-header\n                h1.modal-title(id=\"shareplaylistTitle\") Share Playlist\n            .modal-body\n                .d-flex.justify-content-center\n                    form#newShare(action='\u002Fplaylist\u002F' + shareID + '\u002Fshare' method='post')\n                        label Enter Username: \n                            input#ShareUser(type='text' name='destUser')\n                        .d-flex.justify-content-around\n                            button#confirmShare(type='button' class='btn btn-default btn-sm') Share\n                            button#abortShare(type='button' class='btn btn-default btn-sm' data-dismiss=\"modal\" aria-label=\"Abort\") Cancel\n","views\u002Ftracks_delete_comfirm_layout.pug":".modal.fade(id=\"tracksDeleteComfirmPane\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"tracksDeleteComfirmTitle\" aria-hidden=\"true\")\n    .modal-dialog(role=\"document\")\n        .modal-content\n            .modal-header\n                h5.modal-title(id=\"tracksDeleteComfirmTitle\")\n                button.close(type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\")\n                    span(aria-hidden=\"true\") &times;\n            .modal-body\n                p Are you sure?\n            .modal-footer\n                button.btn.btn-secondary(type=\"button\" data-dismiss=\"modal\") Close\n                button.btn.btn-primary.delete_track_comfirm(type=\"button\" data-dismiss=\"modal\") Comfirm\n","views\u002Fplaylists_delete_comfirm_layout.pug":".modal.fade(id=\"playlistsDeleteComfirmPane\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"playlistsDeleteComfirmTitle\" aria-hidden=\"true\")\n    .modal-dialog(role=\"document\")\n        .modal-content\n            .modal-header\n                h5.modal-title(id=\"playlistsDeleteComfirmTitle\")\n                button.close(type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\")\n                    span(aria-hidden=\"true\") &times;\n            .modal-body\n                p Are you sure?\n            .modal-footer\n                button.btn.btn-secondary(type=\"button\" data-dismiss=\"modal\") Close\n                button.btn.btn-primary.delete_playlist_comfirm(type=\"button\" data-dismiss=\"modal\") Comfirm\n","views\u002Falbums_delete_comfirm_layout.pug":".modal.fade(id=\"albumsDeleteComfirmPane\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"albumsDeleteComfirmTitle\" aria-hidden=\"true\")\n    .modal-dialog(role=\"document\")\n        .modal-content\n            .modal-header\n                h5.modal-title(id=\"albumsDeleteComfirmTitle\")\n                button.close(type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\")\n                    span(aria-hidden=\"true\") &times;\n            .modal-body\n                p Are you sure?\n            .modal-footer\n                button.btn.btn-secondary(type=\"button\" data-dismiss=\"modal\") Close\n                button.btn.btn-primary.delete_album_comfirm(type=\"button\" data-dismiss=\"modal\") Comfirm\n","views\u002Falbums_delete_comfirm_in_detail_layout.pug":".modal.fade(id=\"albumsDeleteComfirmInDetailPane\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"albumsDeleteComfirmInDetailTitle\" aria-hidden=\"true\")\n    .modal-dialog(role=\"document\")\n        .modal-content\n            .modal-header\n                h5.modal-title(id=\"albumsDeleteComfirmInDetailTitle\")\n                button.close(type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\")\n                    span(aria-hidden=\"true\") &times;\n            .modal-body\n                p Are you sure?\n            .modal-footer\n                button.btn.btn-secondary(type=\"button\" data-dismiss=\"modal\") Close\n                button.btn.btn-primary.delete_album_comfirm_in_detail(type=\"button\" data-dismiss=\"modal\") Comfirm\n","views\u002Ftrack_page_tool_bar.pug":"div#track_page_tool_bar.w-100\n    .d-flex.pl-4.pr-4\n        .cta.mr-3\n            .toggle-btn.change_icon\n            \u002F\u002Fi.fas.fa-bars.tool-bar-icon.mr-3\n        a(id=\"upload_icon\" style='cursor: pointer;')\n            i.fas.fa-cloud-upload-alt.tool-bar-icon.mr-3\n        i.fas.fa-search.tool-bar-icon.mr-3(id=\"track_search\")\n        i.fas.fa-trash-alt.tool-bar-icon.track_delete_icon\n        button.btn.btn-primary(id=\"test\") test\n\n    \u002F\u002Fi.fas.fa-cloud-upload-alt.tool-bar-icon.mr-3(id=\"add_track_icon\"\n    \u002F\u002F    style='cursor: pointer;' onclick=\"document.getElementById('uploadpane').style.display='block';\")\n\n    include upload_form\n","views\u002Fupload_form.pug":".modal.fade(id=\"uploadpane\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"uploadpaneTitle\" aria-hidden=\"true\")\n    .modal-dialog(role=\"document\")\n        .modal-content.upload-form\n            .modal-header\n                h1.modal-title(id=\"uploadpaneTitle\") Upload Music\n                button.close(type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\")\n                    span(aria-hidden=\"true\") &times;\n            .modal-body\n                p Upload Your mp3 \u002F wav files here!\n                form#uf(action='\u002Fupload' method='post' enctype='multipart\u002Fform-data')\n                    input#sf(type='file' name='tracks' accept='audio\u002Fmp3, audio\u002Fwav'\n                        style='display: none;' multiple)\n                    input#pickfiles.upload-button(type='button' class='btn btn-default btn-sm' value='Select'\n                        onclick=\"document.getElementById('sf').click()\")\n                    input#uploadfiles.upload-button(type='button' class='btn btn-default btn-sm' value='Upload')\n\n                div#filelist","views\u002Fplaylist_page_tool_bar.pug":"div#playlist_page_tool_bar.w-100\n    .d-flex.pl-4.pr-4\n        .cta.mr-3\n            .toggle-btn.change_icon\n        a(id=\"add_playlist_icon\")\n            i.fas.fa-plus.tool-bar-icon.mr-3(data-toggle=\"modal\"\n                data-target=\"#mkplaylist\" style='cursor: pointer;')\n        i.fas.fa-search.tool-bar-icon.mr-3(id=\"playlist_search\")\n        i.fas.fa-trash-alt.tool-bar-icon.playlist_delete_icon","views\u002Falbum_page_tool_bar.pug":"div#album_page_tool_bar.w-100\n    .d-flex.pl-4.pr-4\n        .cta.mr-3\n            .toggle-btn.change_icon\n        i.fas.fa-search.tool-bar-icon.mr-3(id=\"album_search\")\n        i.fas.fa-trash-alt.tool-bar-icon.album_delete_icon\n\n","views\u002Falbum_detail_tool_bar.pug":"div#album_detail_tool_bar\n    .d-flex\n        .cta.ml-3\n            .toggle-btn.change_icon\n        \u002F\u002Fi.fas.fa-bars.tool-bar-icon.mr-3","views\u002Fplaylist_detail_tool_bar.pug":"div#playlist_detail_tool_bar\n    .d-flex.ml-3\n        .cta.mr-3\n            .toggle-btn.change_icon\n        \u002F\u002Fa(id=\"add_playlist_icon\")\n        i.fas.fa-plus.tool-bar-icon.mr-3.add_tracks_to_playlist\n        \u002F\u002F(data-toggle=\"modal\"\n        \u002F\u002Fdata-target=\"#addtracks\" style='cursor: pointer;')\n\n","views\u002Ftrack_page_search_bar.pug":".d-flex.track_page_search_area.align-items-center.hidden\n    input.w-100(id=\"track_search_input\" type=\"text\" placeholder=\"Search Tracks...\")\n    i.fas.fa-times(id=\"track_search_close\")","views\u002Fplaylist_page_search_bar.pug":".d-flex.playlist_page_search_area.align-items-center.hidden\n    input.w-100(id=\"playlist_search_input\" type=\"text\" placeholder=\"Search Playlists...\")\n    i.fas.fa-times(id=\"playlist_search_close\")","views\u002Falbum_page_search_bar.html":"\n\u003Cdiv class=\"d-flex album_page_search_area align-items-center hidden\"\u003E\n  \u003Cinput class=\"w-100\" id=\"album_search_input\" type=\"text\" placeholder=\"Search Albums...\"\u002F\u003E\u003Ci class=\"fas fa-times\" id=\"album_search_close\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Fdiv\u003E","views\u002Ftrack_page.pug":"#track_page_detail\n    #track_page_track_list.list-group\n        .list-group-item.track_list_header\n            .row.flex-nowrap\n                .col.track_seclet_icon\n                .col.track_list_icon\n                .col\n                    .text-white.noselect Track\n                .col\n                    .text-white.noselect Artist\n                .col\n                    .text-white.noselect Album\n                .col\n                    .text-white.noselect Genres\n                .col\n                    .text-white.noselect Duration\n        for track in tracks\n            - const track_id = track.id\n            - const track_name = (null === track.title ? 'None' : track.title)\n            - const artist_name = (null === track.artists ? 'Anonymous' : track.artists)\n            - const track_filename = (null === track.file_name ? '' : '\u002Ftracks\u002F'+track.file_name)\n            - const track_cover = (null === track.cover_art_file_name ? '' : '\u002Fcovers\u002F'+track.cover_art_file_name)\n            - const track_lyric = (null === track.lyrics ? '' : '..\u002Flyrics\u002F'+track.lyrics)\n            - const album_name = (null === track.album_id ? 'None' : track.album_id.title)\n            - const genres_name = (null === track.genres ? 'None' : track.genres)\n            - const duration = (undefined === track.duration ? 'None' : track.duration)\n            - const delete_url = (undefined === track.id ? 'None' : '\u002Ftrack\u002Fdelete\u002F' + track.id)\n            .list-group-item.track_list\n                .row.flex-nowrap\n                    span.track_page_track_id(style='display: none;') #{track_id}\n                    span.track_list_filename(style='display: none;') #{track_filename}\n                    span.track_list_cover(style='display: none;') #{track_cover}\n                    span.track_lyric(style='display: none;') #{track_lyric}\n                    .col.track_seclet_icon\n                        i.far.fa-circle.text-white.noselect.track_seclet\n                    .col.track_list_icon\n                        i.material-icons.text-white.noselect(style='cursor: pointer;') music_note\n                    .col.track_list_title\n                        .text-white.noselect #{track_name}\n                    .col.track_list_artist\n                        .text-white.noselect #{artist_name}\n                    .col.track_list_album\n                        .text-white.noselect #{album_name}\n                    .col.track_list_genres\n                        .text-white.noselect #{genres_name}\n                    .col.d-flex.track_list_duration\n                        .text-white.noselect #{duration}\n                        .dropdown\n                            i.material-icons.text-white.noselect.ml-5.track_list_more_icon.hidden_icon(id=\"trackDropdownMenu\"\n                                role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\") more_horiz\n                            .dropdown-menu(aria-labelledby=\"trackDropdownMenu\")\n                                \u002F\u002Fa.dropdown-item Add to Playlist\n                                a.dropdown-item Copy Track Link\n                                \u002F\u002Fa.dropdown-item Share to Other\n                                a.dropdown-item(id='tack_page_delete_track' href=delete_url) Delete Track\n\n                    \u002F\u002Fi.material-icons.text-white.noselect.ml-5.track_list_more_icon more_horiz\n\n\n\n\n\n\n\n\n","views\u002Fplaylist_page.pug":"#playlist_page_detail.d-flex.flex-wrap.align-content-start\n    for playlist in playlists\n        - const playlist_name = (null === playlist.title ? 'Untitled' : playlist.title)\n        - const playlist_path = '\u002Fplaylists\u002F' + playlist.title\n        - const playlist_id = (null === playlist.playlist_id ? '' : playlist.playlist_id)\n        - const url = '\u002Fplaylist\u002F' + \"detail\u002F\" + playlist_id ;\n        - const isShare = (null === playlist.share_id ? 'False' : 'True')\n        .playlist_card.card.m-3\n            div.playlist_cover\n                span.playlist_page_playlist_id(style='display: none;') #{playlist_id}\n                a.playlist_cover_image(href=url)\n                    if (isShare === 'False')\n                        img.card-img-top(src='\u002Fimages\u002Fmusic_cover_default_white.png')\n                    else\n                        img.card-img-top(src='\u002Fimages\u002Fmusic_cover_default_black.png')\n                img.card-img-top.playlist_play_icon(src='\u002Fimages\u002Fcircled_play.png')\n            .card-body.p-0.mt-2.d-inline-flex.align-items-center.text-center\n                a.card-text.mt-1.text-white.noselect.playlist_text(href=url) #{playlist_name}\n                div\n                    i.far.fa-circle.text-white.noselect.playlist_select(style='display: none;')","views\u002Falbum_page.pug":"#album_page_detail.d-flex.flex-wrap.align-content-start\n    for album in albums\n        - const album_name = (null === album.title ? 'None' : album.title);\n        - const default_cover = '\u002Fimages\u002Fmusic_cover_default_black.png'\n        - const album_cover = (null === album.cover_art_file_name ? default_cover : '\u002Fcovers\u002F' + album.cover_art_file_name)\n        - const album_id = (null === album.id ? 'None' : album.id);\n        - const url = '\u002Falbum\u002Fdetail\u002F' + album_id;\n        .album_card.card.m-3\n            div.album_cover\n                span.album_page_album_id(style='display: none;') #{album_id}\n                a.album_cover_image(href=url)\n                    img.card-img-top(src=album_cover)\n                img.card-img-top.album_play_icon(src='\u002Fimages\u002Fcircled_play.png' href=url)\n            .card-body.p-0.mt-2.d-inline-flex.align-items-center.text-center\n                a.card-text.mt-1.text-white.noselect.album_text(href=url) #{album.title}\n                div\n                    i.far.fa-circle.text-white.noselect.album_select(style='display: none;')","views\u002Falbum_detail.pug":"div#album_detail.d-flex.w-100\n    - const default_cover = '\u002Fimages\u002Fmusic_cover_default_black.png'\n    - const album_cover = (null === album.cover_art_file_name ? default_cover : '\u002Fcovers\u002F' + album.cover_art_file_name);\n    - const album_name = (null === album.title ? \"None\" : album.title);\n    - const album_artists = (null === album.artists ? \"None\" : album.artists);\n    - const album_genres = (null === album.genres ? \"None\" : album.genres);\n    - const album_tracks = (null === album.tracks ? [] : album.tracks);\n    - const tracks_len = album_tracks.length;\n    - const album_id = (null === album.id ? 'None' : album.id);\n    - const delete_album_id = (null === album.id ? 'None' : '\u002Falbum\u002Fdelete\u002F' + album_id);\n    .row.flex-row.w-100\n        #album_info.col\n            .d-flex.flex-column\n                #album_detail_cover.position-relative.text-center\n                    .album_card.card.mr-5\n                        div.album_cover_in_detail_page\n                            .album_cover_image\n                                img.card-img-top(src=album_cover)\n                            img.card-img-top.album_play_icon(src='\u002Fimages\u002Fcircled_play.png')\n                #album_detail_intro.position-relative.text-center\n                    h4.text-white.noselect #{album_name}\n                    h4.text-white.noselect  #{album_artists}\n                    h6.text-white.noselect Genres #{album_genres}\n                    button.btn.btn-secondary(id=\"album_detail_play_btn\") PLAY\n                    p.text-white.noselect #{tracks_len} TRACKS\n                    d-inline-block(id=\"album_detail_icon_list\")\n                        i.far.fa-heart.text-white.d-inline.mr-4(id=\"like_icon\")\n                        .dropdown.d-inline\n                            i.fas.fa-ellipsis-h.text-white(id=\"albumDropdownMenu\" role=\"button\"\n                                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style='cursor: pointer;')\n                            .dropdown-menu(aria-labelledby=\"albumDropdownMenu\")\n                                \u002F\u002Fa.dropdown-item Add to Playlist\n                                a.dropdown-item Copy Album Link\n                                \u002F\u002Fa.dropdown-item Share to Other\n                                a.dropdown-item.delete_album_in_detail_page(href=delete_album_id) Delete Album\n\n        #album_tracks.col\n            .d-flex\n                #album_detail_track_list.list-group\n                    for track in album_tracks\n                        - const track_name = (null === track.title ? 'None' : track.title)\n                        - const artist_name = (null === track.artists ? 'Anonymous' : track.artists)\n                        - const track_filename = (null === track.file_name ? '' : '\u002Ftracks\u002F'+track.file_name)\n                        - const track_cover = (null === track.cover_art_file_name ? '' : '\u002Fcovers\u002F'+track.cover_art_file_name)\n                        - const track_lyric = (null === track.lyrics ? '' : '..\u002Flyrics\u002F'+track.lyrics)\n                        - const album_name = (undefined === track.album_id ? 'None' : track.album_id.title)\n                        - const genres_name = (null === track.genres ? 'None' : track.genres)\n                        - const duration = (undefined === track.duration ? 'None' : track.duration)\n                        .list-group-item.track_list\n                            .row.flex-nowrap\n                                span.track_list_artist(style='display: none;') #{artist_name}\n                                span.track_list_filename(style='display: none;') #{track_filename}\n                                span.track_list_cover(style='display: none;') #{track_cover}\n                                span.track_lyric(style='display: none;') #{track_lyric}\n                                .col.track_list_icon\n                                    i.material-icons.text-white.noselect music_note\n                                .col.track_list_title\n                                    .text-white.noselect #{track_name}\n                                .col.d-flex.track_list_duration\n                                    .text-white.noselect #{duration}\n                                    .dropdown\n                                        i.material-icons.text-white.noselect.ml-5.track_list_more_icon.hidden_icon(id=\"trackDropdownMenu\"\n                                            role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\") more_horiz\n                                        .dropdown-menu(aria-labelledby=\"trackDropdownMenu\")\n                                            \u002F\u002Fa.dropdown-item Add to Player\n                                            a.dropdown-item Copy Track Link\n                                            \u002F\u002Fa.dropdown-item Share to Other\n                                            a.dropdown-item Delete Track","views\u002Fplaylist_detail.pug":"div#playlist_detail.d-flex.w-100\n    - const default_cover = '\u002Fimages\u002Fmusic_cover_default_black.png'\n    - const playlist_name = (null === playlist.title ? \"None\" : playlist.title);\n    - const playlist_cover = (null === playlist.cover_art_file_name ? default_cover : '\u002Fcovers\u002F' + playlist.cover_art_file_name);\n    - const tracks = (null === playlist.tracks ? [] : playlist.tracks);\n    - const isShare = (null === playlist.share_id ? 'False' : 'True')\n    - const playlistID = playlist.playlist_id\n    - const tracks_len = playlist.num_tracks;\n    .row.flex-row\n        #playlist_info.col\n            .d-flex.flex-column\n                #playlist_detail_cover.position-relative.text-center\n                    .album_card.card.mr-5\n                        div.playlist_cover_in_detail_page\n                            .playlist_cover_image\n                                img.card-img-top(src=playlist_cover)\n                            img.card-img-top.playlist_play_icon(src='\u002Fimages\u002Fcircled_play.png')\n                #playlist_detail_intro.position-relative.text-center\n                    h4.text-white.noselect #{playlist_name}\n                    button.btn.btn-secondary(id=\"playlist_detail_play_btn\") PLAY\n                    p.text-white.noselect #{tracks_len} TRACKS\n                    .d-inline-block(id=\"playlist_detail_icon_list\")\n                        i.far.fa-heart.text-white.d-inline.mr-4(id=\"like_icon\")\n                        .dropdown.d-inline\n                            i.fas.fa-ellipsis-h.text-white(id=\"playlistDropdownMenu\" role=\"button\"\n                                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style='cursor: pointer;')\n                            .dropdown-menu(aria-labelledby=\"playlistDropdownMenu\")\n                                \u002F\u002Fa.dropdown-item Add to Player\n                                if (isShare === 'False')\n                                    a.dropdown-item(data-toggle=\"modal\" data-target=\"#shareplaylist\") Share\n                                    a.dropdown-item(id='CancelShare') Cancel Share\n                                    a.dropdown-item(id='DelPlaylist') Delete Playlist\n                                else\n                                    a.dropdown-item(id='RejectShare') Reject Share\n\n        #playlist_tracks.col\n            .d-flex\n                #playlist_detail_track_list.list-group\n                    for track in tracks\n                        - const track_name = (null === track.title ? 'None' : track.title)\n                        - const artist_name = (null === track.artists ? 'Anonymous' : track.artists)\n                        - const track_filename = (null === track.file_name ? '' : '\u002Ftracks\u002F'+track.file_name)\n                        - const track_cover = (null === track.cover_art_file_name ? '' : '\u002Fcovers\u002F'+track.cover_art_file_name)\n                        - const track_lyric = (null === track.lyrics ? '' : '..\u002Flyrics\u002F'+track.lyrics)\n                        - const album_name = (undefined === track.album_id ? 'None' : track.album_id.title)\n                        - const genres_name = (null === track.genres ? 'None' : track.genres)\n                        - const duration = (undefined === track.duration ? 'None' : track.duration)\n                        .list-group-item.track_list\n                            .row.flex-nowrap\n                                span.track_list_artist(style='display: none;') #{artist_name}\n                                span.track_list_filename(style='display: none;') #{track_filename}\n                                span.track_list_cover(style='display: none;') #{track_cover}\n                                span.track_lyric(style='display: none;') #{track_lyric}\n                                .col.track_list_icon\n                                    i.material-icons.text-white.noselect music_note\n                                .col.track_list_title\n                                    .text-white.noselect #{track_name}\n                                .col.d-flex.track_list_duration\n                                    .text-white.noselect #{duration}\n                                    .dropdown\n                                        i.material-icons.text-white.noselect.ml-5.track_list_more_icon.hidden_icon(id=\"trackDropdownMenu\"\n                                            role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\") more_horiz\n                                        .dropdown-menu(aria-labelledby=\"trackDropdownMenu\")\n                                            \u002F\u002Fa.dropdown-item Add to Player\n                                            a.dropdown-item Copy Track Link\n                                            \u002F\u002Fa.dropdown-item Share to Other\n                                            a.dropdown-item Delete Track\n\n    include playlist_share","views\u002Fupload_toast_layout.pug":"div#upload_toast_area\n    .toast.animated(role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\"\n        data-autohide=\"false\")\n        .toast-header\n            div#spinner.mr-auto\n                .spinner-border.spinner-border-sm.text-primary.mr-2(role=\"status\")\n                strong.mr-auto Uploading...\n            div#complete.mr-auto\n                i.fas.fa-check.text-success.mr-2\n                strong.mr-auto Done!\n        .toast-body.p-1(style=\"height: 25px;\")\n            .progress(style=\"height: 16px; width: 250px;\")\n                .progress-bar(role=\"progressbar\" style=\"width: 50%;\")\n","views\u002Faplayer.pug":"#aplayer.aplayer\n    .aplayer-body\n        .aplayer-pic(style='background-color: grey;')\n            .aplayer-button.aplayer-play\n                svg(xmlns='http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg' version='1.1' viewBox='0 0 16 31')\n                    path(d='M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z')\n        .aplayer-info\n            .aplayer-music\n                span.aplayer-title No audio\n                span.aplayer-author\n            .aplayer-lrc\n                .aplayer-lrc-contents(style='transform: translateY(0); -webkit-transform: translateY(0);')\n            .aplayer-controller\n                .aplayer-bar-wrap\n                    .aplayer-bar\n                        .aplayer-loaded(style='width: 0')\n                        .aplayer-played(style='width: 0; background: grey;')\n                            span.aplayer-thumb(style='background: grey;')\n                                span.aplayer-loading-icon\n                                    svg(xmlns='http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg' version='1.1' viewBox='0 0 32 32')\n                                        path(d='M4 16c0-6.6 5.4-12 12-12s12 5.4 12 12c0 1.2-0.8 2-2 2s-2-0.8-2-2c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c1.2 0 2 0.8 2 2s-0.8 2-2 2c-6.6 0-12-5.4-12-12z')\n                .aplayer-time\n                    span.aplayer-time-inner\n                        span.aplayer-ptime 00:00\n                        |  \u002F\n                        span.aplayer-dtime 00:00\n                    span.aplayer-icon.aplayer-icon-back\n                        svg(xmlns='http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg' version='1.1' viewBox='0 0 32 32')\n                            path(d='M25.468 6.947c-0.326-0.172-0.724-0.151-1.030 0.057l-6.438 4.38v-3.553c0-0.371-0.205-0.71-0.532-0.884-0.326-0.172-0.724-0.151-1.030 0.057l-12 8.164c-0.274 0.186-0.438 0.496-0.438 0.827s0.164 0.641 0.438 0.827l12 8.168c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-3.556l6.438 4.382c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-16.333c0-0.371-0.205-0.71-0.532-0.884z')\n                    span.aplayer-icon.aplayer-icon-play\n                        svg(xmlns='http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg' version='1.1' viewBox='0 0 16 31')\n                            path(d='M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z')\n                    span.aplayer-icon.aplayer-icon-forward\n                        svg(xmlns='http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg' version='1.1' viewBox='0 0 32 32')\n                            path(d='M25.468 6.947c-0.326-0.172-0.724-0.151-1.030 0.057l-6.438 4.38v-3.553c0-0.371-0.205-0.71-0.532-0.884-0.326-0.172-0.724-0.151-1.030 0.057l-12 8.164c-0.274 0.186-0.438 0.496-0.438 0.827s0.164 0.641 0.438 0.827l12 8.168c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-3.556l6.438 4.382c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-16.333c0-0.371-0.205-0.71-0.532-0.884z')\n                    .aplayer-volume-wrap\n                        button.aplayer-icon.aplayer-icon-volume-down(type='button')\n                            svg(xmlns='http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg' version='1.1' viewBox='0 0 28 32')\n                                path(d='M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z')\n                        .aplayer-volume-bar-wrap\n                            .aplayer-volume-bar\n                                .aplayer-volume(style='height: 50%; background: grey;')\n                    button.aplayer-icon.aplayer-icon-order(type='button')\n                        svg(xmlns='http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg' version='1.1' viewBox='0 0 32 32')\n                            path(d='M0.622 18.334h19.54v7.55l11.052-9.412-11.052-9.413v7.549h-19.54v3.725z')\n                    button.aplayer-icon.aplayer-icon-loop(type='button')\n                        svg(xmlns='http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg' version='1.1' viewBox='0 0 29 32')\n                            path(d='M2.667 7.027l1.707-1.693 22.293 22.293-1.693 1.707-4-4h-11.64v4l-5.333-5.333 5.333-5.333v4h8.973l-8.973-8.973v0.973h-2.667v-3.64l-4-4zM22.667 17.333h2.667v5.573l-2.667-2.667v-2.907zM22.667 6.667v-4l5.333 5.333-5.333 5.333v-4h-10.907l-2.667-2.667h13.573z')\n                    button.aplayer-icon.aplayer-icon-menu(type='button')\n                        svg(xmlns='http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg' version='1.1' viewBox='0 0 22 32')\n                            path(d='M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z')\n                    button.aplayer-icon.aplayer-icon-lrc(type='button')\n                        svg(xmlns='http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg' version='1.1' viewBox='0 0 32 32')\n                            path(d='M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z')\n        .aplayer-notice\n        .aplayer-miniswitcher\n            button.aplayer-icon\n                svg(xmlns='http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg' version='1.1' viewBox='0 0 32 32')\n                    path(d='M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z')\n    .aplayer-list(style='max-height: 250px')\n        ol(style='max-height: 250px')."};
;var locals_for_with = (locals || {});(function (album, albums, page, playlist, playlists, tracks) {;pug_debug_line = 1;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Chtml lang=\"en\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Chead\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cmeta charset=\"utf-8\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cmeta http-equiv=\"x-ua-compatible\" content=\"ie=edge\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Ctitle\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "MusicBox\u003C\u002Ftitle\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003C!-- CSS--\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Clink rel=\"stylesheet\" href=\"https:\u002F\u002Fmaxcdn.bootstrapcdn.com\u002Fbootstrap\u002F4.3.1\u002Fcss\u002Fbootstrap.min.css\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Clink rel=\"stylesheet\" href=\"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fanimate.css\u002F3.7.2\u002Fanimate.min.css\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Clink href=\"https:\u002F\u002Ffonts.googleapis.com\u002Ficon?family=Material+Icons\" rel=\"stylesheet\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Clink href=\"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Faplayer\u002F1.10.1\u002FAPlayer.min.css\" rel=\"stylesheet\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Clink rel=\"stylesheet\" href=\"\u002Fstylesheets\u002Faplayerconfig.css\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Clink rel=\"stylesheet\" href=\"\u002Fstylesheets\u002Fstyle.css\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Clink rel=\"stylesheet\" href=\"\u002Fstylesheets\u002Fuploadform.css\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Clink rel=\"stylesheet\" href=\"\u002Fstylesheets\u002Foperateplaylist.css\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Clink rel=\"stylesheet\" href=\"\u002Ffontawesome\u002Fcss\u002Fall.css\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003C!-- javscript and jquery--\u003E";
;pug_debug_line = 19;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fjavascripts\u002Fshow_and_hidden_password.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 20;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"https:\u002F\u002Fajax.googleapis.com\u002Fajax\u002Flibs\u002Fjquery\u002F3.4.1\u002Fjquery.min.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 21;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fpopper.js\u002F1.14.3\u002Fumd\u002Fpopper.min.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 22;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"https:\u002F\u002Fmaxcdn.bootstrapcdn.com\u002Fbootstrap\u002F4.3.1\u002Fjs\u002Fbootstrap.min.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 23;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Faplayer\u002F1.10.1\u002FAPlayer.min.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 24;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fjqueries\u002FloadIndex.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 25;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fjqueries\u002FresizeDiv.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 26;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fjqueries\u002FloadTrackPageContent.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 27;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fjqueries\u002FloadPlaylistPageContent.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 28;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fjqueries\u002FloadAlbumPageContent.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 29;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fjqueries\u002FloadAlbumDetailContent.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 30;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fjqueries\u002FloadPlaylistDetailContent.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 31;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fjqueries\u002FuploadFormFeatures.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 32;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fjqueries\u002FplayPlaylistFeatures.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 33;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fjqueries\u002FtrackListEventHandler.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 34;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fjqueries\u002FalbumPlaylistEventHandler.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 35;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fjqueries\u002FplaylistPageActionHandler.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 36;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fjqueries\u002FtoggleIcon.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 37;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fjqueries\u002FsearchHandler.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 38;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fbundles\u002FsessionStorageBundle.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 40;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003C!-- pug template--\u003E";
;pug_debug_line = 41;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fviews\u002Ftrack_page.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 42;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fviews\u002Ftrack_page_tool_bar.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 43;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fviews\u002Falbum_page.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 44;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fviews\u002Falbum_page_tool_bar.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 45;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fviews\u002Falbum_detail.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 46;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fviews\u002Falbum_detail_tool_bar.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 47;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fviews\u002Fplaylist_page.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 48;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fviews\u002Fplaylist_page_tool_bar.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 49;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fviews\u002Fplaylist_detail.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 50;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fviews\u002Fplaylist_detail_tool_bar.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 51;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fviews\u002Ftrack_page_delete_status_tool_bar.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 52;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fviews\u002Falbum_page_delete_status_tool_bar.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 53;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fviews\u002Fplaylist_page_delete_status_tool_bar.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 54;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fviews\u002Fplaylist_add.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 55;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fviews\u002Fplaylist_create.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 56;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fviews\u002Fplaylist_share.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 57;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fviews\u002Ftracks_delete_comfirm_layout.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 58;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fviews\u002Falbums_delete_comfirm_layout.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 59;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fviews\u002Falbums_delete_comfirm_in_detail_layout.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 60;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fviews\u002Fplaylists_delete_comfirm_layout.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 61;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fviews\u002Ftrack_page_search_bar.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 62;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fviews\u002Falbum_page_search_bar.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 63;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fviews\u002Fplaylist_page_search_bar.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 65;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003C!-- dev lib--\u003E";
;pug_debug_line = 66;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cscript src=\"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fjs-beautify\u002F1.10.1\u002Fbeautify-html.js\"\u003E\u003C\u002Fscript\u003E\u003C\u002Fhead\u003E";
;pug_debug_line = 68;pug_debug_filename = "views\u002Flayout_index.pug";
pug_html = pug_html + "\u003Cbody class=\"fade-out\"\u003E";
;pug_debug_line = 69;pug_debug_filename = "views\u002Flayout_index.pug";
;pug_debug_line = 4;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"container-fluid p-0\" id=\"main-area\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex flex-row\" id=\"container\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003C!-- sidebar--\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex flex-nowrap\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"list-group collapse show width\" id=\"sidebar\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"list-group-item d-inline-block\" id=\"sidebaricon\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-headphones-alt d-none d-lg-inline\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Cspan class=\"d-none d-lg-inline d-md-none text-white noselect\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "MusicBox\u003C\u002Fspan\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Cspan class=\"d-md-inline d-lg-none text-white text-addrev noselect\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "MB\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 14;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"list-group-item d-inline-block mt-3\" href=\"\u002Ftrack\" id=\"track_button\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-music d-inline\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 16;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Cspan class=\"d-none d-lg-inline text-white\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "Track\u003C\u002Fspan\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 19;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"list-group-item d-inline-block\" href=\"\u002Falbum\" id=\"album_button\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-compact-disc d-inline\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 21;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Cspan class=\"d-none d-lg-inline text-white\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "Album\u003C\u002Fspan\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 24;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"list-group-item d-inline-block\" href=\"\u002Fplaylist\" id=\"playlist_button\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-stream d-inline\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 26;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Cspan class=\"d-none d-lg-inline text-white\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "Playlist\u003C\u002Fspan\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 28;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"list-group-item d-inline-block mt-auto\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Chr\u003E";
;pug_debug_line = 30;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-user-circle d-inline\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 31;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Cspan class=\"d-none d-lg-inline text-white\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "Profile\u003C\u002Fspan\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 33;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"list-group-item d-inline-block mb-4\" href=\"\u002Flogout\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-sign-out-alt d-inline\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 35;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Cspan class=\"d-none d-lg-inline text-white\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "Logout\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 37;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex flex-column flex-grow-1\" id=\"app-screen\"\u003E";
;pug_debug_line = 39;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv id=\"playlist_create\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "views\u002Findex.pug";
if (page === "playlist_page_get" || page === "playlist_create") {
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
pug_html = pug_html + "\u003Cinput" + (" id=\"playlistName\" type=\"text\" name=\"PlaylistName\""+pug_attr("required", true, true, true)) + "\u003E\u003C\u002Flabel\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "Privacy: ";
;pug_debug_line = 13;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "\u003Cdiv class=\"privacySelect\" style=\"margin-left: 25%;\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "\u003Cinput" + (" type=\"radio\" name=\"privacy\" value=\"false\""+pug_attr("checked", true, true, true)) + "\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "Private\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 16;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "\u003Cdiv class=\"privacySelect\" style=\"margin-left: 25px;\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "views\u002Fplaylist_create.pug";
pug_html = pug_html + "\u003Cinput type=\"radio\" name=\"privacy\" value=\"true\"\u003E";
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
pug_html = pug_html + "Cancel\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 43;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv id=\"add_to_playlist\"\u003E";
;pug_debug_line = 44;pug_debug_filename = "views\u002Findex.pug";
if (page === "playlist_detail_get") {
;pug_debug_line = 1;pug_debug_filename = "views\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal fade\" id=\"addtracks\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addtracksTitle\" aria-hidden=\"true\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-dialog\" role=\"document\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-content addtracks-form\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-header\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Ch1 class=\"modal-title\" id=\"addtracksTitle\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002Fplaylist_add.pug";
pug_html = pug_html + "Add Tracks\u003C\u002Fh1\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-body\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002Fplaylist_add.pug";
const submit_url = '/playlist/' + playlist.playlist_id + '/add';
;pug_debug_line = 9;pug_debug_filename = "views\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-center\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Cform" + (" id=\"addTrackForm\""+pug_attr("action", submit_url, true, true)+" method=\"post\"") + "\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Fplaylist_add.pug";
// iterate tracks
;(function(){
  var $$obj = tracks;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var track = $$obj[pug_index0];
;pug_debug_line = 13;pug_debug_filename = "views\u002Fplaylist_add.pug";
const track_id = track.id
;pug_debug_line = 14;pug_debug_filename = "views\u002Fplaylist_add.pug";
const track_name = (null === track.title ? 'None' : track.title)
;pug_debug_line = 15;pug_debug_filename = "views\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Cdiv class=\"position-relative\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "views\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"add_track_info\""+" type=\"radio\" name=\"ids\""+pug_attr("value", track_id, true, true)) + "\u003E";
;pug_debug_line = 17;pug_debug_filename = "views\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Cspan id=\"trackName\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "views\u002Fplaylist_add.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_name) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var track = $$obj[pug_index0];
;pug_debug_line = 13;pug_debug_filename = "views\u002Fplaylist_add.pug";
const track_id = track.id
;pug_debug_line = 14;pug_debug_filename = "views\u002Fplaylist_add.pug";
const track_name = (null === track.title ? 'None' : track.title)
;pug_debug_line = 15;pug_debug_filename = "views\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Cdiv class=\"position-relative\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "views\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"add_track_info\""+" type=\"radio\" name=\"ids\""+pug_attr("value", track_id, true, true)) + "\u003E";
;pug_debug_line = 17;pug_debug_filename = "views\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Cspan id=\"trackName\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "views\u002Fplaylist_add.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_name) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

;pug_debug_line = 18;pug_debug_filename = "views\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-around\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "views\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-default btn-sm\" id=\"confirmAdd\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Abort\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "views\u002Fplaylist_add.pug";
pug_html = pug_html + "Add\u003C\u002Fbutton\u003E";
;pug_debug_line = 20;pug_debug_filename = "views\u002Fplaylist_add.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-default btn-sm\" id=\"abortAdd\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Abort\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "views\u002Fplaylist_add.pug";
pug_html = pug_html + "Cancel\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 47;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv id=\"share_playlist\"\u003E";
;pug_debug_line = 48;pug_debug_filename = "views\u002Findex.pug";
if (page === "playlist_detail_get") {
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
pug_html = pug_html + "\u003Cform" + (" id=\"newShare\""+pug_attr("action", '/playlist/' + shareID + '/share', true, true)+" method=\"post\"") + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002Fplaylist_share.pug";
pug_html = pug_html + "Enter Username: ";
;pug_debug_line = 12;pug_debug_filename = "views\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Cinput id=\"ShareUser\" type=\"text\" name=\"destUser\"\u003E\u003C\u002Flabel\u003E";
;pug_debug_line = 13;pug_debug_filename = "views\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-around\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "views\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-default btn-sm\" id=\"confirmShare\" type=\"button\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "views\u002Fplaylist_share.pug";
pug_html = pug_html + "Share\u003C\u002Fbutton\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-default btn-sm\" id=\"abortShare\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Abort\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\u002Fplaylist_share.pug";
pug_html = pug_html + "Cancel\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 51;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv id=\"delete_comfirm\"\u003E";
;pug_debug_line = 52;pug_debug_filename = "views\u002Findex.pug";
if (page === "track_page_get" || page === "track_create") {
;pug_debug_line = 1;pug_debug_filename = "views\u002Ftracks_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal fade\" id=\"tracksDeleteComfirmPane\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"tracksDeleteComfirmTitle\" aria-hidden=\"true\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002Ftracks_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-dialog\" role=\"document\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002Ftracks_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-content\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002Ftracks_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-header\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002Ftracks_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Ch5 class=\"modal-title\" id=\"tracksDeleteComfirmTitle\"\u003E\u003C\u002Fh5\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002Ftracks_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Cbutton class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002Ftracks_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Cspan aria-hidden=\"true\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002Ftracks_delete_comfirm_layout.pug";
pug_html = pug_html + "&times;\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002Ftracks_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-body\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Ftracks_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Ftracks_delete_comfirm_layout.pug";
pug_html = pug_html + "Are you sure?\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002Ftracks_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-footer\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Ftracks_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-secondary\" type=\"button\" data-dismiss=\"modal\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Ftracks_delete_comfirm_layout.pug";
pug_html = pug_html + "Close\u003C\u002Fbutton\u003E";
;pug_debug_line = 13;pug_debug_filename = "views\u002Ftracks_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-primary delete_track_comfirm\" type=\"button\" data-dismiss=\"modal\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "views\u002Ftracks_delete_comfirm_layout.pug";
pug_html = pug_html + "Comfirm\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
else
if (page === "playlist_page_get" || page === "playlist_create") {
;pug_debug_line = 1;pug_debug_filename = "views\u002Fplaylists_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal fade\" id=\"playlistsDeleteComfirmPane\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"playlistsDeleteComfirmTitle\" aria-hidden=\"true\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002Fplaylists_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-dialog\" role=\"document\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002Fplaylists_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-content\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002Fplaylists_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-header\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002Fplaylists_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Ch5 class=\"modal-title\" id=\"playlistsDeleteComfirmTitle\"\u003E\u003C\u002Fh5\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002Fplaylists_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Cbutton class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002Fplaylists_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Cspan aria-hidden=\"true\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002Fplaylists_delete_comfirm_layout.pug";
pug_html = pug_html + "&times;\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002Fplaylists_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-body\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Fplaylists_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Fplaylists_delete_comfirm_layout.pug";
pug_html = pug_html + "Are you sure?\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002Fplaylists_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-footer\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Fplaylists_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-secondary\" type=\"button\" data-dismiss=\"modal\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Fplaylists_delete_comfirm_layout.pug";
pug_html = pug_html + "Close\u003C\u002Fbutton\u003E";
;pug_debug_line = 13;pug_debug_filename = "views\u002Fplaylists_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-primary delete_playlist_comfirm\" type=\"button\" data-dismiss=\"modal\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "views\u002Fplaylists_delete_comfirm_layout.pug";
pug_html = pug_html + "Comfirm\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
else
if (page === "album_page_get") {
;pug_debug_line = 1;pug_debug_filename = "views\u002Falbums_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal fade\" id=\"albumsDeleteComfirmPane\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"albumsDeleteComfirmTitle\" aria-hidden=\"true\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002Falbums_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-dialog\" role=\"document\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002Falbums_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-content\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002Falbums_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-header\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002Falbums_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Ch5 class=\"modal-title\" id=\"albumsDeleteComfirmTitle\"\u003E\u003C\u002Fh5\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002Falbums_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Cbutton class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002Falbums_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Cspan aria-hidden=\"true\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002Falbums_delete_comfirm_layout.pug";
pug_html = pug_html + "&times;\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002Falbums_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-body\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Falbums_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Falbums_delete_comfirm_layout.pug";
pug_html = pug_html + "Are you sure?\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002Falbums_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-footer\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Falbums_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-secondary\" type=\"button\" data-dismiss=\"modal\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Falbums_delete_comfirm_layout.pug";
pug_html = pug_html + "Close\u003C\u002Fbutton\u003E";
;pug_debug_line = 13;pug_debug_filename = "views\u002Falbums_delete_comfirm_layout.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-primary delete_album_comfirm\" type=\"button\" data-dismiss=\"modal\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "views\u002Falbums_delete_comfirm_layout.pug";
pug_html = pug_html + "Comfirm\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
else
if (page === "album_detail_get") {
;pug_debug_line = 1;pug_debug_filename = "views\u002Falbums_delete_comfirm_in_detail_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal fade\" id=\"albumsDeleteComfirmInDetailPane\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"albumsDeleteComfirmInDetailTitle\" aria-hidden=\"true\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002Falbums_delete_comfirm_in_detail_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-dialog\" role=\"document\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002Falbums_delete_comfirm_in_detail_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-content\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002Falbums_delete_comfirm_in_detail_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-header\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002Falbums_delete_comfirm_in_detail_layout.pug";
pug_html = pug_html + "\u003Ch5 class=\"modal-title\" id=\"albumsDeleteComfirmInDetailTitle\"\u003E\u003C\u002Fh5\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002Falbums_delete_comfirm_in_detail_layout.pug";
pug_html = pug_html + "\u003Cbutton class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002Falbums_delete_comfirm_in_detail_layout.pug";
pug_html = pug_html + "\u003Cspan aria-hidden=\"true\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002Falbums_delete_comfirm_in_detail_layout.pug";
pug_html = pug_html + "&times;\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002Falbums_delete_comfirm_in_detail_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-body\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Falbums_delete_comfirm_in_detail_layout.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Falbums_delete_comfirm_in_detail_layout.pug";
pug_html = pug_html + "Are you sure?\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002Falbums_delete_comfirm_in_detail_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-footer\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Falbums_delete_comfirm_in_detail_layout.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-secondary\" type=\"button\" data-dismiss=\"modal\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Falbums_delete_comfirm_in_detail_layout.pug";
pug_html = pug_html + "Close\u003C\u002Fbutton\u003E";
;pug_debug_line = 13;pug_debug_filename = "views\u002Falbums_delete_comfirm_in_detail_layout.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-primary delete_album_comfirm_in_detail\" type=\"button\" data-dismiss=\"modal\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "views\u002Falbums_delete_comfirm_in_detail_layout.pug";
pug_html = pug_html + "Comfirm\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 61;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003C!-- tool area--\u003E";
;pug_debug_line = 62;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003C!--include upload_form--\u003E";
;pug_debug_line = 63;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex pb-0 pt-4\" id=\"tool-bar\"\u003E";
;pug_debug_line = 64;pug_debug_filename = "views\u002Findex.pug";
if (page === "track_page_get" || page === "track_create") {
;pug_debug_line = 1;pug_debug_filename = "views\u002Ftrack_page_tool_bar.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-100\" id=\"track_page_tool_bar\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Ftrack_page_tool_bar.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex pl-4 pr-4\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002Ftrack_page_tool_bar.pug";
pug_html = pug_html + "\u003Cdiv class=\"cta mr-3\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002Ftrack_page_tool_bar.pug";
pug_html = pug_html + "\u003Cdiv class=\"toggle-btn change_icon\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002Ftrack_page_tool_bar.pug";
pug_html = pug_html + "\u003C!--i.fas.fa-bars.tool-bar-icon.mr-3--\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002Ftrack_page_tool_bar.pug";
pug_html = pug_html + "\u003Ca id=\"upload_icon\" style=\"cursor: pointer;\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002Ftrack_page_tool_bar.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-cloud-upload-alt tool-bar-icon mr-3\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002Ftrack_page_tool_bar.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-search tool-bar-icon mr-3\" id=\"track_search\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002Ftrack_page_tool_bar.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-trash-alt tool-bar-icon track_delete_icon\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Ftrack_page_tool_bar.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-primary\" id=\"test\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Ftrack_page_tool_bar.pug";
pug_html = pug_html + "test\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Ftrack_page_tool_bar.pug";
pug_html = pug_html + "\u003C!--i.fas.fa-cloud-upload-alt.tool-bar-icon.mr-3(id=\"add_track_icon\"--\u003E";
;pug_debug_line = 13;pug_debug_filename = "views\u002Ftrack_page_tool_bar.pug";
pug_html = pug_html + "\u003C!--    style='cursor: pointer;' onclick=\"document.getElementById('uploadpane').style.display='block';\")--\u003E";
;pug_debug_line = 1;pug_debug_filename = "views\u002Fupload_form.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal fade\" id=\"uploadpane\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"uploadpaneTitle\" aria-hidden=\"true\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002Fupload_form.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-dialog\" role=\"document\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002Fupload_form.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-content upload-form\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002Fupload_form.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-header\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002Fupload_form.pug";
pug_html = pug_html + "\u003Ch1 class=\"modal-title\" id=\"uploadpaneTitle\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002Fupload_form.pug";
pug_html = pug_html + "Upload Music\u003C\u002Fh1\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002Fupload_form.pug";
pug_html = pug_html + "\u003Cbutton class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002Fupload_form.pug";
pug_html = pug_html + "\u003Cspan aria-hidden=\"true\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002Fupload_form.pug";
pug_html = pug_html + "&times;\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002Fupload_form.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-body\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Fupload_form.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Fupload_form.pug";
pug_html = pug_html + "Upload Your mp3 \u002F wav files here!\u003C\u002Fp\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002Fupload_form.pug";
pug_html = pug_html + "\u003Cform id=\"uf\" action=\"\u002Fupload\" method=\"post\" enctype=\"multipart\u002Fform-data\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Fupload_form.pug";
pug_html = pug_html + "\u003Cinput" + (" id=\"sf\" type=\"file\" name=\"tracks\" accept=\"audio\u002Fmp3, audio\u002Fwav\" style=\"display: none;\""+pug_attr("multiple", true, true, true)) + "\u003E";
;pug_debug_line = 14;pug_debug_filename = "views\u002Fupload_form.pug";
pug_html = pug_html + "\u003Cinput class=\"upload-button btn btn-default btn-sm\" id=\"pickfiles\" type=\"button\" value=\"Select\" onclick=\"document.getElementById('sf').click()\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "views\u002Fupload_form.pug";
pug_html = pug_html + "\u003Cinput class=\"upload-button btn btn-default btn-sm\" id=\"uploadfiles\" type=\"button\" value=\"Upload\"\u003E\u003C\u002Fform\u003E";
;pug_debug_line = 18;pug_debug_filename = "views\u002Fupload_form.pug";
pug_html = pug_html + "\u003Cdiv id=\"filelist\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
else
if (page === "playlist_page_get" || page === "playlist_create") {
;pug_debug_line = 1;pug_debug_filename = "views\u002Fplaylist_page_tool_bar.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-100\" id=\"playlist_page_tool_bar\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Fplaylist_page_tool_bar.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex pl-4 pr-4\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002Fplaylist_page_tool_bar.pug";
pug_html = pug_html + "\u003Cdiv class=\"cta mr-3\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002Fplaylist_page_tool_bar.pug";
pug_html = pug_html + "\u003Cdiv class=\"toggle-btn change_icon\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002Fplaylist_page_tool_bar.pug";
pug_html = pug_html + "\u003Ca id=\"add_playlist_icon\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002Fplaylist_page_tool_bar.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-plus tool-bar-icon mr-3\" data-toggle=\"modal\" data-target=\"#mkplaylist\" style=\"cursor: pointer;\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002Fplaylist_page_tool_bar.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-search tool-bar-icon mr-3\" id=\"playlist_search\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002Fplaylist_page_tool_bar.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-trash-alt tool-bar-icon playlist_delete_icon\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
else
if (page === "album_page_get") {
;pug_debug_line = 1;pug_debug_filename = "views\u002Falbum_page_tool_bar.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-100\" id=\"album_page_tool_bar\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Falbum_page_tool_bar.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex pl-4 pr-4\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002Falbum_page_tool_bar.pug";
pug_html = pug_html + "\u003Cdiv class=\"cta mr-3\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002Falbum_page_tool_bar.pug";
pug_html = pug_html + "\u003Cdiv class=\"toggle-btn change_icon\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002Falbum_page_tool_bar.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-search tool-bar-icon mr-3\" id=\"album_search\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002Falbum_page_tool_bar.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-trash-alt tool-bar-icon album_delete_icon\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
else
if (page === "album_detail_get") {
;pug_debug_line = 1;pug_debug_filename = "views\u002Falbum_detail_tool_bar.pug";
pug_html = pug_html + "\u003Cdiv id=\"album_detail_tool_bar\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Falbum_detail_tool_bar.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002Falbum_detail_tool_bar.pug";
pug_html = pug_html + "\u003Cdiv class=\"cta ml-3\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002Falbum_detail_tool_bar.pug";
pug_html = pug_html + "\u003Cdiv class=\"toggle-btn change_icon\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002Falbum_detail_tool_bar.pug";
pug_html = pug_html + "\u003C!--i.fas.fa-bars.tool-bar-icon.mr-3--\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
else
if (page === "playlist_detail_get") {
;pug_debug_line = 1;pug_debug_filename = "views\u002Fplaylist_detail_tool_bar.pug";
pug_html = pug_html + "\u003Cdiv id=\"playlist_detail_tool_bar\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Fplaylist_detail_tool_bar.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex ml-3\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002Fplaylist_detail_tool_bar.pug";
pug_html = pug_html + "\u003Cdiv class=\"cta mr-3\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002Fplaylist_detail_tool_bar.pug";
pug_html = pug_html + "\u003Cdiv class=\"toggle-btn change_icon\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002Fplaylist_detail_tool_bar.pug";
pug_html = pug_html + "\u003C!--a(id=\"add_playlist_icon\")--\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002Fplaylist_detail_tool_bar.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-plus tool-bar-icon mr-3 add_tracks_to_playlist\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002Fplaylist_detail_tool_bar.pug";
pug_html = pug_html + "\u003C!--(data-toggle=\"modal\"--\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002Fplaylist_detail_tool_bar.pug";
pug_html = pug_html + "\u003C!--data-target=\"#addtracks\" style='cursor: pointer;')--\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 75;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv id=\"search-bar\"\u003E";
;pug_debug_line = 76;pug_debug_filename = "views\u002Findex.pug";
if (page === "track_page_get" || page === "track_create") {
;pug_debug_line = 1;pug_debug_filename = "views\u002Ftrack_page_search_bar.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex track_page_search_area align-items-center hidden\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Ftrack_page_search_bar.pug";
pug_html = pug_html + "\u003Cinput class=\"w-100\" id=\"track_search_input\" type=\"text\" placeholder=\"Search Tracks...\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002Ftrack_page_search_bar.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-times\" id=\"track_search_close\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
}
else
if (page === "playlist_page_get" || page === "playlist_create") {
;pug_debug_line = 1;pug_debug_filename = "views\u002Fplaylist_page_search_bar.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex playlist_page_search_area align-items-center hidden\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Fplaylist_page_search_bar.pug";
pug_html = pug_html + "\u003Cinput class=\"w-100\" id=\"playlist_search_input\" type=\"text\" placeholder=\"Search Playlists...\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002Fplaylist_page_search_bar.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-times\" id=\"playlist_search_close\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
}
else
if (page === "album_page_get") {
pug_html = pug_html + "\n\u003Cdiv class=\"d-flex album_page_search_area align-items-center hidden\"\u003E\n  \u003Cinput class=\"w-100\" id=\"album_search_input\" type=\"text\" placeholder=\"Search Albums...\"\u002F\u003E\u003Ci class=\"fas fa-times\" id=\"album_search_close\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 83;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003C!-- content area--\u003E";
;pug_debug_line = 84;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv id=\"item-info\"\u003E";
;pug_debug_line = 85;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex flex-wrap p-4 align-content-start\" id=\"content-area\"\u003E";
;pug_debug_line = 86;pug_debug_filename = "views\u002Findex.pug";
if (page === "track_page_get") {
;pug_debug_line = 1;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv id=\"track_page_detail\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"list-group\" id=\"track_page_track_list\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"list-group-item track_list_header\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"row flex-nowrap\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_seclet_icon\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_icon\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "Track\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "Artist\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "Album\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 13;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "Genres\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "Duration\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 17;pug_debug_filename = "views\u002Ftrack_page.pug";
// iterate tracks
;(function(){
  var $$obj = tracks;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var track = $$obj[pug_index1];
;pug_debug_line = 18;pug_debug_filename = "views\u002Ftrack_page.pug";
const track_id = track.id
;pug_debug_line = 19;pug_debug_filename = "views\u002Ftrack_page.pug";
const track_name = (null === track.title ? 'None' : track.title)
;pug_debug_line = 20;pug_debug_filename = "views\u002Ftrack_page.pug";
const artist_name = (null === track.artists ? 'Anonymous' : track.artists)
;pug_debug_line = 21;pug_debug_filename = "views\u002Ftrack_page.pug";
const track_filename = (null === track.file_name ? '' : '/tracks/'+track.file_name)
;pug_debug_line = 22;pug_debug_filename = "views\u002Ftrack_page.pug";
const track_cover = (null === track.cover_art_file_name ? '' : '/covers/'+track.cover_art_file_name)
;pug_debug_line = 23;pug_debug_filename = "views\u002Ftrack_page.pug";
const track_lyric = (null === track.lyrics ? '' : '../lyrics/'+track.lyrics)
;pug_debug_line = 24;pug_debug_filename = "views\u002Ftrack_page.pug";
const album_name = (null === track.album_id ? 'None' : track.album_id.title)
;pug_debug_line = 25;pug_debug_filename = "views\u002Ftrack_page.pug";
const genres_name = (null === track.genres ? 'None' : track.genres)
;pug_debug_line = 26;pug_debug_filename = "views\u002Ftrack_page.pug";
const duration = (undefined === track.duration ? 'None' : track.duration)
;pug_debug_line = 27;pug_debug_filename = "views\u002Ftrack_page.pug";
const delete_url = (undefined === track.id ? 'None' : '/track/delete/' + track.id)
;pug_debug_line = 28;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"list-group-item track_list\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"row flex-nowrap\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cspan class=\"track_page_track_id\" style=\"display: none;\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_id) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 31;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cspan class=\"track_list_filename\" style=\"display: none;\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_filename) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 32;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cspan class=\"track_list_cover\" style=\"display: none;\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_cover) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 33;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cspan class=\"track_lyric\" style=\"display: none;\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_lyric) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 34;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_seclet_icon\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Ci class=\"far fa-circle text-white noselect track_seclet\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 36;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_icon\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons text-white noselect\" style=\"cursor: pointer;\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "music_note\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 38;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_title\"\u003E";
;pug_debug_line = 39;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 39;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 40;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_artist\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = artist_name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 42;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_album\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = album_name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 44;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_genres\"\u003E";
;pug_debug_line = 45;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 45;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = genres_name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 46;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col d-flex track_list_duration\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = duration) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 48;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown\"\u003E";
;pug_debug_line = 49;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons text-white noselect ml-5 track_list_more_icon hidden_icon\" id=\"trackDropdownMenu\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\u003E";
;pug_debug_line = 50;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "more_horiz\u003C\u002Fi\u003E";
;pug_debug_line = 51;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-menu\" aria-labelledby=\"trackDropdownMenu\"\u003E";
;pug_debug_line = 52;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003C!--a.dropdown-item Add to Playlist--\u003E";
;pug_debug_line = 53;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\"\u003E";
;pug_debug_line = 53;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "Copy Track Link\u003C\u002Fa\u003E";
;pug_debug_line = 54;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003C!--a.dropdown-item Share to Other--\u003E";
;pug_debug_line = 55;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"dropdown-item\""+" id=\"tack_page_delete_track\""+pug_attr("href", delete_url, true, true)) + "\u003E";
;pug_debug_line = 55;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "Delete Track\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 57;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003C!--i.material-icons.text-white.noselect.ml-5.track_list_more_icon more_horiz--\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var track = $$obj[pug_index1];
;pug_debug_line = 18;pug_debug_filename = "views\u002Ftrack_page.pug";
const track_id = track.id
;pug_debug_line = 19;pug_debug_filename = "views\u002Ftrack_page.pug";
const track_name = (null === track.title ? 'None' : track.title)
;pug_debug_line = 20;pug_debug_filename = "views\u002Ftrack_page.pug";
const artist_name = (null === track.artists ? 'Anonymous' : track.artists)
;pug_debug_line = 21;pug_debug_filename = "views\u002Ftrack_page.pug";
const track_filename = (null === track.file_name ? '' : '/tracks/'+track.file_name)
;pug_debug_line = 22;pug_debug_filename = "views\u002Ftrack_page.pug";
const track_cover = (null === track.cover_art_file_name ? '' : '/covers/'+track.cover_art_file_name)
;pug_debug_line = 23;pug_debug_filename = "views\u002Ftrack_page.pug";
const track_lyric = (null === track.lyrics ? '' : '../lyrics/'+track.lyrics)
;pug_debug_line = 24;pug_debug_filename = "views\u002Ftrack_page.pug";
const album_name = (null === track.album_id ? 'None' : track.album_id.title)
;pug_debug_line = 25;pug_debug_filename = "views\u002Ftrack_page.pug";
const genres_name = (null === track.genres ? 'None' : track.genres)
;pug_debug_line = 26;pug_debug_filename = "views\u002Ftrack_page.pug";
const duration = (undefined === track.duration ? 'None' : track.duration)
;pug_debug_line = 27;pug_debug_filename = "views\u002Ftrack_page.pug";
const delete_url = (undefined === track.id ? 'None' : '/track/delete/' + track.id)
;pug_debug_line = 28;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"list-group-item track_list\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"row flex-nowrap\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cspan class=\"track_page_track_id\" style=\"display: none;\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_id) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 31;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cspan class=\"track_list_filename\" style=\"display: none;\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_filename) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 32;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cspan class=\"track_list_cover\" style=\"display: none;\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_cover) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 33;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cspan class=\"track_lyric\" style=\"display: none;\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_lyric) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 34;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_seclet_icon\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Ci class=\"far fa-circle text-white noselect track_seclet\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 36;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_icon\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons text-white noselect\" style=\"cursor: pointer;\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "music_note\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 38;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_title\"\u003E";
;pug_debug_line = 39;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 39;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 40;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_artist\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = artist_name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 42;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_album\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = album_name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 44;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_genres\"\u003E";
;pug_debug_line = 45;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 45;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = genres_name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 46;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"col d-flex track_list_duration\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = duration) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 48;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown\"\u003E";
;pug_debug_line = 49;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons text-white noselect ml-5 track_list_more_icon hidden_icon\" id=\"trackDropdownMenu\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\u003E";
;pug_debug_line = 50;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "more_horiz\u003C\u002Fi\u003E";
;pug_debug_line = 51;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-menu\" aria-labelledby=\"trackDropdownMenu\"\u003E";
;pug_debug_line = 52;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003C!--a.dropdown-item Add to Playlist--\u003E";
;pug_debug_line = 53;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\"\u003E";
;pug_debug_line = 53;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "Copy Track Link\u003C\u002Fa\u003E";
;pug_debug_line = 54;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003C!--a.dropdown-item Share to Other--\u003E";
;pug_debug_line = 55;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"dropdown-item\""+" id=\"tack_page_delete_track\""+pug_attr("href", delete_url, true, true)) + "\u003E";
;pug_debug_line = 55;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "Delete Track\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 57;pug_debug_filename = "views\u002Ftrack_page.pug";
pug_html = pug_html + "\u003C!--i.material-icons.text-white.noselect.ml-5.track_list_more_icon more_horiz--\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
else
if (page === "playlist_page_get") {
;pug_debug_line = 1;pug_debug_filename = "views\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex flex-wrap align-content-start\" id=\"playlist_page_detail\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Fplaylist_page.pug";
// iterate playlists
;(function(){
  var $$obj = playlists;
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var playlist = $$obj[pug_index2];
;pug_debug_line = 3;pug_debug_filename = "views\u002Fplaylist_page.pug";
const playlist_name = (null === playlist.title ? 'Untitled' : playlist.title)
;pug_debug_line = 4;pug_debug_filename = "views\u002Fplaylist_page.pug";
const playlist_path = '/playlists/' + playlist.title
;pug_debug_line = 5;pug_debug_filename = "views\u002Fplaylist_page.pug";
const playlist_id = (null === playlist.playlist_id ? '' : playlist.playlist_id)
;pug_debug_line = 6;pug_debug_filename = "views\u002Fplaylist_page.pug";
const url = '/playlist/' + "detail/" + playlist_id ;
;pug_debug_line = 7;pug_debug_filename = "views\u002Fplaylist_page.pug";
const isShare = (null === playlist.share_id ? 'False' : 'True')
;pug_debug_line = 8;pug_debug_filename = "views\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"playlist_card card m-3\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"playlist_cover\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cspan class=\"playlist_page_playlist_id\" style=\"display: none;\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Fplaylist_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = playlist_id) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"playlist_cover_image\""+pug_attr("href", url, true, true)) + "\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Fplaylist_page.pug";
if ((isShare === 'False')) {
;pug_debug_line = 13;pug_debug_filename = "views\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cimg class=\"card-img-top\" src=\"\u002Fimages\u002Fmusic_cover_default_white.png\"\u003E";
}
else {
;pug_debug_line = 15;pug_debug_filename = "views\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cimg class=\"card-img-top\" src=\"\u002Fimages\u002Fmusic_cover_default_black.png\"\u003E";
}
pug_html = pug_html + "\u003C\u002Fa\u003E";
;pug_debug_line = 16;pug_debug_filename = "views\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cimg class=\"card-img-top playlist_play_icon\" src=\"\u002Fimages\u002Fcircled_play.png\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 17;pug_debug_filename = "views\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body p-0 mt-2 d-inline-flex align-items-center text-center\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "views\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"card-text mt-1 text-white noselect playlist_text\""+pug_attr("href", url, true, true)) + "\u003E";
;pug_debug_line = 18;pug_debug_filename = "views\u002Fplaylist_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = playlist_name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
;pug_debug_line = 19;pug_debug_filename = "views\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 20;pug_debug_filename = "views\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Ci class=\"far fa-circle text-white noselect playlist_select\" style=\"display: none;\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var playlist = $$obj[pug_index2];
;pug_debug_line = 3;pug_debug_filename = "views\u002Fplaylist_page.pug";
const playlist_name = (null === playlist.title ? 'Untitled' : playlist.title)
;pug_debug_line = 4;pug_debug_filename = "views\u002Fplaylist_page.pug";
const playlist_path = '/playlists/' + playlist.title
;pug_debug_line = 5;pug_debug_filename = "views\u002Fplaylist_page.pug";
const playlist_id = (null === playlist.playlist_id ? '' : playlist.playlist_id)
;pug_debug_line = 6;pug_debug_filename = "views\u002Fplaylist_page.pug";
const url = '/playlist/' + "detail/" + playlist_id ;
;pug_debug_line = 7;pug_debug_filename = "views\u002Fplaylist_page.pug";
const isShare = (null === playlist.share_id ? 'False' : 'True')
;pug_debug_line = 8;pug_debug_filename = "views\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"playlist_card card m-3\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"playlist_cover\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cspan class=\"playlist_page_playlist_id\" style=\"display: none;\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Fplaylist_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = playlist_id) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"playlist_cover_image\""+pug_attr("href", url, true, true)) + "\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Fplaylist_page.pug";
if ((isShare === 'False')) {
;pug_debug_line = 13;pug_debug_filename = "views\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cimg class=\"card-img-top\" src=\"\u002Fimages\u002Fmusic_cover_default_white.png\"\u003E";
}
else {
;pug_debug_line = 15;pug_debug_filename = "views\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cimg class=\"card-img-top\" src=\"\u002Fimages\u002Fmusic_cover_default_black.png\"\u003E";
}
pug_html = pug_html + "\u003C\u002Fa\u003E";
;pug_debug_line = 16;pug_debug_filename = "views\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cimg class=\"card-img-top playlist_play_icon\" src=\"\u002Fimages\u002Fcircled_play.png\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 17;pug_debug_filename = "views\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body p-0 mt-2 d-inline-flex align-items-center text-center\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "views\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"card-text mt-1 text-white noselect playlist_text\""+pug_attr("href", url, true, true)) + "\u003E";
;pug_debug_line = 18;pug_debug_filename = "views\u002Fplaylist_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = playlist_name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
;pug_debug_line = 19;pug_debug_filename = "views\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 20;pug_debug_filename = "views\u002Fplaylist_page.pug";
pug_html = pug_html + "\u003Ci class=\"far fa-circle text-white noselect playlist_select\" style=\"display: none;\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
else
if (page === "album_page_get") {
;pug_debug_line = 1;pug_debug_filename = "views\u002Falbum_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex flex-wrap align-content-start\" id=\"album_page_detail\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Falbum_page.pug";
// iterate albums
;(function(){
  var $$obj = albums;
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var album = $$obj[pug_index3];
;pug_debug_line = 3;pug_debug_filename = "views\u002Falbum_page.pug";
const album_name = (null === album.title ? 'None' : album.title);
;pug_debug_line = 4;pug_debug_filename = "views\u002Falbum_page.pug";
const default_cover = '/images/music_cover_default_black.png'
;pug_debug_line = 5;pug_debug_filename = "views\u002Falbum_page.pug";
const album_cover = (null === album.cover_art_file_name ? default_cover : '/covers/' + album.cover_art_file_name)
;pug_debug_line = 6;pug_debug_filename = "views\u002Falbum_page.pug";
const album_id = (null === album.id ? 'None' : album.id);
;pug_debug_line = 7;pug_debug_filename = "views\u002Falbum_page.pug";
const url = '/album/detail/' + album_id;
;pug_debug_line = 8;pug_debug_filename = "views\u002Falbum_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"album_card card m-3\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002Falbum_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"album_cover\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Falbum_page.pug";
pug_html = pug_html + "\u003Cspan class=\"album_page_album_id\" style=\"display: none;\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Falbum_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = album_id) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002Falbum_page.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"album_cover_image\""+pug_attr("href", url, true, true)) + "\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Falbum_page.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"card-img-top\""+pug_attr("src", album_cover, true, true)) + "\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 13;pug_debug_filename = "views\u002Falbum_page.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"card-img-top album_play_icon\""+" src=\"\u002Fimages\u002Fcircled_play.png\""+pug_attr("href", url, true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 14;pug_debug_filename = "views\u002Falbum_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body p-0 mt-2 d-inline-flex align-items-center text-center\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\u002Falbum_page.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"card-text mt-1 text-white noselect album_text\""+pug_attr("href", url, true, true)) + "\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\u002Falbum_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = album.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
;pug_debug_line = 16;pug_debug_filename = "views\u002Falbum_page.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 17;pug_debug_filename = "views\u002Falbum_page.pug";
pug_html = pug_html + "\u003Ci class=\"far fa-circle text-white noselect album_select\" style=\"display: none;\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var album = $$obj[pug_index3];
;pug_debug_line = 3;pug_debug_filename = "views\u002Falbum_page.pug";
const album_name = (null === album.title ? 'None' : album.title);
;pug_debug_line = 4;pug_debug_filename = "views\u002Falbum_page.pug";
const default_cover = '/images/music_cover_default_black.png'
;pug_debug_line = 5;pug_debug_filename = "views\u002Falbum_page.pug";
const album_cover = (null === album.cover_art_file_name ? default_cover : '/covers/' + album.cover_art_file_name)
;pug_debug_line = 6;pug_debug_filename = "views\u002Falbum_page.pug";
const album_id = (null === album.id ? 'None' : album.id);
;pug_debug_line = 7;pug_debug_filename = "views\u002Falbum_page.pug";
const url = '/album/detail/' + album_id;
;pug_debug_line = 8;pug_debug_filename = "views\u002Falbum_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"album_card card m-3\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002Falbum_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"album_cover\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Falbum_page.pug";
pug_html = pug_html + "\u003Cspan class=\"album_page_album_id\" style=\"display: none;\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Falbum_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = album_id) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002Falbum_page.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"album_cover_image\""+pug_attr("href", url, true, true)) + "\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Falbum_page.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"card-img-top\""+pug_attr("src", album_cover, true, true)) + "\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 13;pug_debug_filename = "views\u002Falbum_page.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"card-img-top album_play_icon\""+" src=\"\u002Fimages\u002Fcircled_play.png\""+pug_attr("href", url, true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 14;pug_debug_filename = "views\u002Falbum_page.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body p-0 mt-2 d-inline-flex align-items-center text-center\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\u002Falbum_page.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"card-text mt-1 text-white noselect album_text\""+pug_attr("href", url, true, true)) + "\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\u002Falbum_page.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = album.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
;pug_debug_line = 16;pug_debug_filename = "views\u002Falbum_page.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 17;pug_debug_filename = "views\u002Falbum_page.pug";
pug_html = pug_html + "\u003Ci class=\"far fa-circle text-white noselect album_select\" style=\"display: none;\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
else
if (page === "album_detail_get") {
;pug_debug_line = 1;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex w-100\" id=\"album_detail\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Falbum_detail.pug";
const default_cover = '/images/music_cover_default_black.png'
;pug_debug_line = 3;pug_debug_filename = "views\u002Falbum_detail.pug";
const album_cover = (null === album.cover_art_file_name ? default_cover : '/covers/' + album.cover_art_file_name);
;pug_debug_line = 4;pug_debug_filename = "views\u002Falbum_detail.pug";
const album_name = (null === album.title ? "None" : album.title);
;pug_debug_line = 5;pug_debug_filename = "views\u002Falbum_detail.pug";
const album_artists = (null === album.artists ? "None" : album.artists);
;pug_debug_line = 6;pug_debug_filename = "views\u002Falbum_detail.pug";
const album_genres = (null === album.genres ? "None" : album.genres);
;pug_debug_line = 7;pug_debug_filename = "views\u002Falbum_detail.pug";
const album_tracks = (null === album.tracks ? [] : album.tracks);
;pug_debug_line = 8;pug_debug_filename = "views\u002Falbum_detail.pug";
const tracks_len = album_tracks.length;
;pug_debug_line = 9;pug_debug_filename = "views\u002Falbum_detail.pug";
const album_id = (null === album.id ? 'None' : album.id);
;pug_debug_line = 10;pug_debug_filename = "views\u002Falbum_detail.pug";
const delete_album_id = (null === album.id ? 'None' : '/album/delete/' + album_id);
;pug_debug_line = 11;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"row flex-row w-100\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"col\" id=\"album_info\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex flex-column\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"position-relative text-center\" id=\"album_detail_cover\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"album_card card mr-5\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"album_cover_in_detail_page\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"album_cover_image\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"card-img-top\""+pug_attr("src", album_cover, true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 19;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cimg class=\"card-img-top album_play_icon\" src=\"\u002Fimages\u002Fcircled_play.png\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 20;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"position-relative text-center\" id=\"album_detail_intro\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Ch4 class=\"text-white noselect\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = album_name) ? "" : pug_interp)) + "\u003C\u002Fh4\u003E";
;pug_debug_line = 22;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Ch4 class=\"text-white noselect\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + " ";
;pug_debug_line = 22;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = album_artists) ? "" : pug_interp)) + "\u003C\u002Fh4\u003E";
;pug_debug_line = 23;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Ch6 class=\"text-white noselect\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "Genres ";
;pug_debug_line = 23;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = album_genres) ? "" : pug_interp)) + "\u003C\u002Fh6\u003E";
;pug_debug_line = 24;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-secondary\" id=\"album_detail_play_btn\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "PLAY\u003C\u002Fbutton\u003E";
;pug_debug_line = 25;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cp class=\"text-white noselect\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = tracks_len) ? "" : pug_interp));
;pug_debug_line = 25;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + " TRACKS\u003C\u002Fp\u003E";
;pug_debug_line = 26;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cd-inline-block id=\"album_detail_icon_list\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Ci class=\"far fa-heart text-white d-inline mr-4\" id=\"like_icon\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 28;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown d-inline\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-ellipsis-h text-white\" id=\"albumDropdownMenu\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"cursor: pointer;\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 31;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-menu\" aria-labelledby=\"albumDropdownMenu\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003C!--a.dropdown-item Add to Playlist--\u003E";
;pug_debug_line = 33;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "Copy Album Link\u003C\u002Fa\u003E";
;pug_debug_line = 34;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003C!--a.dropdown-item Share to Other--\u003E";
;pug_debug_line = 35;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"dropdown-item delete_album_in_detail_page\""+pug_attr("href", delete_album_id, true, true)) + "\u003E";
;pug_debug_line = 35;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "Delete Album\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fd-inline-block\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 37;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"col\" id=\"album_tracks\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex\"\u003E";
;pug_debug_line = 39;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"list-group\" id=\"album_detail_track_list\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "views\u002Falbum_detail.pug";
// iterate album_tracks
;(function(){
  var $$obj = album_tracks;
  if ('number' == typeof $$obj.length) {
      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {
        var track = $$obj[pug_index4];
;pug_debug_line = 41;pug_debug_filename = "views\u002Falbum_detail.pug";
const track_name = (null === track.title ? 'None' : track.title)
;pug_debug_line = 42;pug_debug_filename = "views\u002Falbum_detail.pug";
const artist_name = (null === track.artists ? 'Anonymous' : track.artists)
;pug_debug_line = 43;pug_debug_filename = "views\u002Falbum_detail.pug";
const track_filename = (null === track.file_name ? '' : '/tracks/'+track.file_name)
;pug_debug_line = 44;pug_debug_filename = "views\u002Falbum_detail.pug";
const track_cover = (null === track.cover_art_file_name ? '' : '/covers/'+track.cover_art_file_name)
;pug_debug_line = 45;pug_debug_filename = "views\u002Falbum_detail.pug";
const track_lyric = (null === track.lyrics ? '' : '../lyrics/'+track.lyrics)
;pug_debug_line = 46;pug_debug_filename = "views\u002Falbum_detail.pug";
const album_name = (undefined === track.album_id ? 'None' : track.album_id.title)
;pug_debug_line = 47;pug_debug_filename = "views\u002Falbum_detail.pug";
const genres_name = (null === track.genres ? 'None' : track.genres)
;pug_debug_line = 48;pug_debug_filename = "views\u002Falbum_detail.pug";
const duration = (undefined === track.duration ? 'None' : track.duration)
;pug_debug_line = 49;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"list-group-item track_list\"\u003E";
;pug_debug_line = 50;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"row flex-nowrap\"\u003E";
;pug_debug_line = 51;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cspan class=\"track_list_artist\" style=\"display: none;\"\u003E";
;pug_debug_line = 51;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = artist_name) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 52;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cspan class=\"track_list_filename\" style=\"display: none;\"\u003E";
;pug_debug_line = 52;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_filename) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 53;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cspan class=\"track_list_cover\" style=\"display: none;\"\u003E";
;pug_debug_line = 53;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_cover) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 54;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cspan class=\"track_lyric\" style=\"display: none;\"\u003E";
;pug_debug_line = 54;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_lyric) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 55;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_icon\"\u003E";
;pug_debug_line = 56;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons text-white noselect\"\u003E";
;pug_debug_line = 56;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "music_note\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 57;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_title\"\u003E";
;pug_debug_line = 58;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 58;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 59;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"col d-flex track_list_duration\"\u003E";
;pug_debug_line = 60;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 60;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = duration) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 61;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown\"\u003E";
;pug_debug_line = 62;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons text-white noselect ml-5 track_list_more_icon hidden_icon\" id=\"trackDropdownMenu\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\u003E";
;pug_debug_line = 63;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "more_horiz\u003C\u002Fi\u003E";
;pug_debug_line = 64;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-menu\" aria-labelledby=\"trackDropdownMenu\"\u003E";
;pug_debug_line = 65;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003C!--a.dropdown-item Add to Player--\u003E";
;pug_debug_line = 66;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\"\u003E";
;pug_debug_line = 66;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "Copy Track Link\u003C\u002Fa\u003E";
;pug_debug_line = 67;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003C!--a.dropdown-item Share to Other--\u003E";
;pug_debug_line = 68;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\"\u003E";
;pug_debug_line = 68;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "Delete Track\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index4 in $$obj) {
      $$l++;
      var track = $$obj[pug_index4];
;pug_debug_line = 41;pug_debug_filename = "views\u002Falbum_detail.pug";
const track_name = (null === track.title ? 'None' : track.title)
;pug_debug_line = 42;pug_debug_filename = "views\u002Falbum_detail.pug";
const artist_name = (null === track.artists ? 'Anonymous' : track.artists)
;pug_debug_line = 43;pug_debug_filename = "views\u002Falbum_detail.pug";
const track_filename = (null === track.file_name ? '' : '/tracks/'+track.file_name)
;pug_debug_line = 44;pug_debug_filename = "views\u002Falbum_detail.pug";
const track_cover = (null === track.cover_art_file_name ? '' : '/covers/'+track.cover_art_file_name)
;pug_debug_line = 45;pug_debug_filename = "views\u002Falbum_detail.pug";
const track_lyric = (null === track.lyrics ? '' : '../lyrics/'+track.lyrics)
;pug_debug_line = 46;pug_debug_filename = "views\u002Falbum_detail.pug";
const album_name = (undefined === track.album_id ? 'None' : track.album_id.title)
;pug_debug_line = 47;pug_debug_filename = "views\u002Falbum_detail.pug";
const genres_name = (null === track.genres ? 'None' : track.genres)
;pug_debug_line = 48;pug_debug_filename = "views\u002Falbum_detail.pug";
const duration = (undefined === track.duration ? 'None' : track.duration)
;pug_debug_line = 49;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"list-group-item track_list\"\u003E";
;pug_debug_line = 50;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"row flex-nowrap\"\u003E";
;pug_debug_line = 51;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cspan class=\"track_list_artist\" style=\"display: none;\"\u003E";
;pug_debug_line = 51;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = artist_name) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 52;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cspan class=\"track_list_filename\" style=\"display: none;\"\u003E";
;pug_debug_line = 52;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_filename) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 53;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cspan class=\"track_list_cover\" style=\"display: none;\"\u003E";
;pug_debug_line = 53;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_cover) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 54;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cspan class=\"track_lyric\" style=\"display: none;\"\u003E";
;pug_debug_line = 54;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_lyric) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 55;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_icon\"\u003E";
;pug_debug_line = 56;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons text-white noselect\"\u003E";
;pug_debug_line = 56;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "music_note\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 57;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_title\"\u003E";
;pug_debug_line = 58;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 58;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 59;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"col d-flex track_list_duration\"\u003E";
;pug_debug_line = 60;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 60;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = duration) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 61;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown\"\u003E";
;pug_debug_line = 62;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons text-white noselect ml-5 track_list_more_icon hidden_icon\" id=\"trackDropdownMenu\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\u003E";
;pug_debug_line = 63;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "more_horiz\u003C\u002Fi\u003E";
;pug_debug_line = 64;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-menu\" aria-labelledby=\"trackDropdownMenu\"\u003E";
;pug_debug_line = 65;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003C!--a.dropdown-item Add to Player--\u003E";
;pug_debug_line = 66;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\"\u003E";
;pug_debug_line = 66;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "Copy Track Link\u003C\u002Fa\u003E";
;pug_debug_line = 67;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003C!--a.dropdown-item Share to Other--\u003E";
;pug_debug_line = 68;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\"\u003E";
;pug_debug_line = 68;pug_debug_filename = "views\u002Falbum_detail.pug";
pug_html = pug_html + "Delete Track\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
else
if (page === "playlist_detail_get") {
;pug_debug_line = 1;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex w-100\" id=\"playlist_detail\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Fplaylist_detail.pug";
const default_cover = '/images/music_cover_default_black.png'
;pug_debug_line = 3;pug_debug_filename = "views\u002Fplaylist_detail.pug";
const playlist_name = (null === playlist.title ? "None" : playlist.title);
;pug_debug_line = 4;pug_debug_filename = "views\u002Fplaylist_detail.pug";
const playlist_cover = (null === playlist.cover_art_file_name ? default_cover : '/covers/' + playlist.cover_art_file_name);
;pug_debug_line = 5;pug_debug_filename = "views\u002Fplaylist_detail.pug";
const tracks = (null === playlist.tracks ? [] : playlist.tracks);
;pug_debug_line = 6;pug_debug_filename = "views\u002Fplaylist_detail.pug";
const isShare = (null === playlist.share_id ? 'False' : 'True')
;pug_debug_line = 7;pug_debug_filename = "views\u002Fplaylist_detail.pug";
const playlistID = playlist.playlist_id
;pug_debug_line = 8;pug_debug_filename = "views\u002Fplaylist_detail.pug";
const tracks_len = playlist.num_tracks;
;pug_debug_line = 9;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"row flex-row\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"col\" id=\"playlist_info\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex flex-column\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"position-relative text-center\" id=\"playlist_detail_cover\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"album_card card mr-5\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"playlist_cover_in_detail_page\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"playlist_cover_image\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"card-img-top\""+pug_attr("src", playlist_cover, true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 17;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cimg class=\"card-img-top playlist_play_icon\" src=\"\u002Fimages\u002Fcircled_play.png\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 18;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"position-relative text-center\" id=\"playlist_detail_intro\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Ch4 class=\"text-white noselect\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = playlist_name) ? "" : pug_interp)) + "\u003C\u002Fh4\u003E";
;pug_debug_line = 20;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-secondary\" id=\"playlist_detail_play_btn\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "PLAY\u003C\u002Fbutton\u003E";
;pug_debug_line = 21;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cp class=\"text-white noselect\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = tracks_len) ? "" : pug_interp));
;pug_debug_line = 21;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + " TRACKS\u003C\u002Fp\u003E";
;pug_debug_line = 22;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-inline-block\" id=\"playlist_detail_icon_list\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Ci class=\"far fa-heart text-white d-inline mr-4\" id=\"like_icon\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 24;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown d-inline\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-ellipsis-h text-white\" id=\"playlistDropdownMenu\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"cursor: pointer;\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 27;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-menu\" aria-labelledby=\"playlistDropdownMenu\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003C!--a.dropdown-item Add to Player--\u003E";
;pug_debug_line = 29;pug_debug_filename = "views\u002Fplaylist_detail.pug";
if ((isShare === 'False')) {
;pug_debug_line = 30;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#shareplaylist\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "Share\u003C\u002Fa\u003E";
;pug_debug_line = 31;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\" id=\"CancelShare\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "Cancel Share\u003C\u002Fa\u003E";
;pug_debug_line = 32;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\" id=\"DelPlaylist\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "Delete Playlist\u003C\u002Fa\u003E";
}
else {
;pug_debug_line = 34;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\" id=\"RejectShare\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "Reject Share\u003C\u002Fa\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 36;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"col\" id=\"playlist_tracks\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"list-group\" id=\"playlist_detail_track_list\"\u003E";
;pug_debug_line = 39;pug_debug_filename = "views\u002Fplaylist_detail.pug";
// iterate tracks
;(function(){
  var $$obj = tracks;
  if ('number' == typeof $$obj.length) {
      for (var pug_index5 = 0, $$l = $$obj.length; pug_index5 < $$l; pug_index5++) {
        var track = $$obj[pug_index5];
;pug_debug_line = 40;pug_debug_filename = "views\u002Fplaylist_detail.pug";
const track_name = (null === track.title ? 'None' : track.title)
;pug_debug_line = 41;pug_debug_filename = "views\u002Fplaylist_detail.pug";
const artist_name = (null === track.artists ? 'Anonymous' : track.artists)
;pug_debug_line = 42;pug_debug_filename = "views\u002Fplaylist_detail.pug";
const track_filename = (null === track.file_name ? '' : '/tracks/'+track.file_name)
;pug_debug_line = 43;pug_debug_filename = "views\u002Fplaylist_detail.pug";
const track_cover = (null === track.cover_art_file_name ? '' : '/covers/'+track.cover_art_file_name)
;pug_debug_line = 44;pug_debug_filename = "views\u002Fplaylist_detail.pug";
const track_lyric = (null === track.lyrics ? '' : '../lyrics/'+track.lyrics)
;pug_debug_line = 45;pug_debug_filename = "views\u002Fplaylist_detail.pug";
const album_name = (undefined === track.album_id ? 'None' : track.album_id.title)
;pug_debug_line = 46;pug_debug_filename = "views\u002Fplaylist_detail.pug";
const genres_name = (null === track.genres ? 'None' : track.genres)
;pug_debug_line = 47;pug_debug_filename = "views\u002Fplaylist_detail.pug";
const duration = (undefined === track.duration ? 'None' : track.duration)
;pug_debug_line = 48;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"list-group-item track_list\"\u003E";
;pug_debug_line = 49;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"row flex-nowrap\"\u003E";
;pug_debug_line = 50;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cspan class=\"track_list_artist\" style=\"display: none;\"\u003E";
;pug_debug_line = 50;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = artist_name) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 51;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cspan class=\"track_list_filename\" style=\"display: none;\"\u003E";
;pug_debug_line = 51;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_filename) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 52;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cspan class=\"track_list_cover\" style=\"display: none;\"\u003E";
;pug_debug_line = 52;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_cover) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 53;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cspan class=\"track_lyric\" style=\"display: none;\"\u003E";
;pug_debug_line = 53;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_lyric) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 54;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_icon\"\u003E";
;pug_debug_line = 55;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons text-white noselect\"\u003E";
;pug_debug_line = 55;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "music_note\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 56;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_title\"\u003E";
;pug_debug_line = 57;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 57;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 58;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"col d-flex track_list_duration\"\u003E";
;pug_debug_line = 59;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 59;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = duration) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 60;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown\"\u003E";
;pug_debug_line = 61;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons text-white noselect ml-5 track_list_more_icon hidden_icon\" id=\"trackDropdownMenu\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\u003E";
;pug_debug_line = 62;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "more_horiz\u003C\u002Fi\u003E";
;pug_debug_line = 63;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-menu\" aria-labelledby=\"trackDropdownMenu\"\u003E";
;pug_debug_line = 64;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003C!--a.dropdown-item Add to Player--\u003E";
;pug_debug_line = 65;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\"\u003E";
;pug_debug_line = 65;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "Copy Track Link\u003C\u002Fa\u003E";
;pug_debug_line = 66;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003C!--a.dropdown-item Share to Other--\u003E";
;pug_debug_line = 67;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\"\u003E";
;pug_debug_line = 67;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "Delete Track\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index5 in $$obj) {
      $$l++;
      var track = $$obj[pug_index5];
;pug_debug_line = 40;pug_debug_filename = "views\u002Fplaylist_detail.pug";
const track_name = (null === track.title ? 'None' : track.title)
;pug_debug_line = 41;pug_debug_filename = "views\u002Fplaylist_detail.pug";
const artist_name = (null === track.artists ? 'Anonymous' : track.artists)
;pug_debug_line = 42;pug_debug_filename = "views\u002Fplaylist_detail.pug";
const track_filename = (null === track.file_name ? '' : '/tracks/'+track.file_name)
;pug_debug_line = 43;pug_debug_filename = "views\u002Fplaylist_detail.pug";
const track_cover = (null === track.cover_art_file_name ? '' : '/covers/'+track.cover_art_file_name)
;pug_debug_line = 44;pug_debug_filename = "views\u002Fplaylist_detail.pug";
const track_lyric = (null === track.lyrics ? '' : '../lyrics/'+track.lyrics)
;pug_debug_line = 45;pug_debug_filename = "views\u002Fplaylist_detail.pug";
const album_name = (undefined === track.album_id ? 'None' : track.album_id.title)
;pug_debug_line = 46;pug_debug_filename = "views\u002Fplaylist_detail.pug";
const genres_name = (null === track.genres ? 'None' : track.genres)
;pug_debug_line = 47;pug_debug_filename = "views\u002Fplaylist_detail.pug";
const duration = (undefined === track.duration ? 'None' : track.duration)
;pug_debug_line = 48;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"list-group-item track_list\"\u003E";
;pug_debug_line = 49;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"row flex-nowrap\"\u003E";
;pug_debug_line = 50;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cspan class=\"track_list_artist\" style=\"display: none;\"\u003E";
;pug_debug_line = 50;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = artist_name) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 51;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cspan class=\"track_list_filename\" style=\"display: none;\"\u003E";
;pug_debug_line = 51;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_filename) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 52;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cspan class=\"track_list_cover\" style=\"display: none;\"\u003E";
;pug_debug_line = 52;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_cover) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 53;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cspan class=\"track_lyric\" style=\"display: none;\"\u003E";
;pug_debug_line = 53;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_lyric) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 54;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_icon\"\u003E";
;pug_debug_line = 55;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons text-white noselect\"\u003E";
;pug_debug_line = 55;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "music_note\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 56;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"col track_list_title\"\u003E";
;pug_debug_line = 57;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 57;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = track_name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 58;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"col d-flex track_list_duration\"\u003E";
;pug_debug_line = 59;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-white noselect\"\u003E";
;pug_debug_line = 59;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = duration) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 60;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown\"\u003E";
;pug_debug_line = 61;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons text-white noselect ml-5 track_list_more_icon hidden_icon\" id=\"trackDropdownMenu\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\u003E";
;pug_debug_line = 62;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "more_horiz\u003C\u002Fi\u003E";
;pug_debug_line = 63;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-menu\" aria-labelledby=\"trackDropdownMenu\"\u003E";
;pug_debug_line = 64;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003C!--a.dropdown-item Add to Player--\u003E";
;pug_debug_line = 65;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\"\u003E";
;pug_debug_line = 65;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "Copy Track Link\u003C\u002Fa\u003E";
;pug_debug_line = 66;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003C!--a.dropdown-item Share to Other--\u003E";
;pug_debug_line = 67;pug_debug_filename = "views\u002Fplaylist_detail.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\"\u003E";
;pug_debug_line = 67;pug_debug_filename = "views\u002Fplaylist_detail.pug";
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
pug_html = pug_html + "\u003Cform" + (" id=\"newShare\""+pug_attr("action", '/playlist/' + shareID + '/share', true, true)+" method=\"post\"") + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002Fplaylist_share.pug";
pug_html = pug_html + "Enter Username: ";
;pug_debug_line = 12;pug_debug_filename = "views\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Cinput id=\"ShareUser\" type=\"text\" name=\"destUser\"\u003E\u003C\u002Flabel\u003E";
;pug_debug_line = 13;pug_debug_filename = "views\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-around\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "views\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-default btn-sm\" id=\"confirmShare\" type=\"button\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "views\u002Fplaylist_share.pug";
pug_html = pug_html + "Share\u003C\u002Fbutton\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\u002Fplaylist_share.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-default btn-sm\" id=\"abortShare\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Abort\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\u002Fplaylist_share.pug";
pug_html = pug_html + "Cancel\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 99;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"position-absolute music-player-area\"\u003E";
;pug_debug_line = 1;pug_debug_filename = "views\u002Fupload_toast_layout.pug";
pug_html = pug_html + "\u003Cdiv id=\"upload_toast_area\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Fupload_toast_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"toast animated\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\" data-autohide=\"false\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002Fupload_toast_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"toast-header\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002Fupload_toast_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"mr-auto\" id=\"spinner\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002Fupload_toast_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"spinner-border spinner-border-sm text-primary mr-2\" role=\"status\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002Fupload_toast_layout.pug";
pug_html = pug_html + "\u003Cstrong class=\"mr-auto\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002Fupload_toast_layout.pug";
pug_html = pug_html + "Uploading...\u003C\u002Fstrong\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002Fupload_toast_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"mr-auto\" id=\"complete\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002Fupload_toast_layout.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-check text-success mr-2\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Fupload_toast_layout.pug";
pug_html = pug_html + "\u003Cstrong class=\"mr-auto\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Fupload_toast_layout.pug";
pug_html = pug_html + "Done!\u003C\u002Fstrong\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002Fupload_toast_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"toast-body p-1\" style=\"height: 25px;\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Fupload_toast_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"progress\" style=\"height: 16px; width: 250px;\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "views\u002Fupload_toast_layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"progress-bar\" role=\"progressbar\" style=\"width: 50%;\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 101;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003C!--div#aplayer--\u003E";
;pug_debug_line = 1;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cdiv class=\"aplayer\" id=\"aplayer\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cdiv class=\"aplayer-body\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cdiv class=\"aplayer-pic\" style=\"background-color: grey;\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cdiv class=\"aplayer-button aplayer-play\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" version=\"1.1\" viewBox=\"0 0 16 31\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cpath d=\"M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cdiv class=\"aplayer-info\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cdiv class=\"aplayer-music\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cspan class=\"aplayer-title\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "No audio\u003C\u002Fspan\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cspan class=\"aplayer-author\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cdiv class=\"aplayer-lrc\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cdiv class=\"aplayer-lrc-contents\" style=\"transform: translateY(0); -webkit-transform: translateY(0);\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 13;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cdiv class=\"aplayer-controller\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cdiv class=\"aplayer-bar-wrap\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cdiv class=\"aplayer-bar\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cdiv class=\"aplayer-loaded\" style=\"width: 0\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 17;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cdiv class=\"aplayer-played\" style=\"width: 0; background: grey;\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cspan class=\"aplayer-thumb\" style=\"background: grey;\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cspan class=\"aplayer-loading-icon\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" version=\"1.1\" viewBox=\"0 0 32 32\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cpath d=\"M4 16c0-6.6 5.4-12 12-12s12 5.4 12 12c0 1.2-0.8 2-2 2s-2-0.8-2-2c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c1.2 0 2 0.8 2 2s-0.8 2-2 2c-6.6 0-12-5.4-12-12z\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 22;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cdiv class=\"aplayer-time\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cspan class=\"aplayer-time-inner\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cspan class=\"aplayer-ptime\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "00:00\u003C\u002Fspan\u003E";
;pug_debug_line = 25;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + " \u002F";
;pug_debug_line = 26;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cspan class=\"aplayer-dtime\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "00:00\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 27;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cspan class=\"aplayer-icon aplayer-icon-back\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" version=\"1.1\" viewBox=\"0 0 32 32\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cpath d=\"M25.468 6.947c-0.326-0.172-0.724-0.151-1.030 0.057l-6.438 4.38v-3.553c0-0.371-0.205-0.71-0.532-0.884-0.326-0.172-0.724-0.151-1.030 0.057l-12 8.164c-0.274 0.186-0.438 0.496-0.438 0.827s0.164 0.641 0.438 0.827l12 8.168c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-3.556l6.438 4.382c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-16.333c0-0.371-0.205-0.71-0.532-0.884z\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 30;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cspan class=\"aplayer-icon aplayer-icon-play\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" version=\"1.1\" viewBox=\"0 0 16 31\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cpath d=\"M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 33;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cspan class=\"aplayer-icon aplayer-icon-forward\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" version=\"1.1\" viewBox=\"0 0 32 32\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cpath d=\"M25.468 6.947c-0.326-0.172-0.724-0.151-1.030 0.057l-6.438 4.38v-3.553c0-0.371-0.205-0.71-0.532-0.884-0.326-0.172-0.724-0.151-1.030 0.057l-12 8.164c-0.274 0.186-0.438 0.496-0.438 0.827s0.164 0.641 0.438 0.827l12 8.168c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-3.556l6.438 4.382c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-16.333c0-0.371-0.205-0.71-0.532-0.884z\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 36;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cdiv class=\"aplayer-volume-wrap\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cbutton class=\"aplayer-icon aplayer-icon-volume-down\" type=\"button\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" version=\"1.1\" viewBox=\"0 0 28 32\"\u003E";
;pug_debug_line = 39;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cpath d=\"M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E";
;pug_debug_line = 40;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cdiv class=\"aplayer-volume-bar-wrap\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cdiv class=\"aplayer-volume-bar\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cdiv class=\"aplayer-volume\" style=\"height: 50%; background: grey;\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 43;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cbutton class=\"aplayer-icon aplayer-icon-order\" type=\"button\"\u003E";
;pug_debug_line = 44;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" version=\"1.1\" viewBox=\"0 0 32 32\"\u003E";
;pug_debug_line = 45;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cpath d=\"M0.622 18.334h19.54v7.55l11.052-9.412-11.052-9.413v7.549h-19.54v3.725z\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E";
;pug_debug_line = 46;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cbutton class=\"aplayer-icon aplayer-icon-loop\" type=\"button\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" version=\"1.1\" viewBox=\"0 0 29 32\"\u003E";
;pug_debug_line = 48;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cpath d=\"M2.667 7.027l1.707-1.693 22.293 22.293-1.693 1.707-4-4h-11.64v4l-5.333-5.333 5.333-5.333v4h8.973l-8.973-8.973v0.973h-2.667v-3.64l-4-4zM22.667 17.333h2.667v5.573l-2.667-2.667v-2.907zM22.667 6.667v-4l5.333 5.333-5.333 5.333v-4h-10.907l-2.667-2.667h13.573z\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E";
;pug_debug_line = 49;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cbutton class=\"aplayer-icon aplayer-icon-menu\" type=\"button\"\u003E";
;pug_debug_line = 50;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" version=\"1.1\" viewBox=\"0 0 22 32\"\u003E";
;pug_debug_line = 51;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cpath d=\"M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E";
;pug_debug_line = 52;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cbutton class=\"aplayer-icon aplayer-icon-lrc\" type=\"button\"\u003E";
;pug_debug_line = 53;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" version=\"1.1\" viewBox=\"0 0 32 32\"\u003E";
;pug_debug_line = 54;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cpath d=\"M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 55;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cdiv class=\"aplayer-notice\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 56;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cdiv class=\"aplayer-miniswitcher\"\u003E";
;pug_debug_line = 57;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cbutton class=\"aplayer-icon\"\u003E";
;pug_debug_line = 58;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" version=\"1.1\" viewBox=\"0 0 32 32\"\u003E";
;pug_debug_line = 59;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cpath d=\"M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 60;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Cdiv class=\"aplayer-list\" style=\"max-height: 250px\"\u003E";
;pug_debug_line = 61;pug_debug_filename = "views\u002Faplayer.pug";
pug_html = pug_html + "\u003Col style=\"max-height: 250px\"\u003E\u003C\u002Fol\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 104;pug_debug_filename = "views\u002Findex.pug";
pug_html = pug_html + "\u003Cscript type=\"text\u002Fjavascript\" src=\"\u002Fjavascripts\u002Faplayer.js\"\u003E\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";}.call(this,"album" in locals_for_with?locals_for_with.album:typeof album!=="undefined"?album:undefined,"albums" in locals_for_with?locals_for_with.albums:typeof albums!=="undefined"?albums:undefined,"page" in locals_for_with?locals_for_with.page:typeof page!=="undefined"?page:undefined,"playlist" in locals_for_with?locals_for_with.playlist:typeof playlist!=="undefined"?playlist:undefined,"playlists" in locals_for_with?locals_for_with.playlists:typeof playlists!=="undefined"?playlists:undefined,"tracks" in locals_for_with?locals_for_with.tracks:typeof tracks!=="undefined"?tracks:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}