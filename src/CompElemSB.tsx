import './index.css';
import reportWebVitals from './reportWebVitals';
import {combineReducers, createStore} from 'redux'
import React, {useState, useReducer, useEffect, useCallback, useMemo} from 'react';
import {Provider, useSelector, useDispatch} from 'react-redux'
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
    constructor(props:any) {
        super(props)
        console.log('Это экземпляр компонента: ', this)
    }

    render() {
        const another_element = <div>Привет, народ!</div>

        console.log('Это элемент: ', another_element)

        return another_element
    }
}

console.log('Это компонент: ', MyComponent)

const element = <MyComponent/>

    console.log('Это элемент: ', element)

ReactDOM.render(
    element,
    document.getElementById('root')
)
