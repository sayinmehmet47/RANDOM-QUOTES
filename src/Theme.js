import React, {useContext,useEffect} from 'react';
import {GeneralContext} from "./App"


export default function Theme() {


const {value,value2,value3}=useContext(GeneralContext)
const [text, setText] = value;
const [author,setAuthor] = value2;
const [bgColor,setBgColor]=value3



    return (
        <div>
            <p>{author}</p>
        </div>
    )

}
