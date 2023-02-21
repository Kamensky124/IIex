import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import React, {useState} from "react";


function PasswordChecker() {
    const [password, setPassword] = useState<string>("")
    return (
        <main>
            <p>Your password must have more than 8 charters!</p>
            <input
                placeholder={"Enter your password"}
                value={password}
                onChange={e => setPassword(e.currentTarget.value)}
                type={"password"}
            />
            {password.length < 9 && <p style={{color: "red"}}>The password is too short!</p>}
        </main>
    )
}


// debugger
console.log(PasswordChecker())

const App = () => {
    return <div>hia</div>


}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <App/>
);

reportWebVitals();

