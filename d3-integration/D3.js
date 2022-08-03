import React, { useState, useEffect, useRef } from 'react';
import TreeChart from './TreeChart';
import './D3.css';

const initialData = {
  name: 'App',
  children: [
    {
      name: 'Child1',
      children: [
        {
          name: 'Sibling3',
        },
        {
          name: 'Child2',
        },
        {
          name: 'Sibling4',
        },
      ],
    },
  ],
};

function App() {
  const [data, setData] = useState(initialData);
  const videoRef = useRef();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      });
  }, []);

  return (
    <React.Fragment>
      <h1>HI FIBER</h1>
      <h2>A great way to visually see the rendering of the Fiber Tree</h2>
      <TreeChart data={data} />
      <button onClick={() => setData(initialData.children[0])}>
        Update data
      </button>
    </React.Fragment>
  );
}

export default App;