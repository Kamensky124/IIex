import './index.css';
import reportWebVitals from './reportWebVitals';
import {combineReducers, createStore} from 'redux'
import React, {useState, useReducer, useEffect, useCallback, useMemo} from 'react';
import {Provider, useSelector, useDispatch} from 'react-redux'
import ReactDOM from 'react-dom';

// debugger
// console.log()



// ReactDOM.render(<IntervalExample/>, document.getElementById('root'))
// @ts-ignore
window.store = store;

