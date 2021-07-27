import React from 'react';
import {FirstName, LastName} from './App';

const CallC = () => {
    return (
   <>
        <FirstName.Consumer>
        {(fname)=>{
            return (
                <LastName.Consumer>
                    {(lname)=>{
                        return <h1> my name is {lname} {fname}</h1>
                    }}
                </LastName.Consumer>
            )
        }}
        </FirstName.Consumer>
        </>
    );
}

export default CallC;
