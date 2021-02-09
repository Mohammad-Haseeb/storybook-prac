import React,{useState} from 'react';
import './Style.css';
import ButtonDisplay from './button';


export default function DisplayText(props){
    let [state, setstate] = useState(0);
     return(
         <>
         <h1 className={["container" ,props.colors ].join(" ")} >Hello 0</h1>
         <h1>Value : {state}</h1>
         <br/>
         <ButtonDisplay color="yellow" radius="10px" onClick={()=>{
            setstate(++state);
        }}/>
        
         </>
     )
}