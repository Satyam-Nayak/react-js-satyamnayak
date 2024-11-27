import React,{useState} from "react";
function HooksU(){
    const [count, setCount] = useState(0);
    return(
        <div>
            <p>Counter: {count}</p>
            <button style={{height:'50%',width:"100%"}} onClick={()=> setCount(count+1)}>Incremant</button>
        </div>
    )
}
export default HooksU;