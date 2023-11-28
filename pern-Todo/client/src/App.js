import { Fragment } from 'react';
import './App.css';
//components
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';
function App() {
  return(
<Fragment >
<InputTodo input='ADD'/>
<ListTodos/>

</Fragment>
  )
}

export default App;
