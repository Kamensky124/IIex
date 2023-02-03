import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {useState} from "react";

function ColorButton() {
    const [isColored, setIsColored] = useState<boolean>(false)
    return (
        <button
            style={{ backgroundColor: `${ isColored === true ? "red": ""}`}}
            onClick={()=>setIsColored(true)}
        >
            Меняю цвет по клику
        </button>
    )
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

    <ColorButton/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
