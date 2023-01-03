import React, { useEffect } from 'react'
import { useState } from 'react'
import Post from './Post'
export default function PostList() {

    const [author, setAuthor] = useState('')
    const [heading, setHeading] = useState('')
    const [content, setContent] = useState('')

    const [posts, setPosts] = useState([])

    function getAllPosts() {

        fetch('http://localhost:3001/get-all-posts')
            .then(s => s.json())
            .then(response => {
                setPosts(response)
            })

    }

    function createPost() {
        fetch(`http://localhost:3001/create-new-post?author=${author}&heading=${heading}&content=${content}`)
            .then(s => s.json())
            .then(response => {

                if (response.result == true) {
                    alert('Post added.')
                }
            })
    }

    return (
        <div>
            <input value={author} onChange={e => setAuthor(e.target.value)} placeholder="author" />
            <input value={heading} onChange={e => setHeading(e.target.value)} placeholder="heading" />
            <input value={content} onChange={e => setContent(e.target.value)} placeholder="content" />
            <button onClick={createPost}>Create Post</button>
            <hr></hr>
            <div>
                <button onClick={getAllPosts}>Get All Posts</button>
            </div>
            {
                posts.map(item => <><Post item={item} /></>)
            }
        </div>
    )
}
