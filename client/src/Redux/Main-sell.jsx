import {createStore,applyMiddleware} from 'redux'
import reducer from './Store-Data/Book-Red'
import reDucer1 from './GPD/GPD-Reducer'
import Logger from 'redux-logger'
import thunk from 'redux-thunk'
export const data1=createStore(reDucer1,applyMiddleware(thunk,Logger))
export const store1=createStore(reducer,applyMiddleware(thunk,Logger))
