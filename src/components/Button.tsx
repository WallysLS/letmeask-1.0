import { useState } from "react";

export function Button(){
    const [multiplier, setMultiplier] = useState(1);

    function increment(){
        setMultiplier(multiplier * 5)
    }
    return( 
    <button onClick={increment}>This is a multiplier {multiplier}</button>
    )
};