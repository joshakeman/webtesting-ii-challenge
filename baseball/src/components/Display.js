import React from 'react'

function Display(props) {
    return (
    <>
        <h2>Strikes: {props.count.strikes}</h2>
        <h2>Balls: {props.count.balls}</h2>
    </>
    )
}

export default Display