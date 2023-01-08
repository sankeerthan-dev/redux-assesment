const productReducer =(state={}, action) => {
    return {...state,products : action.products}
}

export default productReducer