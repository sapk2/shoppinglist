

import React, { useState } from 'react';
import './App.css';
const App=()=>{
 const[items, setItem] =useState([]);
  const [inputvalue,setInputvalue]=useState('');
  const [error, setError] = useState('');


const handleSubmit=(e)=>{
  e.preventDefault();
  if (!inputvalue.trim()) {
    setError('please fill the text field');
    return;
  }
  setItem([...items, {text:inputvalue,id:Date.now(),isStrikethrough:false}]);
  setInputvalue('');
  setError('');

}
const Togglestrikethrough=(id)=>{
  setItem(items.map(item=>item.id===id?{...item,isStrikethrough:!item.isStrikethrough}:item));
}
const deleteItem =(id)=>{
  setItem(items.filter(item=>item.id!==id));

}
  return ( 
    <div className="App">
      <h1> Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <input type='text'value={inputvalue} onChange={(e)=>setInputvalue(e.target.value)} />
        <button className='formbutton' type='submit'>Add</button>
      </form> {error && <p className="error">{error}</p>}
     <ul>
     {
      items.map(item=>(
        <li key={items.id} onDoubleClick={()=>Togglestrikethrough(items.id)} style={{textdecoration:item.isStrikethrough ? 'strikethrough':'none'}}
        >
          {item.text}
          <button className='ul-button' onClick={()=>deleteItem(item.id)}>❌</button>

       </li>

      ))}
      
     </ul>
    </div>
  );
}

export default App;
