/** The 'alternate' of the current fiber is the fiber in progress, and the 'alternate' of the fiber in progress is the current fiber. The current fiber represents what is rendered already, and the in-progress fiber is conceptually the stack frame that has not returned. * */

/** The main disadvantage of console.dir is that console.dir accepts only one object as an argument, but console.log can log multiple arguments at once * */

// DEFINE THE ROOT NODE, WHICH POINTS TO THE VALUES OF THE FIRST CHILD IN THE DIFFED DOM


// CONSOLE.LOG THE ROOT FIBER NODE FROM THE CONSOLE OF THE APP VIA SCRIPT.JS
// THIS SCRIPT ALSO SEEMS TO RUN TWICE IN THE CONSOLE EACH INITIALIZATION OF THE APP AND EXTENSION -- WHY?
// FIRST IT LOGS AS undefined, THEN THE SCRIPT FROM APP.JSX RUNS, THEN THIS SCRIPT RUNS AGAIN WITH THE ROOT NODE.


// EXPORT THE ROOT NODE FOR OTHER PARTS OF THE APP TO ACCESS IT
//export { rootNode }
// const current = Object.values(window.document.body.children[0])[0].alternate;

// console.dir(window.document.body);
// console.log(current);


const rootNode = Object.values(window.document.body.children[0])[0];

// // CONSOLE.LOG THE ROOT FIBER NODE FROM THE CONSOLE OF THE APP VIA SCRIPT.JS
// // THIS SCRIPT ALSO SEEMS TO RUN TWICE IN THE CONSOLE EACH INITIALIZATION OF THE APP AND EXTENSION -- WHY?
// // FIRST IT LOGS AS undefined, THEN THE SCRIPT FROM APP.JSX RUNS, THEN THIS SCRIPT RUNS AGAIN WITH THE ROOT NODE.
console.log('This is the root node from script.js');
console.log(rootNode);

console.log('poop2');