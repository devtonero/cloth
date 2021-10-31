import { takeLatest, put, all, call} from "redux-saga/effects";
import UserActionTypes from "./user.types";

import { googleSigninSuccess, googleSigninFailure } from "./user.actions";

import { auth, googleprovider, createUserProfileDocument } from "../../firebase/firebase";

function* googleSignin() {
    try{
        const {user} = yield auth.signInWithPopup(googleprovider);
        
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshop = yield userRef.get();
        yield put (googleSigninSuccess(
           {id: userSnapshop.id, ...userSnapshop.data() }) 
        );
    }catch (error){
        yield put(googleSigninFailure(error));
    }
}

export function* onGoggleSignin() {
   
        yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignin)
   
};

export function* userSagas() {
    yield all([call(onGoggleSignin)]);
};