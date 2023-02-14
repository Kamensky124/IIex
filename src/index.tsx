import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import React, {useState} from "react";
import {text} from "stream/consumers";

type UserType = {
    id: number
    name: string
    status: "online" | "offline"
}

type AddressType = {
    country: string
    city: string
    email: string
}

type AdressesType = {
    [userID: string]: AddressType
}

const users: Array<UserType> = [
    {id: 1, name: "Bob", status: "online"},
    {id: 2, name: "Alex", status: "offline"},
    {id: 3, name: "Ann", status: "offline"},
]

const addresses: AdressesType = {
    1: {country: "Russia", city: "Moscow", email: "hey@email.com"},
    2: {country: "Ukraine", city: "Kiev", email: "yo@send.ua"},
    3: {country: "Belarus", city: "Minsk", email: "wow@gogo.ru"},

}

const updateUserAddress = (userID: number, key: string, newValue: string) => {
    // debugger
    return {...addresses,
        [userID]: {...addresses[userID], [key]: newValue}
    }
}



const App = () => {
    // updateUserAddress (4,'city',"Krsk");
    // console.log(users);
    // console.log(addresses);
    // debugger;
    return <div>hi</div>
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <App/>
);

reportWebVitals();

