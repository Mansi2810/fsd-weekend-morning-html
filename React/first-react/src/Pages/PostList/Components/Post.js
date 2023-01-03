import React from 'react'
import Rating from '../../../Shared/Components/Rating'

export default function Post({ item }) {
    return (
        <>
            <div className="post-item-container">
                <h2>{item.heading}</h2>
                <p><span>By </span> <span>{item.author}</span></p>
                <p>{item.content}</p>
                {/* <Rating type={4}></Rating> */}
            </div>
        </>
    )
}
