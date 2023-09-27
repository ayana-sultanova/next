import React from "react";
import {Metadata} from "next";
import {planetsData} from "@/data/data";
import SliderBlock from "@/components/SliderBlock";

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

const Post: React.FC<PostProps> = async ({params: {id}}) => {
    const post = await getData(id)

    return (
        <div className='bg-custom text-white mt-32 px-6'>
            <h2 className='text-4xl'>{post.title}</h2>
            <p>{post.body}</p>
            <div className='grid grid-cols-3 gap-16 mt-10'>
                <SliderBlock data={planetsData} />
            </div>
        </div>
    );
};

export default Post;