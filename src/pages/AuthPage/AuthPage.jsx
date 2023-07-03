import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import {useState} from "react"

export default function AuthPage({setUser}) {

const [userPref, setUserPref] = useState('signup')
function handlePref(){
    if (userPref === 'signup') {
        setUserPref('login')
    } else {
        setUserPref('signup')
    }
}
    return (

<div className="auth-page-forms">
<br />
<button onClick={handlePref}>{userPref === 'signup' ? 'Already a member? Log in' : 'Need an account? Sign up'}</button>

{userPref === 'signup' ? 
<>
<h1>Create an Account</h1>
<SignUpForm setUser={setUser}/> 
</>
: 
<>
<h1>Log in to account</h1>
<LoginForm setUser={setUser}/>
</>
}

</div>
)
}