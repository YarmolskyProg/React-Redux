import axios from 'axios'


let instance = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/"
})

export let productsApi={
    getProducts(){
       return instance.get('comments?_limit=10').then(res=>res.data)
    }
}