import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './TSpractice-state';
import React, {useState} from "react";

type UserType = {
    id: number
    userName: string
    email: string
    password: string
}

const loraUser: UserType = {
    id: 1,
    userName: "Lora",
    email: 'lora@ya.ru',
    password: 'asdfasdf123'
}

type ChangeUserPasswordTypeAT = {
    type: "CHANGE-USER-PASSWORD"
    payload: {
        id: number,
        newPassword: string
    }
}

const state: any = [loraUser]

export const userReducer =
    (state: UserType[], action: ChangeUserPasswordTypeAT): UserType[] => {
        switch (action.type) {
            case "CHANGE-USER-PASSWORD":
                return state.map(u =>
                    u.id === action.payload.id
                        ? {...u, password: action.payload.newPassword}
                        : u)
            default:
                return state
        }
    }
console.log(userReducer(state, {type: "CHANGE-USER-PASSWORD", payload: {id: 1, newPassword: 'sadfasdf'}}))

const App = () => {
    return <div>hi</div>
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <App/>
);

reportWebVitals();

