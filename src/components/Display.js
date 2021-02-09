import React from 'react';
import './Style.css';

export default function DisplayText(props){
     return(
         <>
         <h1 className={["container" ,props.colors ].join(" ")} >Hello</h1>
         </>
     )
}