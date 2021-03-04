import route from '../route/instagive'

// Action Types
const USER_LEDGER_FETCH = 'userLedgerFetch'
const USER_LEDGER_ADDED = 'userLedgerAdded'
const USER_LEDGER_REMOVED = 'userLedgerRemoved'
const USER_LEDGER_UPDATED = 'userLedgerUpdated'

const USER_POST_FETCH = 'userPostFetch'
const USER_POST_ADDED = 'userPostAdded'
const USER_POST_REMOVED = 'userPostRemoved'
const USER_POST_UPDATED = 'userPostUpdated'


// Action

// Ledger
const userLedgerFetch = (token) => async dispatch => {
    const { data } = await route.post('/ledger/getall', {token})

    dispatch({
        type: USER_LEDGER_FETCH,
        payload: data 
    })
}

const userLedgerAdded = (ledgerForm, token) => async dispatch => {
    await route.post(`/ledger/${ledgerForm.postId}`, {...ledgerForm, token})
    
    dispatch({
        type: USER_LEDGER_ADDED,
        payload: ledgerForm
    })
}

// Post
const userPostFetch = (token) => async dispatch => {
    const { data } = await route.post('/post/userpost', { token:token })

    dispatch({
        type: USER_POST_FETCH,
        payload: data 
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
        case USER_LEDGER_FETCH:
            return {
                ...userData,
                ledger: action.payload
            }
    
        case USER_LEDGER_ADDED:
            return {...state, ledger: [...state.ledger, action.payload]}
    
        case USER_LEDGER_REMOVED:
            return state
    
        case USER_LEDGER_UPDATED:
            return state
    
        case USER_POST_FETCH:
            return {
                ...userData,
                post: action.payload
            }
    
        case USER_POST_ADDED:
            return state
    
        case USER_POST_REMOVED:
            return state
    
        case USER_POST_UPDATED:
            return state
    
        default:
            return state;
    }
}

export {
    userLedgerFetch,
    userLedgerAdded,
    userPostFetch
}