// ==UserScript==
// @name        RedirectRocket
// @namespace   Violentmonkey Scripts
// @match       https://intranet.rocketsoftware.com/*
// @grant       none
// @version     1.0
// @author      UNiXMIT
// @description Redirect all intranet.rocketsoftware.com URLs to unixmit.uk
// ==/UserScript==

(function () {
  'use strict';
  window.location.replace('https://unixmit.uk');
})();
