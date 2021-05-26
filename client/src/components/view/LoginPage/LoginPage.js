import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';

const LoginPage = (props) => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onSubmintHandler = (event) => {
        event.preventDefault();

        let body = {
            email,
            password
        }

        dispatch(loginUser(body))
            .then(response => {
                if (response.payload.loginSuccess) {
                    props.history.push('/')
                } else {
                    alert('error');
                }
            });
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'}}>
            <form style={{ display: 'flex', flexDirection: 'column'}}
                onSubmit={onSubmintHandler}
            >
                <label>Email</label>
                <input type="email" value={email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="password" value={password} onChange={onPasswordHandler} />
                <br />
                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    );
};

export default withRouter(LoginPage);