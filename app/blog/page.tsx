'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import Pagination from "@/components/pagination/Pagination";
import {Post} from "@/types/types"; // Import useEffect

async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: {
            revalidate: 60,
        },
    });
    if (!response.ok) throw new Error("Unable to fetch posts!");
    return response.json();
}

const Blog = () => {
    const [posts, setPosts] = useState<Post[] | []>([]);
    const [currentPosts, setCurrentPosts] = useState<Post[] | []>([])

    useEffect(() => {
        (async () => {
            try {
                const data = await getData();
                setPosts(data);
                const initialCurrentPosts = data.slice(0, 6);
                setCurrentPosts(initialCurrentPosts);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    return (
        <div className="bg-custom">
            <ul className="grid grid-cols-3 px-32 gap-3 text-white">
                {currentPosts.map((post: Post) => (
                    <Link
                        href={`/blog/${post.id}`}
                        className="w-100 h-100 mt-20 border border-gray-500 rounded border-solid"
                        key={post.id}
                    >
                        <img className="w-100 h-100 rounded" src="../assets/night.jpg" alt='' />
                        <p className="text-center">{post.title}</p>
                    </Link>
                ))}
            </ul>
           <Pagination posts={posts} setCurrentPosts={setCurrentPosts} />
        </div>
    );
};

export default Blog;