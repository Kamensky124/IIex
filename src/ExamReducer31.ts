export const reducerExam36 = (state: any, action: any) => {
    switch (action.type) {
        case 'TRACK-DELETED':
            return state.filter((track: any) => track.id !== action.trackId)
        default:
            return state
    }
}

export const reducerExam35 = (state: any, action: any) => {
    switch (action.type) {
        case 'TRACK-ADDED':
            return [...state, {id: action.trackId, likesCount:0}]
        default:
            return state
    }
}

export const reducerExam34 = (state: any, action: any) => {
    switch (action.type) {
        case 'TRACK-LIKED':
            return {
                ...state,
                [action.trackId]: {
                    ...state[action.trackId],
                    likesCount: state[action.trackId].likesCount + 1
                }
            }
        default:
            return state
    }
}

export type Status = 'Stopped' | 'Playing' | 'Paused'
export type StateType = {
    volume: number // in percents
    trackUrl: string // 'https://blabla.com/track01.mp3',
    currentPlayPosition: number // milliseconds,
    status: Status
}
export const playerReducer33 = (state: StateType, action: any) => {
    switch (action.type) {
        case 'TRACK-VOLUME-CHANGED':
            return {
                ...state,
                volume: action.volumeLevel
            }
        default:
            return state
    }
}

export const playerReducer32 = (state: StateType, action: any) => {
    switch (action.type) {
        case 'TRACK-STATUS-CHANGED':
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}