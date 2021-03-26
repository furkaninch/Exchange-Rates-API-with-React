import axios from "axios"

export const exchange = (first) => {
    return axios.get(`https://api.exchangeratesapi.io/latest?base=${first}`)
}