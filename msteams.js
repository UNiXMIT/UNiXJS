// ==UserScript==
// @name        MSTeamsKeepAlive
// @namespace   Violentmonkey Scripts
// @match       https://teams.microsoft.com/v2/*
// @grant       none
// @version     1.0
// @author      UNiXMIT
// @description Keep MS Teams Alive
// ==/UserScript==

function moveMouse(){
	let evt = new MouseEvent("mousemove", {
        view: window,
        bubbles: true,
        cancelable: true
    });
    document.dispatchEvent(evt);
}

setInterval(moveMouse, 60000);