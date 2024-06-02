import { FC, useState } from "react";
import classes from './PostList.module.css';
import Post from "../Post";
import NewPost from "../NewPost";
import Modal from "../Modal";
import { PostType } from "../../types";

interface PostListProps {
  showModal: boolean;
  closeModal: () => void;
}

const PostList: FC<PostListProps> = ({ showModal, closeModal }) => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const addPost = (newPost: PostType) => setPosts(prev => [...prev, newPost]);
  
  return (
    <>
      {
        showModal && (
        <Modal oncClose={closeModal}>
          <NewPost onCancel={closeModal} addPost={addPost} />
        </Modal>
      )}
      {
        posts.length ? (
          <ul className={classes.posts}>
            {
              posts.map(({ id, author, body }) =>
                <Post key={id} author={author} body={body} />)
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
