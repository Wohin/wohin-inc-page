import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/style.css'

import { CheckCircle } from "react-bootstrap-icons";

function SpecialBullets ({descriptions}) {
    console.log('YO MAMA!')
    console.log(descriptions)
    return (
    <ul class="no-bullets">
        {descriptions.map((description) => {
            return <li><CheckCircle style={{"color" : "#cda45e"}}/> {description}</li>
        })}
    </ul>
)
}

export default SpecialBullets