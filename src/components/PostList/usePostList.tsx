import { useEffect, useState } from "react";
import { PostType } from "../../types";
import { addPostHandler, getPostsHandler } from "../../services";


const usePostList = () => {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const addPost = (newPost: PostType) => addPostHandler(newPost).then(data => setPosts(prev => [data.post, ...prev,]));
    
    useEffect(() => {
        setIsLoading(true);
        getPostsHandler().then(data => {
            setPosts(data)
            setIsLoading(false);
        });
    }, []);

    return {
        posts,
        setPosts,
        addPost,
        isLoading
    };
};

export default usePostList;
