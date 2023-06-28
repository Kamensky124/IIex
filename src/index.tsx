import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client';
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import axios, { AxiosError } from 'axios';


// Types
type CommentType = {
    postId: string
    id: string
    name: string
    email: string
    body: string
}

// Api
const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/'})

const commentsAPI = {
    getComments() {
        return instance.get<CommentType[]>('comments')
    }
}

// Reducer
const initState = {
    comments: [] as CommentType[]
}

type InitStateType = typeof initState

const appReducer = (state: InitStateType = initState, action: ActionsType) => {
    switch (action.type) {
        case 'COMMENTS/GET-COMMENTS':
            return {...state, comments: action.comments}

        default:
            return state
    }
}

const getCommentsAC = (comments: CommentType[]) => ({type: 'COMMENTS/GET-COMMENTS', comments} as const)
type ActionsType = ReturnType<typeof getCommentsAC>

// Thunk
const getCommentsTC = (): AppThunk => (dispatch) => {
    commentsAPI.getComments()
        .then((res) => {
            // debugger
            dispatch(getCommentsAC(res.data))
        })
        .catch((e: AxiosError) => {
            // debugger
            // alert(`Сообщение об ошибке: ${e.message}`)
        })
}


// Store
const rootReducer = combineReducers({
    app: appReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))
type RootState = ReturnType<typeof store.getState>
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
const useAppDispatch = () => useDispatch<AppDispatch>()
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


// Components
export const App = () => {

    const comments = useAppSelector(state => state.app.comments)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getCommentsTC())
    }, [])

    return (
        <>
            <h1>📝 Список комментариев</h1>
            {
                comments.length
                    ?
                    comments.map(c => {
                        return <div key={c.id}><b>Comment</b>: {c.body} </div>
                    })
                    :
                    <h3>❌ Комментарии не подгрузились. Произошла какая-то ошибка. Найди и исправь ее</h3>
            }
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Provider store={store}> <App/></Provider>)

// 📜 Описание:
// ❌ Комментарии не подгрузились. Произошла какая-то ошибка.
// В данном задании вам нужно найти ошибку и починить приложение.
// Если сделаете все верно, то увидите комментарии.
// В качестве ответа указать исправленную строку коду

// 🖥 Пример ответа: const store = createStore(rootReducer, applyMiddleware(thunk))