import { FC } from "react";
import { useLoaderData } from "react-router-dom";
import classes from './PostList.module.css';
import Post from "../Post";
import { PostType } from "../../types";

const PostList: FC = () => {
  const posts = useLoaderData() as PostType[];

  return (
    <>
      {
        posts.length ? (
          <ul className={classes.posts}>
            {
              posts.map(({ id, author, body }) =>
                <Post key={id} id={id} author={author} body={body} />)
            }
          </ul>
        ) : (
          <div>
            <h2>There are no posts yet.</h2>
            <p>Start adding some!</p>
          </div>
        )
      }
    </>
  );
};

export default PostList;
