import React, {useState} from 'react';
import '../../assets/sass/main.scss'
import style from './Login.module.scss'
import * as api from '../../api'
import { useAuthContext, useTestDataContext } from '../../Context/auth';

const Login = () => {

    const {auth, setAuth} = useAuthContext()
    const {setTestData, testData} = useTestDataContext()
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const formSubmitSignUp = (e) => {
        e.preventDefault()

        let data = {
            username: username,
            password: password,
            email: email
        }

        setTestData(data)

        setAuth({
            ...auth,
            isAuthenticated: false
        })

        // api.signUpUser(data).then(result => {
        //     setTestData([data, result])
        //     console.log(result)
        // }).catch(error => {
        //     console.log(error)
        // })
    }

    const login = (e) => {
        e.preventDefault()
        console.log('login in')
        console.log(testData)
        console.log(auth)
    }

    return (
        <div className={style.container}>

            <div className={style.box}>
                <p className={style.title}>Login</p>
                <div className={style.inputGroup}>
                    <button type="button" className="button" onClick={login}>Login</button>
                </div>
            </div>

            <div className={style.box}>
                <p className={style.title}>Sign up</p>
                <form onSubmit={formSubmitSignUp} className={style.form}>
                    <div className={style.inputGroup}>
                        <label className={style.inputLabel}>Email</label>
                        <input className={style.inputText}
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className={style.inputGroup}>
                        <label className={style.inputLabel}>Username</label>
                        <input className={style.inputText}
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            type="text"
                            name="username"
                            id="username"
                            placeholder="username"
                            required
                        />
                    </div>
                    <div className={style.inputGroup}>
                        <label className={style.inputLabel}>Password</label>
                        <input className={style.inputText}
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            required
                            autoComplete="false"
                        />
                    </div>
                    <input className="button" type="submit" value="Sign up"/>
                </form>
            </div>
        </div>
    );
};

export default Login;