import { FC } from "react";
import classes from './PostList.module.css';
import Post from "../Post";
import NewPost from "../NewPost";
import Modal from "../Modal";
import usePostList from "./usePostList";

interface PostListProps {
  showModal: boolean;
  closeModal: () => void;
}

const PostList: FC<PostListProps> = ({ showModal, closeModal }) => {
  const { posts, addPost, isLoading } = usePostList();
  
  return (
    <>
      {
        showModal && (
        <Modal oncClose={closeModal}>
          <NewPost onCancel={closeModal} addPost={addPost} />
        </Modal>
      )}
      {
        isLoading ? (
          <p>Loading posts...</p>
        ) : (
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
        )
        
      }
    </>
  );
};

export default PostList;
