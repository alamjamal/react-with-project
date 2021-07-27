import React , {useContext} from 'react';
import CallC from './CallC';
import {FirstName, LastName} from './App';

const CallB = () => {
    const fname = useContext(FirstName)
    const lname = useContext(LastName)
    return (
        <>
            <h1>my name is {fname} {lname}</h1>  
        </>
    )
}

export default CallB

// return me <CallC /> likhne pe normal consumer wala code excute hoga

//useContext Hooks  ka example hai ye page