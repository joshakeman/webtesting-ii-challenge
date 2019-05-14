import React from 'react'

function Dashboard(props) {

        return(
        <>
            <h2>Dashboard</h2>

            <button onClick={() => props.umpCall('strike')}>Strike</button>
            <button onClick={() => props.umpCall('ball')}>Ball</button>
            <button onClick={() => props.umpCall('foul')}>Foul</button>
            <button onClick={() => props.umpCall('hit')}>Hit</button>
        </>
        )
}

export default Dashboard