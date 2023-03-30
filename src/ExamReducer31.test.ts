import {
    playerReducer32,
    playerReducer33,
    reducerExam34,
    reducerExam35,
    reducerExam36,
    StateType,
    Status
} from "./ExamReducer31";

test ('ExamTest36', () => {
    const deleteTrackAC = (trackId: number) => ({type: 'TRACK-DELETED', trackId})

    const state = [
        {id: 12, likesCount: 10},
        {id: 14, likesCount: 2},
        {id: 100, likesCount: 0}
    ]
    const newState = reducerExam36(state, deleteTrackAC(14))
    expect(newState.length).toBe(2)
})

test ('ExamTest35', () => {
    const addTrackAC = (trackId: number) => ({type: 'TRACK-ADDED', trackId})

    const state = [
        {id: 12, likesCount: 10},
        {id: 14, likesCount: 2},
        {id: 100, likesCount: 0}
    ]
    const newState = reducerExam35(state, addTrackAC(300))
    expect(newState[3].likesCount).toBe(0)
})

test ('ExamTest34', () => {
    const likeTrackAC = (trackId: number) => ({type: 'TRACK-LIKED', trackId})
    const state = {
        12: {id: 12, likesCount: 10},
        14: {id: 14, likesCount: 2},
        100: {id: 100, likesCount: 0},
    }
    const newState = reducerExam34(state, likeTrackAC(14))

    expect(newState[14].likesCount).toBe(3)
})

test ('ExamTest33', () => {
    const muteTrackAC = () => ({type: 'TRACK-MUTED'})
    const changeVolumeAC = (volumeLevel: number) => ({type: 'TRACK-VOLUME-CHANGED', volumeLevel})
    const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})
    const changeTrackPlayStatusAC = (status: Status) => ({type: 'TRACK-STATUS-CHANGED', status})

    const state: StateType = {
        status: 'Stopped',
        currentPlayPosition: 1213,
        trackUrl: 'https://blabla.com/track01.mp3',
        volume: 100
    }
    const newState = playerReducer33(state, changeVolumeAC(20))

    expect(newState.volume).toBe(20)
})

test ('ExamTest32', () => {
    const muteTrackAC = () => ({type: 'TRACK-MUTED'})
    const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})
    const changeTrackPlayStatusAC = (status: Status) => ({type: 'TRACK-STATUS-CHANGED', status})

    const state: StateType = {
        status: 'Stopped',
        currentPlayPosition: 1213,
        trackUrl: 'https://blabla.com/track01.mp3',
        volume: 100
    }

    const newState = playerReducer32(state, changeTrackPlayStatusAC('Paused'))

    expect(newState.status).toBe('Paused')
})