import {
        GET_ALL_PRODUCTS,
        GET_ALL_CATEGORIES,
        GET_ALL_USERS,
        PRODUCT_ID_FILTER, 
        PRODUCT_ID_SORT, 
        PRODUCT_NAME_FILTER, 
        PRODUCT_NAME_SORT,
        PUT_PRODUCTS,
        EDIT_CATEGORY,
        USERS_ID_FILTER,
        USERS_ID_SORT,
        USERS_NAME_FILTER,
        USERS_NAME_SORT,
        PUT_USERS,
    } 
from "./actionTypes"

const initialState = {
    products: [],
    allProducts: [],
    upProducts: [],
    categories: [],
    users: [],
    allUsers:[],
    upUsers: [],
    productIdFilter: {},
    productIdSort: "",
    productNameSort: "",
    userIdSort: "",
    userNameSort: ""
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_PRODUCTS:
            return{
                ...state,
                products: payload,
                allProducts: payload
            }

        case GET_ALL_CATEGORIES:
            return{
                ...state,
                categories: payload
            }

        case GET_ALL_USERS:
            return{
                ...state,
                users: payload,
                allUsers: payload
            }

        case PUT_PRODUCTS:
            return {
                ...state,
                upProducts: payload
            }

        case PUT_USERS:
            return {
                ...state,
                upUsers: payload
            }

        case PRODUCT_ID_FILTER:
            return{
                ...state,
                products: payload.name ? [payload] : state.products
            }
        
        case PRODUCT_ID_SORT:
            return {
                ...state,
                productIdSort: payload,
                productNameSort: ""
            }

        case PRODUCT_NAME_FILTER:
            function removeAccents(str) {
                return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
              }
            const nameArr = state.allProducts.filter((product) => removeAccents(product.name).includes(payload))
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

        case EDIT_CATEGORY:
            return{
                ...state
            }
            
        case USERS_ID_FILTER:
            const userFiltered = state.allUsers.filter(user => user.id == payload)
            return{
                ...state,
                users: userFiltered.length !== 0 ? userFiltered : state.users
            }

        case USERS_ID_SORT:
            return{
                ...state,
                userIdSort: payload
            }

        case USERS_NAME_FILTER:
            const usersName = state.allUsers.filter((user) => user.full_name == payload)
            return{
                ...state,
                users: usersName.length !== 0 ? usersName : state.users
            }

        case USERS_NAME_SORT:
            return{
                ...state,
                userNameSort: payload
            }

        default:
            return{
                ...state
            }
    }
}