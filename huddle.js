// ==UserScript==
// @name        Huddle
// @namespace   Violentmonkey Scripts
// @match       https://mf.unixmit.uk:8282/*
// @match       https://amsdevtsamit02.dev.rocketsoftware.com:8282/*
// @grant       none
// @version     1.0
// @author      UNiXMIT
// @description Auto switch Huddle user
// ==/UserScript==

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
};

(async ()=>{
  await sleep(1000);
  document.querySelector('#userteam').value = "RM";
  let eventTeam = new Event('change', { bubbles: true });
  document.querySelector('#userteam').dispatchEvent(eventTeam);
  await sleep(1000);
  document.querySelector('#username').value = "Martin Turner";
  let eventName = new Event('change', { bubbles: true });
  document.querySelector('#username').dispatchEvent(eventName);
})();