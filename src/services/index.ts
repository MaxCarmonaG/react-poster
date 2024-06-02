import { PostType } from "../types";
import { Params, redirect } from 'react-router-dom';

const baseURL = 'http://localhost:8080/';

export const addPostHandler = async ({ request }: { request: Request }) => {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    await fetch(baseURL + 'posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    // const resData = await response.json();
    // return resData as { message: string; post: PostType};
    return redirect('/');
};

export const getPostsHandler = async () => {
    const response = await fetch(baseURL + 'posts');
    const resData = await response.json();
    return (resData?.posts || []) as PostType[];
};

export const getPostHandler = async ({ params: { id } }: { params: Params }) => {
    const response = await fetch(baseURL + 'posts/' + id);
    const resData = await response.json();
    return resData?.post;
};
