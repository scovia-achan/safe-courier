export const initialState = {
    user: localStorage.getItem("firstname"),
    role: localStorage.getItem("role")
}

function reducer(state, action){
    switch(action.type){
        case "CREATE_USER":
            return{
                ...state,
                user: action.user
            }
            
        default:
            return state

    }
}

export default reducer;