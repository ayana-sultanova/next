import React from "react";
import {Metadata} from "next";

async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    })
    return response.json()
}

interface PostProps {
    params: {
        id: string
    }
}

export async function generateMetadata({params: {id}}: PostProps): Promise<Metadata> {
    const post = await getData(id)

    return {
        title: post.title
    }
}
const Post:React.FC<PostProps> = async ({params: {id}}) => {
    const post = await getData(id)
    return (
        <>
          <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    );
};

export default Post;