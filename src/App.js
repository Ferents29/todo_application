import './App.css';
import {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";

function App() {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todoReducer.todo)
    const todoObject = useRef()
    const titleObject = useRef()
    const addTodo = (title, todo) => {
        let newTodo = {
            title:title,
            todo:todo,
        }
        dispatch({type:'TITLE_REDUCER',payload:newTodo})
    }
  return (
    <div className="App">
        <input ref={titleObject} type={'text'} placeholder={'Название задания'}/>
        <input ref={todoObject} type={'text'} placeholder={'Описание задания'}/>
      <button onClick={()=>addTodo(titleObject.current.value,todoObject.current.value)}>Добавить задание</button>
        <div>
            {todos.map(t => <div>{t.title} {t.todo}</div>)}
        </div>
    </div>
  );
}

export default App;
