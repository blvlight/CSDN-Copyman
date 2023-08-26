// ==UserScript==
// @name         CSDN Copyman
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  Press S and click to copy without login
// @author       blvlight
// @match        https://*.csdn.net/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
  'use strict';
  console.log('cm is working');
  const key = 's';
  window.addEventListener('keydown', handleKeydown);
  window.addEventListener('keyup', handleKeyUp);

  function handleKeydown(e) {
    if (e.key === key) {
      window.addEventListener('click', handleClick);
    }
  }

  function handleKeyUp(e) {
    if (e.key === key) window.removeEventListener('click', handleClick);
  }

  /**
   * 
   * @param {HTMLElement} e 
   */
  function handleClick(e) {
    let str = '', q = [e];
    const texts = e.innerHTML.split(/<.*?>/);
    texts.reduce((text, cur) => cur + text, str);
    console.log(`from CSDNcopyman ${str}`);
    navigator.clipboard.writeText(str).then(() => alert(`复制内容\n${str}`));
  }
})();
