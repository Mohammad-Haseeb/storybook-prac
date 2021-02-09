import react from "react";
import ButtonDisplay from './../components/button';

export default{
    title:"Button",
    component:ButtonDisplay
}
export  function DisplayBtn(){
      return(
          <ButtonDisplay/>
      )
}

export  function DisplayBtnWithAttributes(){
    return(
        <ButtonDisplay color="red" radius="10px" />
    )
}


export  function DisplayBtnWithPassingAttributesAndFunctions(){
    return(
        <ButtonDisplay color="red" radius="10px" onClick={()=>{
            alert("hello");
        }}/>
    )
}
