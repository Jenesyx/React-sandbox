import { useEffect, useState } from "react"

const Homepage = () => {

    const [myState , setMyState] = useState('s')

    const [inputValue, setInputValue] = useState('')

    function clickHandle(id){
        console.log(`clicked ${id}`)
        setMyState('this is new myState')
    }

    useEffect(()=>{
        console.log('changed')
    },[myState])

    return(
        <>
            <p>{myState}</p>
            <button onClick={() => clickHandle(5)}>Click me!</button>
            <input value={inputValue} onChange={(event)=> setInputValue(event.target.value)}/>
        </>
    )
}

export default Homepage 