import React, { useState, useEffect, useRef, Component } from 'react';
import './styles.css';


const App = () => {
  const [demo, setDemo] = useState(1);
  const [divide, setDivide] = useState(null);
  const [subtract, setSubtract] = useState(100);
  const [variable, setVariable] = useState(0);
  const [array, setArray] = useState([]);
  const [array2, setArray2] = useState([]);
  const [textBox, setTextBox] = useState(null);
  const [boxVisibility, setBoxVisibility] = useState("hidden");
  const [demoColor, setDemoColor] = useState()
  const nullArrTracker = useRef(0);
  const newObj = <App />;


function demoButton() {
  setDemoColor('green');
  setDemo(2)
}


useEffect(()=>
  window.addEventListener("keydown", (e) => {
  console.log(e.key)
  if (e.key==="Escape")
  setBoxVisibility("hidden")
  }
))


//Traverses the fibernode starting at the root node.
//As it traverses it creates three arrays to be displayed by clicking "DEMO". 
//One array displays the node buttons. One displays the lines connecting them. And the last displays an information card for the node.
//the information card contains information about the node and is displayed by clicking on the nodes
  useEffect(() => {
      //NOT IMPORTANT for DEV TOOL, only neccesarry for demo application
      if (variable == 2) {
        let current = newObj._owner;
        const head = current;        
        class NodeMaker {
          constructor(key, x, y, duration, tag, lineNumber, parent, type, alternate) {
            this.key = key;
            this.x = x;
            this.y = y;
            this.duration= duration;
            this.tag = tag;
            this.lineNumber = lineNumber;
            this.parent = parent;
            this.type = type;
            this.alternate=alternate;
          }
        }
        let nodeMade = null;
        let nodeTracker = [];
        let arr = [head];
        let lineList = [
          <div
            style={{
              gridColumn: `1 / span 1`,
              gridRow: `2 / span 2`,
              animation: `example2 1s linear 1`,
            }}
            className="lineVertical"
          ></div>,
        ];

        let nodeList = [
          <button
            key={current.key}
            className="nodes"
            style={{
              gridColumnStart: 1,
              gridColumnEnd: 'span 1',
              gridRowStart: 2,
              gridRowEnd: 'span 1',
              justifySelf: 'center',
              animation: `blinker ${(2 + 1) / 3}s linear 1`,
            }}
          >
            <b style={{ fontSize: '12px' }}>APP</b>
            {current.type}
          </button>,
        ];

        current = current.child;


        let yDepth = 3;
        let xDepth = 1;
        let previousX = 0;
        let initX = 1;
        let i = 0;
        
        while (current !== head) {
          if (arr.indexOf(current) === -1) {
            if (current.key){
              nullArrTracker.current = nullArrTracker.current + 1;
              nodeMade = new NodeMaker(
                current.key,
                xDepth,
                yDepth,
                parseFloat(current.actualDuration.toFixed(6)),
                current.tag,
                current._debugSource.lineNumber,
                current.return.key,
                current.type.toUpperCase(),
                current.alternate
              );
            }
            if (!current.key) {
              nullArrTracker.current = nullArrTracker.current + 1;
        
              nodeMade = new NodeMaker(
                nullArrTracker.current,
                xDepth,
                yDepth,
                parseFloat(current.actualDuration.toFixed(6)),
                current.tag,
                current.return._debugSource.lineNumber,
                current.return.key, 
                "TEXT",
                current.alternate

              );
            }
            nodeTracker.push(nodeMade);
            arr.push(current);
            nodeList.push(
              <button
                key={current.key}
                id={i}
                className="nodes"
                style={{
                  animation: `blinker ${(xDepth + yDepth) / 3}s linear 1`,
                  gridColumnStart: xDepth,
                  gridColumnEnd: 'span 1',
                  gridRowStart: yDepth,
                  gridRowEnd: 'span 1',
                  justifySelf: 'center ',
                  zIndex: '0',
                }}
              >
                {current.type != null ? current.type : ''}{' '}
                {current.key != null ? current.key : 'Text'}{' '}
              </button>
            );
            i++;
            if (current.child) {
              initX = xDepth;
              current = current.child;

              lineList.push(
                <div
                  style={{
                    gridColumn: `${xDepth} / span 1`,
                    gridRow: `${yDepth} / span 2`,
                    animation: `example2 ${(xDepth + yDepth) / 3}s linear 1`,
                  }}
                  className="lineVertical"
                ></div>
              );
              yDepth++;
              continue;
            }
            if (current.sibling) {
              current = current.sibling;

              lineList.push(
                <div
                  style={{
                    gridColumn: `${xDepth} / ${xDepth + 2}`,
                    gridRow: `${yDepth} / span 1`,
                    animation: `example ${(xDepth + yDepth) / 3}s linear 1 `,
                  }}
                  className="lineHorizontal"
                ></div>
              );

              xDepth++;
              continue;
            }
            if (!current.sibling && !current.child) {
              previousX = xDepth;
              current = current.return;
              initX = nodeTracker.filter(
                (el) => el.alternate === current.alternate
              )[0].x;
              yDepth--;
              continue;
            }
          }
          if (arr.indexOf(current) !== -1) {
            if (current.sibling) {
              lineList.push(
                <div
                  style={{
                    animation: `example ${(xDepth + yDepth) / 3}s linear 1`,
                    gridColumnStart: `${initX}`,
                    gridColumnEnd: `${previousX + 2}`,
                    gridRow: `${yDepth} / span ${1}`,
                  }}
                  className="lineHorizontal"
                ></div>
              );
              current = current.sibling;
              xDepth++;
              continue;
            }

            current = current.return;
            continue;
          }
        }

        let variable = null;
      
        setTimeout(()=> {        
          for (let j = 0; j < nodeList.length; j++) {
            variable = document.getElementById(j);
            variable.addEventListener('click', () => {
              loadModal(j);
             })
          }     
       
         }, 10)
        
        function loadModal(j){
          let modalArr = [];
          modalArr.push(
            <h2
              style={{ marginTop: "-10px" }}>
              Type: {nodeTracker[j].type}
            </h2>,
            <div>key:{nodeTracker[j].key}</div>, <div>duration: {nodeTracker[j].duration}</div>, <div>tag: {nodeTracker[j].tag}</div>, <div>lineNumber: {nodeTracker[j].lineNumber}</div>, <div>parent: {nodeTracker[j].parent}</div>);
          
         if (nodeTracker[j].duration===0){
          modalArr.push(<div style={{color: "gold", marginTop: "20px", marginLeft: "87px", position: "absolute", opacity: ".8"}}>Idle</div>)
         }
         if (nodeTracker[j].duration!=0){
          modalArr.push(<div style={{color: "green", marginTop: "20px", marginLeft: "75px", position: "absolute"}}>Active</div>)
         }
          setTextBox(modalArr)
        }

        setArray(nodeList);
        setArray2(lineList);
      } 
    
  }, [demo]);

  

  useEffect(()=>{
  if (demo>1){
    setBoxVisibility("visible");
}

  }, [textBox])

  useEffect(() => {
    setVariable((x) => x + 1);
  }, [demo]);


  //The Div with the key "contain" is the true functionality of the tool. Everything else is used to construct data for the tree;
  //if you want to expand the node tree, add more html components to be rendered to see their relation
  return (
    <div key="Original" className="body">
      <div key="TopOf">
        <div key="Second" className="App">
        </div>
        <div key="Tempo">
          <button  style={{visibility: "hidden"}} key="Divide">
            {' '}
            {divide} {demo}
          </button>
          <button key="Subtract" style={{visibility: "hidden"}}>Subtract</button>
        </div>
        <button
          onClick={() => {
            demoButton();
          }}
          key="Add"
          className='demo'
          style={{borderColor: ''}}
        >
          Demo 
        </button>
        <div key="Contain" className="container">
          {array}
          {array2}
          <button className= 'textBox' style={{visibility: boxVisibility}}>
          <button onClick={()=>setBoxVisibility("hidden")} className="xButton">x</button>
          {textBox}
          </button>
        </div>
      </div>      
      <button key="Last" style={{visibility: 'hidden'}}></button>
    </div>
  );
};


export default App;
