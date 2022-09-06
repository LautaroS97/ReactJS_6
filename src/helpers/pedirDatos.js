import { stock } from "../data/data.js"

export const pedirDatos = () => {
    return new Promise( (resolve) => {
        setTimeout(()=>{
            resolve(stock)
        }, 3000)
    })
}