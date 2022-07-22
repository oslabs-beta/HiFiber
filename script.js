/** The 'alternate' of the current fiber is the fiber in progress, and the 'alternate' of the fiber in progress is the current fiber. The current fiber represents what is rendered already, and the in-progress fiber is conceptually the stack frame that has not returned. * */

/** The main disadvantage of console.dir is that console.dir accepts only one object as an argument, but console.log can log multiple arguments at once * */
// console.log('debug');
const current = Object.values(window.document.body.children[0])[0].alternate;
// let current = Object.values(window.document.body.children[0])[0].alternate;
console.dir(window.document.body);
console.log(current);

// while (current.child) {
//   console.log(current);
//   current = current.child;
// }

console.log(current);
