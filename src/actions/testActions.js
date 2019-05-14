import { FETCH_TEST } from './types'

export const fetchTest = () => dispatch => {
    dispatch({
        type:FETCH_TEST,
        payload:'test'
    })
}