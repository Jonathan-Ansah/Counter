import React,{useState} from 'react';

const FunctionCounter = () => {
    const[count, handle] = useState({number:6})
    return (
        <div>
            <hr/>
            <h1>Function Counter: {count.number}</h1>
            <button className='ibtn' onClick={()=>handle({number:count.number+3})}>Increase</button>
            <button className='dbtn' onClick={()=>handle({number:count.number-4})}>Decrease</button>
        </div>
    );
}

export default FunctionCounter;
