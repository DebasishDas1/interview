// This is a "Component" 
// To use it just "import" it
// Run "npm start" in Terminal or "command prompt" 
// System default browser will open with this Component 
// Click on the "+" icon to increase the value 
// Click on the "-" icon to decrease the value 
// The minimum value is "0"

import { useState } from 'react';

const TaskOne = () => {
    const [val, setVal] = useState(0);

    const add = () => setVal( val + 1 )

    const minus = () => {
        if(val === 0 )return val;
        setVal( val - 1 );
    } 

    return (
        <>
            <div onClick={ add }> + </div>
            <div> {val} </div>
            <div onClick= { minus }> - </div>
        </>
    );
}

export default TaskOne;