import React, { useState, useEffect, useRef, Component } from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

// import { rootNode } from '../script';
// console.log('This is the root node from the bundled App.jsx');
// console.log(rootNode);


const App = () => {
  const [add, setAdd] = useState(1);
  const [times, setTimes] = useState(2);
  const [divide, setDivide] = useState(null);
  const [subtract, setSubtract] = useState(100);
  const [variable, setVariable] = useState(0);
  //const newObj = window.document.body.children[0][0]
  const newObj = <App />;
  const [array, setArray] = useState([]);
  const [array2, setArray2] = useState([]);
  const [version, setVersion] = useState('Simple');
  const nullArrTracker =useRef(0)
  const [textBox, setTextBox]=useState(null);
  const [boxVisibility, setBoxVisibility]= useState("hidden")

  const nullArr=[];
  for (let i=0; i<99;i++ ){
    nullArr.push(i);
  }


const tempArr=[];


  useEffect(() => {
    
    //Qualifier to only run if the correct version is clicked
    if (version === 'Simple') {
      //NOT IMPORTANT for DEV TOOL
      if (variable == 2) {
        //set current to the root fiber node
        let current = newObj._owner;
        //Sets the orignial fiber node, so we can know we hit the end of the while loop
        const head = current;
console.log(newObj)
        class NodeMaker {
          constructor(key, x, y, duration, tag) {
            this.key = key;
            this.x = x;
            this.y = y;
            this.duration= duration;
            this.tag=tag
          }
        }
        let nodeMade = null;
        let nodeTracker = [];
        let arr = [head];
       
        //create an array Lines
        //insert the first line into the array.
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
        //create a list of nodes
        //insert the first node
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
              // marginTop: '30px',
              animation: `blinker ${(2 + 1) / 3}s linear 1`,
            }}
          >
            <b style={{ fontSize: '12px' }}>APP</b>
            {current.type}
          </button>,
        ];
        //set current node to the precious current's child.
        current = current.child;

        //set variables to keep track of our position in the array relative to the grid
        let yDepth = 3;
        let xDepth = 1;
        let previousX = 0;
        let initX = 1;
        let i=1;
        //only compare
        //as long as we're not at the top keep going
        while (current !== head) {
          //if the current node does not exist in the grid
          if (arr.indexOf(current) === -1) {
            if (current.key){
              nullArrTracker.current= nullArrTracker.current+1;

              nodeMade = new NodeMaker(
                current.key,
                xDepth,
                yDepth,
                parseFloat(current.actualDuration.toFixed(6)),
                current.tag
                
              );
            }

            if (!current.key){
              nullArrTracker.current= nullArrTracker.current+1;
        

              nodeMade = new NodeMaker(
                nullArr[nullArrTracker.current],
                xDepth,
                yDepth,
                parseFloat(current.actualDuration.toFixed(6)),
                current.tag
                
              );
            }
           
            nodeTracker.push(nodeMade);
            arr.push(current);

            //push a button into the node list. Set the buttons x and y coordinates to the x and y depth
            //Make the animation last as long as how deep in the tree this current node exist.
            
i++;
console.log(i)
            nodeList.push(
              <button
                key={current.key}
                id={i}
                className="nodes"
                style={{
                  // opacity: 1,
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
            //if the current node has a child
            if (current.child) {
              //set initial x to current xdepth
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
              // nodeList.push(<div className="lineHorizontal"></div>);

              continue;
            }
            if (!current.sibling && !current.child) {
              previousX = xDepth;
              current = current.return;
              initX = nodeTracker.filter(
                (el) => el.key === current.key
              )[0].x;
              yDepth--;
              continue;
            }
          }
          if (arr.indexOf(current) !== -1) {
            if (current.sibling) {
              console.log(current.key, initX)
              // if (current.key == 'TopOf') {
              //   initX = 1;
              //   console.log(initX, xDepth);
              // }
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
              // nodeList.push(<div className="lineHorizontal"></div>);

              continue;
            }

            current = current.return;
            continue;
          }
        }

        let variable=null;

        // console.log(nodeList)
        // console.log(lineList)
     
      
        setTimeout(()=>{        
       
          for (let j=2; j< nodeList.length+1; j++){

            variable= document.getElementById(j);
            console.log(nodeTracker[j-2])

            variable.addEventListener('click',()=>{
              loadModal(j);
             })
          }     
       
         } ,10)
        
        
        

  

        function loadModal(j){
          let modalArr=[<ul></ul>]

          for (let props in nodeTracker[j-2]){
           {
            modalArr.push(
              <li> {props} : {nodeTracker[j-2][props]}</li>
            )
            }

          }
         
          setTextBox(modalArr)
          
        }

        setArray(nodeList);

        setArray2(lineList);
      } 
    }
  }, [add]);

  useEffect(() => {
    if (version === 'Full')
      if (variable > 1) {
        let current =  newObj._owner;
        const head = current;
        let arr = [head];
        let lineList = [
          <div
            style={{
              gridColumn: `${1} / span 1`,
              gridRow: `${2} / span 2`,
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
              // marginTop: '30px',
              animation: `blinker ${(2 + 1) / 3}s linear 1`,
            }}
          >
            <b style={{ fontSize: '10px' }}>APP</b>
            {current.type}
          </button>,
        ];

        class NodeMaker {
          constructor(key, x, y, debug) {
            this.key = key;
            this.x = x;
            this.y = y;
            this.debug = debug;
          }
        }

        let nodeMade = null;

        let nodeTracker = [];
        current = current.child;

        let yDepth = 3;
        let xDepth = 1;
        let previousX = 0;
        let initX = 1;
        //only compare
        //as long as we're not at the top keep going
        while (current !== head) {
          if (current.tag == 6 || current.tag == 7) {
            yDepth--;
            previousX = xDepth;

            current = current.return;
            continue;
          }

          // if (current.memoizedProps !== current.alternate.memoizedProps) {
          // }
          //optional conditional

          if (arr.indexOf(current) === -1) {
            arr.push(current);
            nodeMade = new NodeMaker(
              current.key,
              xDepth,
              yDepth,
              current._debugID,
              

            );
            nodeTracker.push(nodeMade);
            nodeList.push(
              <button
                key={current.key}
                className="nodes"
                style={{
                  // opacity: 1,
                  animation: `blinker ${(xDepth + yDepth) / 3}s linear 1`,
                  gridColumnStart: xDepth,
                  gridColumnEnd: 'span 1',
                  gridRowStart: yDepth,
                  gridRowEnd: 'span 1',
                  justifySelf: 'center ',
                  zIndex: '0',
                }}
              >
                {current.type != null ? current.type : ''}
                <b style={{ fontSize: '10px' }}>
                  {' '}
                  {current.key != null ? current.key : 'Text'}{' '}
                </b>{' '}
              </button>
            );

            if (current.child) {
              //REALLY important for some reason
              initX = xDepth;
              if (current.child.tag != 6 && current.child.tag != 7) {
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
              }
              current = current.child;

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
                    animation: `example ${(Depth + yDepth) / 3}s linear 1`,
                  }}
                  className="lineHorizontal"
                ></div>
              );
              xDepth++;
              // nodeList.push(<div className="lineHorizontal"></div>);

              continue;
            }
            if (!current.sibling && !current.child) {
              previousX = xDepth;
              current = current.return;
              initX = nodeTracker.filter(
                (el) => el.debug === current._debugID
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
                    gridColumnStart: `${initX}`,
                    gridColumnEnd: `${previousX + 2}`,
                    gridRow: `${yDepth} / span ${1}`,
                    animation: `example ${(xDepth + yDepth) / 3}s linear 1`,
                  }}
                  className="lineHorizontal"
                ></div>
              );
              current = current.sibling;
              xDepth++;
              // nodeList.push(<div className="lineHorizontal"></div>);
              continue;
            }
            current = current.return;
            continue;
          }
        }
        setArray(nodeList);
        setArray2(lineList);
      }
  }, [add]);

  useEffect(()=>{
if (add>1){
    setBoxVisibility("visible");
    console.log("boxVisibility")
}

  },[textBox])

  useEffect(() => {
    setVariable((x) => x + 1);
  }, [add]);

  return (
    <div key="Original" className="body">
      <div key="TopOf">
        <div key="Second" className="App">

   
          <button
            onClick={() => {
              version === 'Full' ? setVersion('Simple') : setVersion('Full');
            }}
            key="Nodes"
          >
            {version}
          </button>
        </div>

        <div key="Tempo">
          <button key="Divide">
            {' '}
            {divide} {add}
          </button>
          <button key="Subtract">Subtract</button>
        </div>
        <button
          onClick={() => {
            setAdd((x) => x + 1);
          }}
          key="Add"
        >
          ADD {add}
          {subtract}
        </button>

        <div key="Contain" className="container">
          {array}
          {array2}
          <button onClick={()=>setBoxVisibility("hidden")} className= 'textBox' style={{visibility: boxVisibility}}>{textBox}
          {/* <button onClick={()=>setBoxVisibility("hidden")}>Close</button> */}
          </button>
        </div>
        <button key="Last"></button>
      </div>
      <div key="cat">HI</div>
    </div>
  );
};

// function App() {
//   return (
//     <div>
//       <buttton>Suck my Matt</buttton>
//     </div>
//   )
// }


export default App;
