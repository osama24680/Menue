import React, { useState,useContext } from 'react'
import { Row, Col } from "react-bootstrap"
import { data } from "./data"
import {AuthContext} from "./Context"


// let newArray = [];
// for (let i = 0; i < data.length; i++) {
//     if (i === 11) {
//         i = 10
//         if (data[i].type === data[i + 1].type) {

//         } else {
//             newArray.push(data[i].type)
//             // setCats([...newArray])

//         }
//     }
//     else if (data[i].type === data[i + 1].type) {

//     } else {
//         newArray.push(data[i].type)
//         // setCats([...newArray])

//     }
// }

// console.log(newArray)

const Categories = () => {
    let ctx=useContext(AuthContext)
    // const [cats, setCats] = useState([]);

    // console.log(data[0].type)

    // data.forEach((item)=>(
    //     console.log(item.type)
    // ))

    return (
        <Row>
            <Col sm="12" className="  d-flex justify-content-center">
                <button onClick={(e)=>ctx.handleCategory(e.target.textContent)} className="my_btn " >All</button>
                <button onClick={(e)=>ctx.handleCategory(e.target.textContent)} className="my_btn " >Dinner</button>
                <button onClick={(e)=>ctx.handleCategory(e.target.textContent)} className="my_btn " >Launch</button>
                <button onClick={(e)=>ctx.handleCategory(e.target.textContent)} className="my_btn " >Breakfast</button>
            </Col>
        </Row>
    )
}

export default Categories