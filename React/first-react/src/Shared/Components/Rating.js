import React from 'react'

export default function Rating({ type }) {
    return (
        <>
            {
                type == '1' ? <span>&#9733;</span> : <></>
            }
            {
                type == '2' ? <span>&#973;&#9733;</span> : <></>
            }
            {
                type == '3' ? <span>&#9733;&#9733;&#9733;</span> : <></>
            }
            {
                type == '4' ? <span>&#9733;&#9733;&#9733;&#9733;</span> : <></>
            }
            {
                type > 4 ? <span>Invalid</span> : <></>
            }
        </>
    )
}
