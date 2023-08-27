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

  const key = 's';
  window.addEventListener('keydown', handleKeydown);
  window.addEventListener('keyup', handleKeyUp);

  function handleKeydown(e) {
    if (e.key === key) window.addEventListener('click', handleClick);
  }

  function handleKeyUp(e) {
    if (e.key === key) window.removeEventListener('click', handleClick);
  }

  /**
   * 
   * @param {PointerEvent} e 
   */
  function handleClick(e) {
    const text = e.target?.innerHTML.replace(/<.*?>/, '');
    if (text) {
      console.log(`from CSDNcopyman - You can check your copy text in '[]':\n[\n${text}\n]\n----${new Date().toLocaleString()}`);
      navigator.clipboard.writeText(text).then(() => alert(`复制内容：\n${text}`));
    } else {
      console.log(`from CSDNcopyman - It seems like click on void.----${new Date().toLocaleString()}`)
    }
  }
})();
