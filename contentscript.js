//import {rootNode} from "./script";

// TRYING TO LOG THE ROOT NODE FROM THE CONTENTSCRIPT.JS BUT CAN'T YET
console.log('This is the root node from the contentscript.js');
//console.log(rootNode);

// CAN WE IMPORT THE ROOT NODE FROM SCRIPT.JS AND EXPORT IT, OR MOUNT IT, TO THE DOM? TO THE APP?

// const mainPage = document.getElementsByTagName('body')[0];
//
// // WHAT IF THIS WAS THE BUNDLE.JS?
// const mountedScript = document.createElement('script');
// mountedScript.setAttribute('type', 'module');
// mountedScript.setAttribute('src', 'chrome-extension://gbaoapbpjbfkjacnebobjbpmnnidhjno/script.js');
// mountedScript.setAttribute('src', 'chrome-extension://gbaoapbpjbfkjacnebobjbpmnnidhjno/build/bundle.js');
// mainPage.appendChild(mountedScript);

// if you want to manipulate the DOM, you need the content script.
// this script runs in the browser - on all URLs in our case
// console.log('This is the contentscript. The window document object, ran at document_idle, should be below...');
console.dir(Object.values(window.document.body));
console.dir(window.document.body);

