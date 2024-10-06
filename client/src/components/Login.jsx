import { useState } from 'react'
import { useEffect } from 'react'

const Login = ({userLogin}) => {
    const [eMail, setEMail] = useState ('')
    const [password, setPassword] = useState ('')

    const handleLoginSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await fetch("/api/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    eMail,
                    password,
                })
            })
            if (!response.ok) {
                const errorData = await response.json()
                throw new Error (errorData.message)
            }

            const userData = await response.json()
            userLogin(userData)
        } catch (error) {
            console.error(error.message)
        }
    }

    return (

        <div id="login-div">

            <h2>Login to your Travel Account</h2>
            <form onSubmit = {handleLoginSubmit}>
                <label>E-Mail: </label>
                <input type = 'text' value = {eMail} onChange = {(event) => setEMail(event.target.value)}></input>

                <label>Password: </label>
                <input type = 'password' value = {password} onChange = {(event) => setPassword(event.target.value)}></input>

                <button type = 'submit'>Login</button>
            </form>
            <img id= "amalficoastimage" src = "https://www.classicjourneys.com/wp-content/uploads/2021/07/550000001kkJ2AAI.jpg" alt = "amalfi-coast-image"></img>
            
        </div>
    )
}

export default Login