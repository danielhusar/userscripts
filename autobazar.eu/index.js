// ==UserScript==
// @name         Autobazar EU
// @namespace    http://www.autobazar.eu/sk/
// @version      0.1
// @description  Prefill the select box with car model when going bacn in history
// @match        http://www.autobazar.eu/sk/
// @copyright    2012+, Daniel Husar
// ==/UserScript==

$('select[name="BrandID"]').trigger('change');