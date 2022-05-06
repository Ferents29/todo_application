
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
        default:
            return state
    }
}
export const todoAC = (newTodo) => {
    return {type:'TODO_REDUCER',payload:newTodo}
}