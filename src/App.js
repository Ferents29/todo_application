import './App.css';
import {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodoAC, doneTodoAC, onImportantAC, removeTodoAC, unDoneTodoAC, unImportantAC} from "./store/todoReducer";

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
            doneStatus:true,
            importantStatus:true
        }
        dispatch(addTodoAC(newTodo))
        titleObject.current.value = ''
        todoObject.current.value = ''
    }
    const removeTodo = (id) => {
        dispatch(removeTodoAC(id))
    }
    const doneTodo = (id) => {
        dispatch(doneTodoAC(id))
    }
    const unDoneTodo = (id) => {
        dispatch(unDoneTodoAC(id))
    }
    const onImportant = (id) => {
        dispatch(onImportantAC(id))
    }
    const unImportant = (id) => {
        dispatch(unImportantAC(id))
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
                    <div>
                        <button onClick={() => removeTodo(t.id)}>Удалить задание</button>
                    </div>
                    <div style={{padding:10,display:'flex'}}>
                        {t.doneStatus
                            ?
                            <div>
                                <span style={{margin:10,borderRadius:10,backgroundColor:'red',padding:10}}>
                                    Задание не сделано
                                </span>
                                <button onClick={() => doneTodo(t.id)}>Задание сделано</button>
                            </div>
                            :
                            <div>
                                <span style={{margin:10,borderRadius:10,backgroundColor:'green',padding:10}}>
                                    Задание сделано
                                </span>
                                <button onClick={() => unDoneTodo(t.id)}>Отметить как не сделано</button>
                            </div>
                        }
                    </div>
                    <div style={{display:'flex',margin:30}}>
                        {t.importantStatus
                            ?
                            <div>
                                <div style={{width:30,height:30,borderRadius:5,border:'4px solid white',backgroundColor:'yellow'}}
                                      onClick={() => onImportant(t.id)}>
                                </div>
                                <div>Снять отметку как важное</div>
                            </div>
                            :
                            <div>
                                <div style={{width:30,height:30,borderRadius:5,border:'4px solid white',backgroundColor:null}}
                                      onClick={() => unImportant(t.id)}>
                                </div>
                                <div>Выделить как важное</div>
                            </div>
                        }
                    </div>
                </div>
            )}
        </div>
    </div>
  );
}

export default App;
