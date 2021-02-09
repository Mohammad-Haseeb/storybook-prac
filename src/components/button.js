import React from 'react';


export default function ButtonDisplay(props){
    return(
        <>
        <button style={{backgroundColor:props.color , borderRadius:props.radius}} onClick={props.onClick}>Increment</button>
        </>
    );

}