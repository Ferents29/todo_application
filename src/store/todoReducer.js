
const defaultState = {
    todo:[]
}
export const todoReducer = (state = defaultState,action) => {
    switch (action.type){
        case 'TODO_REDUCER':{
            return {
                ...state,
                todo: [...state.todo, action.payload],
            }
        }
        case 'REMOVE_REDUCER':{
            return {
                ...state,
                todo: state.todo.filter(elem => elem.id !== action.id),
            }
        }
        case 'DONE_TODO_REDUCER':{
            return {
                ...state,
                todo:state.todo.filter(elem => {
                    if(elem.id == action.id){
                        elem.doneStatus = ! elem.doneStatus
                    }
                    return elem
                })
            }
        }
        case 'UN_DONE_TODO_REDUCER':{
            return {
                ...state,
                todo:state.todo.filter(elem => {
                    if(elem.id == action.id){
                        elem.doneStatus = ! elem.doneStatus
                    }
                    return elem
                })
            }
        }
        case 'ON_IMPORTANT_TODO_REDUCER':{
            return {
                ...state,
                todo:state.todo.filter(elem => {
                    if(elem.id == action.id){
                        elem.importantStatus = ! elem.importantStatus
                    }
                    return elem
                })
            }
        }
        case 'UN_IMPORTANT_TODO_REDUCER':{
            return {
                ...state,
                todo:state.todo.filter(elem => {
                    if(elem.id == action.id){
                        elem.importantStatus = ! elem.importantStatus
                    }
                    return elem
                })
            }
        }


        default:
            return state
    }
}
export const addTodoAC = (newTodo) => {
    return {type:'TODO_REDUCER',payload:newTodo}
}
export const removeTodoAC = (id) => {
    return {type:'REMOVE_REDUCER',id:id}
}
export const doneTodoAC = (id) => {
    return {type:'DONE_TODO_REDUCER',id:id}
}
export const unDoneTodoAC = (id) => {
    return {type:'UN_DONE_TODO_REDUCER',id:id}
}
export const onImportantAC = (id) => {
    return {type:'ON_IMPORTANT_TODO_REDUCER',id:id}
}
export const unImportantAC = (id) => {
    return {type:'UN_IMPORTANT_TODO_REDUCER',id:id}
}
