// import './index.css';
// import reportWebVitals from './reportWebVitals';
// import {combineReducers, createStore} from 'redux'
// import React, {useState, useReducer, useEffect, useCallback, useMemo} from 'react';
// import {Provider, useSelector, useDispatch} from 'react-redux'
// import ReactDOM from 'react-dom';

import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client';
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import axios from 'axios';

// Types
type PostType = {
    body: string
    id: string
    title: string
    userId: string
}

type PayloadType = {
    title: string
    body?: string
}


// Api
const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/'})

const postsAPI = {
    getPosts() {
        return instance.get<PostType[]>('posts')
    },
    updatePostTitle(postId: string, post: PayloadType) {
        return instance.put<PostType>(`posts/${postId}`, post)
    }
}


// Reducer
const initState = [] as PostType[]

type InitStateType = typeof initState

const postsReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case 'POSTS/GET-POSTS':
            return action.posts

        case 'POSTS/UPDATE-POST-TITLE':
            return state.map((p) => {
                if (p.id === action.post.id) {
                    return {...p, title: action.post.title}
                } else {
                    return p
                }
            })

        default:
            return state
    }
}

const getPostsAC = (posts: PostType[]) => ({type: 'POSTS/GET-POSTS', posts} as const)
const updatePostTitleAC = (post: PostType) => ({type: 'POSTS/UPDATE-POST-TITLE', post} as const)
type ActionsType = ReturnType<typeof getPostsAC> | ReturnType<typeof updatePostTitleAC>

const getPostsTC = (): AppThunk => (dispatch) => {
    postsAPI.getPosts()
        .then((res) => {
            dispatch(getPostsAC(res.data))
        })
}

const updatePostTC = (postId: string): AppThunk => (dispatch, getState: any) => {
    try {
        const currentPost = getState().find((p: PostType) => p.id === postId)

        if (currentPost) {
            const payload = {title: 'Это просто заглушка. Backend сам сгенерирует новый title'}
            postsAPI.updatePostTitle(postId, payload)
                .then((res) => {
                    dispatch(updatePostTitleAC(res.data))
                })
        }
    } catch (e) {
        alert('Обновить пост не удалось ?')
    }

}

// Store
const rootReducer = combineReducers({
    posts: postsReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))
type RootState = ReturnType<typeof store.getState>
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
const useAppDispatch = () => useDispatch<AppDispatch>()
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// App
const App = () => {
    const dispatch = useAppDispatch()
    const posts = useAppSelector(state => state.posts)

    useEffect(() => {
        dispatch(getPostsTC())
    }, [])

    const updatePostHandler = (postId: string) => {
        dispatch(updatePostTC(postId))
    }

    return (
        <>
            <h1>? Список постов</h1>
            {
                posts.map(p => {
                    return <div key={p.id}>
                        <b>title</b>: {p.title}
                        <button onClick={() => updatePostHandler(p.id)}>Обновить пост</button>
                    </div>
                })
            }
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Provider store={store}> <App/></Provider>)

// ? Описание:
// Попробуйте  .
// Debugger / network / console.log вам в помощь
// Найдите ошибку и вставьте исправленную строку кода в качестве ответа.

// ? Пример ответа: const payload = {...currentPost, tile: 'Летим ?'}

// ReactDOM.render(<IntervalExample/>, document.getElementById('root'))
// @ts-ignore
window.store = store;

