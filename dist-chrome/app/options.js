!function(e){function t(t){for(var o,i,l=t[0],u=t[1],c=t[2],a=0,f=[];a<l.length;a++)i=l[a],n[i]&&f.push(n[i][0]),n[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);for(p&&p(t);f.length;)f.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],o=!0,l=1;l<r.length;l++){var u=r[l];0!==n[u]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var o={},n={2:0},s=[];function i(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=o,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(r,o,function(t){return e[t]}.bind(null,o));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var p=u;s.push([5,0]),r()}({5:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(1),n=r(0);var s;!function(e){class t{constructor(e){this.selectedColor="",this.colorList=["red","green","blue","yellow"],this.isLike=!1,this.status="",this.init=(()=>{this.restoreOptions().then(()=>{this.scope.$apply()})}),this.save=(()=>n.browser.storage.sync.set({favoriteColor:this.selectedColor,likesColor:this.isLike}).then(e=>{this.status="Options saved.",this.scope.$apply()})),this.restoreOptions=(()=>n.browser.storage.sync.get({favoriteColor:"red",likesColor:!0}).then(e=>{this.selectedColor=e.favoriteColor,this.isLike=e.likesColor})),this.scope=e,this.init()}}t.$inject=["$scope"],o.module("app",[]).controller("popupController",t)}(s||(s={}))}});