import React from 'react';
import DisplayText from './../components/Display';

export default{
    title:"Text",
    component:DisplayText
}

export const TextDisplayFirst=()=>{
     return(
    <DisplayText/>
     );
}
export const TextDisplayFirstColro=()=>{
    return(
   <DisplayText colors="red"/>
    );
}