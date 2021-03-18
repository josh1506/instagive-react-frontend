import route from '../route/instagive'
import axios from 'axios'

// Action Types
const USER_DATA_FETCH = 'userDataFetch'
const USER_LEDGER_ADDED = 'userLedgerAdded'
const USER_LEDGER_REMOVED = 'userLedgerRemoved'
const USER_LEDGER_UPDATED = 'userLedgerUpdated'

const USER_LEDGER_ACCEPTED = 'userLedgerAccepted'
const USER_LEDGER_REJECTED = 'userLedgerRejected'

const USER_POST_ADDED = 'userPostAdded'
const USER_POST_REMOVED = 'userPostRemoved'
const USER_POST_UPDATED = 'userPostUpdated'


// Action
// Ledger
const userDataFetch = (token) => async dispatch => {
    const { data: ledger } = await route.post('/ledger/getall', {token})
    const { data: post } = await route.post('/post/userpost', { token })

    dispatch({
        type: USER_DATA_FETCH,
        payload: {ledger, post} 
    })
}


const userLedgerAccepted = (postID) => async dispatch => {
    console.log(postID)
    dispatch({
        type: USER_LEDGER_ACCEPTED,
        payload: {_id: postID}
    })
}
const userLedgerRejected = (postID) => async dispatch => {
    console.log(postID)
    dispatch({
        type: USER_LEDGER_REJECTED,
        payload: {_id: postID}
    })
}

const userLedgerAdded = (ledgerForm, token) => async dispatch => {
    await axios.post(`http://localhost:5000/ledger/${ledgerForm.postId}`, { ...ledgerForm, token })
    let newForm = {...ledgerForm}
    if (!ledgerForm.donorName) newForm = {...newForm, donorName: 'Anonymous'}
    if (!ledgerForm.email) newForm = {...newForm, email: 'None'}

    dispatch({
        type: USER_LEDGER_ADDED,
        payload: newForm
    })
}


// Post
const userPostAdded = (formdata) => async dispatch => {
    // await route.post('/post/createpost', formdata)
    console.log(...formdata);
    dispatch({
        type: USER_POST_ADDED,
        payload: formdata
    })
}
const userPostRemoved = () => async dispatch => {
    // await route.post()

    dispatch({
        type: USER_POST_REMOVED,
        payload: {

        }
    })
}
const userPostUpdated = (postForm, postID, userToken) => async dispatch => {
    await route.put(`/post/edit/${postID}`, { ...postForm, token: userToken })
    dispatch({
        type: USER_POST_UPDATED,
        payload: {
            _id: postID,
            ...postForm
        }
    })
}


// Data
const userData = {
    ledger: [],
    post: []
}


// Reducer
export default (state=userData, action) => {
    switch (action.type) {
        case USER_DATA_FETCH:
            return action.payload
    
        case USER_LEDGER_ADDED:
            return {...state, ledger: [...state.ledger, action.payload]}
    
        case USER_LEDGER_REMOVED:
            return {
                ...state,
                ledger: state.ledger.filter(ledger => ledger._id !== action.payload._id)
            }
    
        case USER_LEDGER_ACCEPTED:
            return {
                ...state,
                ledger: state.ledger.map(ledger => ledger._id === action.payload._id ? {...ledger, status: 'Approved'} : ledger)
            }
    
        case USER_LEDGER_REJECTED:
            return {
                ...state,
                ledger: state.ledger.map(ledger => ledger._id === action.payload._id ? {...ledger, status: 'Rejected'} : ledger)
            }
    
    
        case USER_LEDGER_UPDATED:
            return state
    
        case USER_POST_ADDED:
            return {...state, post: [...state.post, action.payload]}
    
        case USER_POST_REMOVED:
            return {
                ...state,
                post: state.post.filter(post => post._id !== action.payload._id)
            }
    
        case USER_POST_UPDATED:
            return {
                ...state,
                post: state.post.map(post => post._id === action.payload._id ? {...post, ...action.payload} : post)
            }
    
        default:
            return state;
    }
}

export {
    userDataFetch,
    userLedgerAdded,

    userPostUpdated,
    userPostAdded
}