// ==UserScript==
// @name         Refresher
// @namespace    http://refresher.sk/
// @version      0.1
// @description  Remove lazy loading images
// @match        http://refresher.sk/*
// @copyright    2013+, Daniel Husar
// ==/UserScript==

$('.lazy').each(function(){
  $(this).attr('src', $(this).data('original'));
});
$(window).off('resize');

setTimeout(function(){
    $(window).off('resize');
}, 3000);