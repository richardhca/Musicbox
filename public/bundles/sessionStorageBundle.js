(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
!function(o,f){"object"==typeof exports&&"object"==typeof module?module.exports=f():"function"==typeof define&&define.amd?define([],f):"object"==typeof exports?exports.FuzzySearch=f():o.FuzzySearch=f()}("undefined"!=typeof window?window:this,function(){return function(o){var f={};function c(t){if(f[t])return f[t].exports;var r=f[t]={i:t,l:!1,exports:{}};return o[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}return c.m=o,c.c=f,c.d=function(o,f,t){c.o(o,f)||Object.defineProperty(o,f,{enumerable:!0,get:t})},c.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},c.t=function(o,f){if(1&f&&(o=c(o)),8&f)return o;if(4&f&&"object"==typeof o&&o&&o.__esModule)return o;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:o}),2&f&&"string"!=typeof o)for(var r in o)c.d(t,r,function(f){return o[f]}.bind(null,r));return t},c.n=function(o){var f=o&&o.__esModule?function(){return o.default}:function(){return o};return c.d(f,"a",f),f},c.o=function(o,f){return Object.prototype.hasOwnProperty.call(o,f)},c.p="/",c(c.s=0)}([function(o,f,c){o.exports=c(1)},function(o,f,c){"use strict";function t(o,f){for(var c=0;c<f.length;c++){var t=f[c];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(o,t.key,t)}}c.r(f);var r=function(){function o(){!function(o,f){if(!(o instanceof f))throw new TypeError("Cannot call a class as a function")}(this,o)}var f,c,r;return f=o,r=[{key:"getDescendantProperty",value:function(f,c){var t,r,y,s,b,k,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(c){if(-1===(y=c.indexOf("."))?t=c:(t=c.slice(0,y),r=c.slice(y+1)),null!=(s=f[t]))if(r||"string"!=typeof s&&"number"!=typeof s)if("[object Array]"===Object.prototype.toString.call(s))for(b=0,k=s.length;b<k;b++)o.getDescendantProperty(s[b],r,u);else r&&o.getDescendantProperty(s,r,u);else u.push(s)}else u.push(f);return u}}],(c=null)&&t(f.prototype,c),r&&t(f,r),o}();function y(o,f){for(var c=0;c<f.length;c++){var t=f[c];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(o,t.key,t)}}c.d(f,"default",function(){return s});var s=function(){function o(){var f=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(o,f){if(!(o instanceof f))throw new TypeError("Cannot call a class as a function")}(this,o),Array.isArray(c)||(t=c,c=[]),this.haystack=f,this.keys=c,this.options=Object.assign({caseSensitive:!1,sort:!1},t)}var f,c,t;return f=o,t=[{key:"isMatch",value:function(o,f,c){c||(o=o.toLocaleLowerCase(),f=f.toLocaleLowerCase());for(var t=f.split(""),r=[],y=0,s=0;s<t.length;s++){var b=t[s];if(-1===(y=o.indexOf(b,y)))return!1;r.push(y),y++}return o===f?1:r.reduce(function(o,f){return o+f},2)}}],(c=[{key:"search",value:function(){var f=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(""===f)return this.haystack;for(var c=[],t=0;t<this.haystack.length;t++){var y=this.haystack[t];if(0===this.keys.length){var s=o.isMatch(y,f,this.options.caseSensitive);s&&c.push({item:y,score:s})}else for(var b=0;b<this.keys.length;b++){for(var k=r.getDescendantProperty(y,this.keys[b]),u=!1,j=0;j<k.length;j++){var w=o.isMatch(k[j],f,this.options.caseSensitive);if(w){u=!0,c.push({item:y,score:w});break}}if(u)break}}return this.options.sort&&c.sort(function(o,f){return o.score-f.score}),c.map(function(o){return o.item})}}])&&y(f.prototype,c),t&&y(f,t),o}()}]).default});
},{}],2:[function(require,module,exports){
const FuzzySearch = require('fuzzy-search');

var tracks;
var albums;
var playlists;

window.format_tracks_data = function (data) {
    var jsonData = [];
    data.tracks.forEach(track => {
        jsonData.push({
            id: track.id,
            title: track.title,
            album_id: {
                title: (null === track.album_id ? 'None' : track.album_id.title)
            },
            artists: track.artists,
            genres: track.genres,
            duration: track.duration,
            file_name: '/tracks/' + track.file_name,
            cover_art_file_name: '/covers/' + track.cover_art_file_name

        });
    });
    return jsonData;
};

window.format_aplayer_tracks_data = function (data) {
    var jsonData = [];
    data.tracks.forEach(track => {
        jsonData.push({
            id: track.id,
            name: track.title,
            artist: track.artists,
            url: track.file_name,
            cover: track.cover_art_file_name
        });
    });
    return jsonData;
};

window.format_albums_data = function (data) {
    var jsonData = [];
    data.albums.forEach(album => {
        jsonData.push({
            id: album.id,
            title: album.title,
            artists: album.artists,
            cover_art_file_name: album.cover_art_file_name
        });
    });
    return jsonData;
};

window.format_playlists_data = function (data) {
    var jsonData = [];
    data.playlists.forEach(playlist => {
        jsonData.push({
            playlist_id: playlist.playlist_id,
            title: playlist.title,
        });
    });
    return jsonData;
};

window.insert_tracks = function (data) {
    const formatted_tracks = format_tracks_data(data);
    sessionStorage.setItem('tracks', JSON.stringify(formatted_tracks));
    tracks = formatted_tracks;
};

window.get_tracks = function () {
    return JSON.parse(sessionStorage.getItem('tracks'));
};

window.get_searched_tracks = function (char) {
    const searcher = new FuzzySearch(tracks, ['title', 'artists', 'album_id.title'], {
        caseSensitive: false,
    });
    return searcher.search(char);
};

window.insert_albums = function (data) {
    const formatted_albums = format_albums_data(data);
    sessionStorage.setItem('albums', JSON.stringify(formatted_albums));
    albums = formatted_albums;
};

window.get_albums = function () {
    return JSON.parse(sessionStorage.getItem('albums'));
};

window.get_searched_albums = function (char) {
    const searcher = new FuzzySearch(albums, ['title'], {
        caseSensitive: false,
    });
    return searcher.search(char);
};


window.insert_playlists = function (data) {
    const formatted_playlists = format_playlists_data(data);
    sessionStorage.setItem('playlists', JSON.stringify(formatted_playlists));
    playlists = formatted_playlists;
};

window.get_playlists = function () {
    return JSON.parse(sessionStorage.getItem('playlists'));
};


window.get_searched_playlists = function (char) {
    const searcher = new FuzzySearch(playlists, ['title'], {
        caseSensitive: false,
    });
    return searcher.search(char);
};






},{"fuzzy-search":1}]},{},[2]);
