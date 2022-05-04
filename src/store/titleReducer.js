
const defaultState = {
    todo:[]
}
export const todoReducer = (state = defaultState,action) => {
    switch (action.type){
        case 'TITLE_REDUCER':{
            return {
                ...state,
                todo: [...state.todo, action.payload],

            }
        }
        default:
            return state
    }
}