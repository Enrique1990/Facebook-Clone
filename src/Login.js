import React from 'react';
import "./Login.css";
import Button from '@material-ui/core/Button';
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";


function Login() {
    const [state,  dispatch] = useStateValue();


    const signIn = () => {
        auth.signInWithPopup(provider).then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })  
        })
        .catch(error => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login_logo">
                <img className="logo_login" src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png" alt=""/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg" alt=""/>
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
            
        </div>
    )
}

export default Login
