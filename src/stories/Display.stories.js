import React from 'react';
import DisplayText from './../components/Display';
import { withKnobs, number } from '@storybook/addon-knobs';
export default{
    title:"Text",
    component:DisplayText,
    decorators: [withKnobs],    

}

export const TextDisplayFirst=()=>{
     return(
    <DisplayText value="50"/>
     );
}
export const TextDisplayFirstColor=()=>{
    return(
   <DisplayText colors="red" value={number('value',10)}/>
    );
}
export const TextDisplayFirstSize=()=>{
    return(
   <DisplayText colors="blue" size="small" value="90"/>

   );
}