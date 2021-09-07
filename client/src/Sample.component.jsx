import React from 'react'

const Sample = () => {
    return (
        <div data-testid="happy">
            <h1>
                Sample
            </h1>
            <button onClick={() => console.log("Fired")}>
                Alpha
            </button>
        </div>
    )
}

export default Sample
