import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'


export const PageNotFound = () => {
    return <h2>⛔ 404. Page not found ⛔</h2>
}

export const Profile = () => {
    return <h2>😎 Профиль</h2>
}


export const Main = () => {
    return (
        <>
            <h2>✅ Список тудулистов</h2>
            <h2>📜 Список постов</h2>
        </>
    )
}

// App
export const App = () => {

    return (
        <Routes>
            <Route path={'profile'} element={<Profile/>}/>
            {/* ❗❗❗ XXX ❗❗❗  */}
        </Routes>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<BrowserRouter><App/></BrowserRouter>)

// 📜 Описание:
// Вместо ХХХ напишите роут таким образом, чтобы вне зависимости от того чтобы будет в урле (login или home или...)
// вас всегда редиректило на страницу профиля и при в это в урле по итогу
// был адрес /profile