import { PostType } from "../types";

const baseURL = 'http://localhost:8080/';

export const addPostHandler = async (postData: PostType) => {
    const response = await fetch(baseURL + 'posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const resData = await response.json();
    return resData as { message: string; post: PostType};
};

export const getPostsHandler = async () => {
    const response = await fetch(baseURL + 'posts');
    const resData = await response.json();
    return (resData?.posts || []) as PostType[];
};