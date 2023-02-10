import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import React, {useState} from "react";
import {text} from "stream/consumers";

type samuraiType = {
    id: string
    name: string
    status: "online" | "offline"
}
type CourseNameType = "HTML" | "JS" | "React" | "Redux" | "HomeWorks"
type CourseType = {
    name: CourseNameType
    mentor: string
    isDone: boolean
}


const samuraiID_1 = "64jf-87kg"
const samuraiID_2 = "90lg-34ks"
const samuraiID_3 = "12jm-05fd"

export const samurai: Array<samuraiType> = [
    {id: samuraiID_1, name: "Bob", status: "online"},
    {id: samuraiID_2, name: "Alex", status: "offline"},
    {id: samuraiID_3, name: "Ann", status: "offline"},
]

type TechnologiesType = {
    [userID: string]: Array<CourseType>
}

export const technologies: TechnologiesType = {
    [samuraiID_1]: [
        {name: "HTML", mentor: "Svetlana", isDone: true},
        {name: "JS", mentor: "Viktor", isDone: true},
        {name: "React", mentor: "Dmitrij", isDone: false},
        {name: "Redux", mentor: "Valera", isDone: false},
        {name: "HomeWorks", mentor: "Ignat", isDone: true},
    ],
    [samuraiID_2]: [
        {name: "HTML", mentor: "Svetlana", isDone: true},
        {name: "JS", mentor: "Viktor", isDone: true},
        {name: "React", mentor: "Dmitrij", isDone: true},
        {name: "Redux", mentor: "Valera", isDone: false},
        {name: "HomeWorks", mentor: "Ignat", isDone: true},
    ],
    [samuraiID_3]: [
        {name: "HTML", mentor: "Svetlana", isDone: true},
        {name: "JS", mentor: "Viktor", isDone: true},
        {name: "React", mentor: "Dmitrij", isDone: false},
        {name: "Redux", mentor: "Valera", isDone: false},
        {name: "HomeWorks", mentor: "Ignat", isDone: false},
    ],
}

//  const updateCourseStatus = (samuraiID: string, name: CourseNameType, isDone: boolean) => {
//     return {...technologies,
//         [samuraiID]: technologies[].map(c => c.name === name ? {...c, isDone} : c)
//     }
// }



const App = () => {

    // updateCourseStatus (samuraiID_1, "HTML", false)
    // console.log(technologies[samuraiID_1][0])
    return <div>hi</div>
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <App/>
);

reportWebVitals();

