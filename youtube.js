// ==UserScript==
// @name        YouTube Redirect
// @namespace   Violentmonkey Scripts
// @match       *://www.youtube.com/*
// @grant       none
// @version     1.0
// @author      UNiXMIT
// @description Redirect YouTube except weekdays 3:30–8:30 PM and weekends
// ==/UserScript==

(function () {
    'use strict';
    const REDIRECT_URL = 'https://unixmit.uk/404';

    const now = new Date();

    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const isWeekend = day === 0 || day === 6;

    const currentMinutes = hours * 60 + minutes;
    const startAllowed = 15 * 60 + 30;
    const endAllowed = 20 * 60 + 30;

    const isWeekdayAllowedTime =
        day >= 1 &&
        day <= 5 &&
        currentMinutes >= startAllowed &&
        currentMinutes < endAllowed;

    const allowYouTube = isWeekend || isWeekdayAllowedTime;

    if (!allowYouTube) {
        window.location.replace(REDIRECT_URL);
    }
})();
