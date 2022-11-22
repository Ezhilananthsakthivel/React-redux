import * as redux from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { counter } from './counter'
import { randomreducer } from './random'

// export function rootReducer(state = {}, action) {
//     return (
//         {
//             count: counter(state.count, action),
//             random: randomreducer(state.random, action)
//         }
//     )
// }
export default redux.createStore(counter)

//export default configureStore({ reducer: rootReducer })
//const rootReducer = redux.combineReducers({ count: counter, random: randomreducer })

// export const { getState, dispatch } = redux.createStore(counter)
// console.log(store.getState())
//console.log(dispatch({ type: inc, val: 2 }))
// console.log(getState())
// console.log(dispatch({ type: inc, val: 2 }))
// console.log(getState())