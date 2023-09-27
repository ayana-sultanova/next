'use client'
import ReactPaginate from "react-paginate";
import {useState} from "react";
import {Post} from "@/types/types";

interface IProps {
    posts: Post[]
    setCurrentPosts: (currentItems: Post[]) => void
}

const Pagination = ({posts, setCurrentPosts}: IProps) => {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + 6;
    const currentItems = posts.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(posts.length / 6);

    const handlePageClick = (event: { selected: number }) => {
        const newOffset = (event.selected * 6) % posts.length;
        setItemOffset(newOffset);
        setCurrentPosts(currentItems)
    };
    return (
            <ReactPaginate
                className='text-gray-500 flex gap-2 m-10'
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
    );
};

export default Pagination;