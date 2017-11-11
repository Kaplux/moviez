
import { Map } from 'immutable';

export default function login(state = Map(), action) {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return state.set('inProgress', true)
        case 'LOGIN_REQUEST_SUCCESS':
            return state.set('inProgress', false).set('lastLoginFailed', false).set('loggedIn', true)
        case 'LOGIN_REQUEST_FAILURE':
            return state.set('inProgress', false).set('lastLoginFailed', true)
        default:
            return state
    }
}