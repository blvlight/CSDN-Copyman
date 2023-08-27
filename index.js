// ==UserScript==
// @name         CSDN Copyman
// @namespace    http://tampermonkey.net/
// @version      0.1.2
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

  document.body.contentEditable = true;
  document.querySelector('article').contentEditable = true;

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
   * @param {MouseEvent} e 
   */
  function handleClick(e) {
    let str = '';
    const texts = e.target?.innerHTML.replace(/<.*?>/, '');
    if (texts) {
      console.log(`from CSDNcopyman - You can check your copy text in '[]':\n[\n${str}\n]\n----${new Date().toLocaleString()}`);
      navigator.clipboard.writeText(str).then(() => alert(`复制内容：\n${str}`));
    } else {
      console.log(`from CSDNcopyman - It seems like click void\n----${new Date().toLocaleString()}`);
    }
  }
})();
