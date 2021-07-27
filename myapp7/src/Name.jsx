import React from 'react'

const Name = ({match}) => {
    return (
        <div>
            <h1> this is {match.params.name}</h1>
        </div>
    )
}

export default Name
