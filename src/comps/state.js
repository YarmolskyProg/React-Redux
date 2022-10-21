import { productsApi } from "../api/api"

let state = {
    products: []
}

export let setProducts = () => {
    productsApi.getProducts().then(res =>
        state.products = res
    )
    return state
}

export let getProducts=()=>{
    return state.products
}