import { useState } from 'react';
import Content from './components/content'
import { useEffect } from 'react'


const gifts = [
  'CPU I9',
  'RAM 32 GB RGB',
  'RGB Keyboard'
]

const courses = [
  {
    id : 1,
    name : "php"
  },
  {
    id : 2,
    name : "Javascript"
  },
  {
    id : 3, 
    name : "ReactJs"
  }
]

function App() {

  const [show, setShow] = useState(false)
 return (
   <div style={{ padding: 32 }}>
     <button onClick={() => setShow(!show)}>show</button>
     {show && <Content />}
   </div>
 )
}

export default App;
