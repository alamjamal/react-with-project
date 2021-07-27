import React , {useState} from 'react'
import { useEffect } from 'react/cjs/react.development'
import axios from 'axios'

const App = () => {
    const [num, setNum] = useState("")
    const [name, setName] = useState()
    const [moves, setMoves] = useState()  
    useEffect(()=>{
        async function getData(){
            const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            console.log(res.data.name);
           setName(res.data.name);
           setMoves(res.data.moves.length);
        }
        getData();
    });
    return (
        <div>
          
          <center>
                <select onChange={(event)=>{
                    setNum(event.target.value)
                }} >
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="25">25</option>
                <option value="80">80</option>
        </select></center>
          <h1> use select {num}</h1>
          <h1>name {name}</h1>
          <h1> moves {moves}</h1>
        </div>
    )
}

export default App
