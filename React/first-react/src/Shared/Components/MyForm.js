import React from 'react'
import { useState } from 'react'

export default function MyForm() {

    const [name, setName] = useState('')

    return (
        <div>
            <input value={name} onChange={e => setName(e.target.value)} />
            <button>Submit</button>
        </div>
    )
}
