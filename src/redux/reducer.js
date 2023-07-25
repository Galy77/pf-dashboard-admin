import { GET_ALL_CATEGORIES, 
        GET_ALL_PRODUCTS, 
        PRODUCT_ID_FILTER, 
        PRODUCT_ID_SORT, 
        PRODUCT_NAME_FILTER, 
        PRODUCT_NAME_SORT 
    } 
from "./actionTypes"

const initialState = {
    products: [],
    categories: [],
    productIdFilter: {},
    productIdSort: "",
    productNameSort: ""
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_PRODUCTS:
            return{
                ...state,
                products: payload,
            }

        case GET_ALL_CATEGORIES:
            return{
                ...state,
                categories: payload
            }

        case PRODUCT_ID_FILTER:
            return{
                ...state,
                products: payload.name ? [payload] : products
            }
        
        case PRODUCT_ID_SORT:
            return {
                ...state,
                productIdSort: payload,
                productNameSort: ""
            }

        case PRODUCT_NAME_FILTER:
            const nameArr = state.products.filter((product) => product.name.includes(payload))
            return{
                ...state,
                products: nameArr.length === 0 ? products : nameArr
            }

        case PRODUCT_NAME_SORT:
        return{
            ...state,
            productNameSort: payload,
            productIdSort: ""
        }

        default:
            return{
                ...state
            }
    }
}