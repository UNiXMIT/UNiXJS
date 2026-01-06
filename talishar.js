// ==UserScript==
// @name        Talishar
// @namespace   Violentmonkey Scripts
// @match       https://talishar.net/*
// @grant       none
// @version     1.0
// @author      UNiXMIT
// @description Auto refresh Talishar queue
// ==/UserScript==

function reloadGames(){
  document.querySelector('[class*="reloadButton"]').click();
}

setInterval(reloadGames, 5000);