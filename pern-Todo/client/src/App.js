import { Fragment, useState } from 'react';
import './App.css';
//components
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';
function App() {
  const [updateTrigger, setUpdateTrigger] = useState(0);
  const handleButtonPress = () =>{
    setUpdateTrigger((prev)=> prev+1);
  }
  console.log(updateTrigger)
  return(
<Fragment >
<InputTodo input='ADD' onButtonPress={handleButtonPress}/>
<ListTodos triggerUpdat={updateTrigger} onButtonPress={handleButtonPress}/>

</Fragment>
  )
}

export default App;
