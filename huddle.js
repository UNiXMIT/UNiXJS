// ==UserScript==
// @name        Huddle
// @namespace   Violentmonkey Scripts
// @match       https://mf.unixmit.uk:8282/*
// @match       https://amsdevtsamit02.dev.rocketsoftware.com:8282/*
// @grant       none
// @version     1.0
// @author      UNiXMIT
// @description Auto switch Huddle user
// @run-at      document-idle
// ==/UserScript==

(async function () {
  const container = await waitForElement('#userDataForm');
  if (!container) return;

  fillUserForm();
})();

function waitForElement(selector, timeout = 15000) {
  return new Promise((resolve) => {
    const el = document.querySelector(selector);
    if (el) return resolve(el);

    const observer = new MutationObserver(() => {
      const el = document.querySelector(selector);
      if (el) {
        observer.disconnect();
        resolve(el);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    setTimeout(() => {
      observer.disconnect();
      resolve(null);
    }, timeout);
  });
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
};

async function fillUserForm() {
  await sleep(1000);
  document.querySelector('#userteam').value = "RM";
  let eventTeam = new Event('change', { bubbles: true });
  document.querySelector('#userteam').dispatchEvent(eventTeam);
  await sleep(1000);
  document.querySelector('#username').value = "Martin Turner";
  let eventName = new Event('change', { bubbles: true });
  document.querySelector('#username').dispatchEvent(eventName);
}