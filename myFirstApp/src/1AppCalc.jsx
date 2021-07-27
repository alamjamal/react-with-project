import React from 'react';
import {sum, mul} from "./Calc";

function App(){
    return(
    <>
        <h1>sum = {sum(2,3)}</h1>
        <h1>mul = {mul(2,3)}</h1>
        </>);

}
export default App;