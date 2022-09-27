import React, { useState } from 'react'

const ConditionalRender = () => {
    const [x] = useState(false)
    return (
        <div>
            <h1>If simples</h1>
            {x && <p>x é true</p>}
            {!x && <p>x é falso</p>}
        </div>
    )
}

export default ConditionalRender