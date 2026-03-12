import { defineStore } from "pinia"

export const useProductStore = defineStore("products", {

state: () => ({

products: [
{ id:1 , title:"Laptop" , price:50000 },
{ id:2 , title:"Phone" , price:20000 },
{ id:3 , title:"Tablet" , price:30000 }
]

}),

})