import React from 'react'

function Display(props) {
    return (
    <>
        <h2>Strikes: <div data-testid="strikes">{props.count.strikes}</div></h2>
        <h2>Balls: <div data-testid="balls">{props.count.balls}</div></h2>
    </>
    )
}

export default Display