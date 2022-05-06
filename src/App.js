import './App.css';
import {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {todoAC} from "./store/todoReducer";

function App() {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todoReducer.todo)
    const todoObject = useRef()
    const titleObject = useRef()
    const addTodo = (title, todo) => {
        let newTodo = {
            id:Date.now(),
            title:title,
            todo:todo,
        }
        dispatch(todoAC(newTodo))
        titleObject.current.value = ''
        todoObject.current.value = ''
    }
  return (
    <div className="App">

        <input ref={titleObject} type={'text'} placeholder={'Название задания'}/>
        <input ref={todoObject} type={'text'} placeholder={'Описание задания'}/>
        <button onClick={()=>addTodo(titleObject.current.value,todoObject.current.value)}>
            Добавить задание
        </button>

        <div>
            {todos.map(t =>
                <div style={{border:'red solid 3px', margin:30, borderRadius:20, width: '70%',}}>
                    <div><span style={{color:'green'}}>Назва задания</span><br/>
                        {t.title}
                    </div>
                    <div><span style={{color:'green'}}>Описание задания</span><br/>
                        {t.todo}
                    </div>
                </div>
            )}
        </div>
    </div>
  );
}

export default App;
