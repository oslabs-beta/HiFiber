import React, { useState, useEffect } from "react";
import './styles.css';


const App = () => {
    const [add, setAdd] = useState(1);
    const [times, setTimes] = useState(2);
    const [divide, setDivide] = useState(null);
    const [subtract, setSubtract] = useState(100);
    const [variable, setVariable] = useState(0);

    const newObj = <App />;

    useEffect(() => {
      if (variable > 2) {
        let current = newObj._owner;
        const head = current;
        let arr = [head];
        let nodeList = [head.key];
        current = current.child;
        console.log(newObj);
          
        //compare 'nodes' of the tree - this is what will be visualized in D3
        //as long as we're not at the top keep iterating
        while (current !== head) {
          console.log('current', current.key, current.memoizedProps);
          console.log(
            'current alternate',
            current.key,
            current.alternate.memoizedProps
          );
          if (current.memoizedProps !== current.alternate.memoizedProps) {
          }
          //optional conditional as educational tool: This describes additional 'children' nodes that could be confusing to users
          // if (current.tag === 6) {
          //   current = current.return;
          //   continue;
          // }
            if (arr.indexOf(current) === -1) {
            //build node variable
            arr.push(current);
            nodeList.push(current.key);
                
            if (current.child) {
              current = current.child;
              continue;
            }
            if (current.sibling) {
              current = current.sibling;
              continue;
            }
            current = current.return;
            continue;
          }
          if (arr.indexOf(current) !== -1) {
            if (current.sibling) {
              current = current.sibling;
              continue;
            }
            current = current.return;
            continue;
          }
        }
        console.log(nodeList);
      }
    }, [add]);

    useEffect(() => {
      setVariable((x) => x + 1);
    }, [add]);

    return (
      <div key="top" className="App">
        <div key="paul">Hi</div>
        <button key="subtract">{subtract}</button>
        <button key="times"></button>
        <button key="divide"></button>
        <button
          onClick={() => {
            setAdd((x) => x + 1);
          }}
          key="add"
        >
          ADD {add}
        </button>
        <button key="Pocky Cocky">Variable {variable}</button>
      </div>
    );
};
  
  export default App;