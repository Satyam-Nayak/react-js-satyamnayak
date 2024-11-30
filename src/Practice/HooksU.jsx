import React,{useState} from "react";
function HooksU(){
    const [count, setCount] = useState(0);
    return(
        <div>
            <p>Counter: {count}</p>
            <button  onClick={()=> setCount(count+1)}>Incremant</button>
        </div>
    )
}
export default HooksU;