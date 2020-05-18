import React, {useRef} from 'react';
import RandomName from './RandomName'


function Clicker(){
const todoNameRef = useRef();

function handleAddTodo(e){
  const name = todoNameRef.current.value
  if (name === '')return
  console.log(name);
  todoNameRef.current.value = null
}
    return (
      <div>
        <input ref={todoNameRef} type='text' placeholder="Input #1-10 for info"/>
        <button type='submit' onClick={handleAddTodo}>submit</button>
      </div>
    );
  }


export default Clicker;
