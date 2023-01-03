import React from 'react'
import { useState } from 'react'
import Post from './Post'
export default function PostList() {

    const [posts, setPosts] = useState([
        {
            heading: 'This was funny',
            author: 'Abhishekh',
            content: 'So, I saw this video on Youtube, ......'
        },
        {
            heading: 'Java,eh?',
            author: 'Anshu',
            content: 'Doh!'
        },
        {
            heading: 'React is so awesome',
            author: 'Sagar',
            content: 'Indeed it is!'
        }
    ])

    return (
        <div>
            {
                posts.map(item => <><Post item={item} /></>)
            }
        </div>
    )
}
