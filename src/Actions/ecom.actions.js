export const loginToEcom = token => ({
    type: "Login",
    token  
})

// export const getProducts = products =>({
//     type:"ADD_PRODUCTS",
//     products : products
// })

export const getProducts = products =>{
    return({
    type:"ADD_PRODUCTS",
    products : products
})}
