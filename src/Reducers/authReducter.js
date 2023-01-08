const auth=(state={}, action) => {
    switch(action.type){
        case "Login":
            return {
                ...state,
                    token: action.token
                
    }
        case "Logout":
            return { token:null}
        default:
            return state
    }
}

export default auth