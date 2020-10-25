import UserActionTypes from './user.types'

export const CurrentUserSet = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});