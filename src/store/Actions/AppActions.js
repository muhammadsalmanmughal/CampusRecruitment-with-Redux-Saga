import {
    SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE, SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE
    
    } from "../Constants";

export default class AppActions {
    static Signin (payload){
        console.log('payload in action', payload)
        return{
            type: SIGNIN,
            payload
        }
    }
    static Signin_Success(payload){
        return{
            type: SIGNIN_SUCCESS,
            payload
        }
    }
    static Signin_Failure(){
        return{
            type: SIGNIN_FAILURE
        }
    }
    static SignUp (payload){
        console.log('payload in action', payload)
        return{
            type: SIGNUP,
            payload
        }
    }
    static SignUp_Success(payload){
        return{
            type: SIGNIN_SUCCESS,
            payload
        }
    }
    static SignUp_Failure(){
        return{
            type: SIGNIN_FAILURE
        }
    }
} 