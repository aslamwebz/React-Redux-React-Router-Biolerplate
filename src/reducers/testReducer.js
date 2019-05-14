import { FETCH_TEST } from '../actions/types'

const initialState = {
    test:[]
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_TEST:{
            return{
                ...state,
                test:action.payload
            }
        }
        default:
        return state
    }
}