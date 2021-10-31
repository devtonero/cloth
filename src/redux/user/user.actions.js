import UserActionTypes from "./user.types";

export const SetCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});

export const googleSigninStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const googleSigninSuccess = (user) => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload: user
});

export const googleSigninFailure = (error) => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
    payload: error
});

export const emailSigninStart = (emailAndPassword) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

export const emailSigninSuccess = (user) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
    payload: user
});

export const emailSigninFailure = (error) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
    payload: error
});
