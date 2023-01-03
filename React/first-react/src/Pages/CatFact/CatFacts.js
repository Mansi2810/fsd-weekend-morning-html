import React, { useState } from 'react'

export default function CatFacts() {
    const [fact, setFact] = useState('Loading...')


    function loadAFact() {

        fetch('https://catfact.ninja/fact')
            .then(js => js.json())
            .then(response => {
                setFact(response.fact)
            })
    }

    return (
        <div>

            <button onClick={loadAFact}>Get new</button>
            <h1>Here is a fact about cats</h1>
            <p>{fact}</p>


        </div>
    )
}
