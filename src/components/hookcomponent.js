import { useState } from "react";

const HookComponent=()=>{

    const[click, setClicks]=useState(0);
  const myOnclickFunction=()=>{
    setClicks(click+1);
  };

    return(
    <div>
        <div>{click}</div>
        <button onClick={myOnclickFunction}>click</button>
    </div>
        
        
    );
};
export default HookComponent;