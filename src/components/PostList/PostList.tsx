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
  const [posts, setPosts] = useState<PostType[]>(MOCK_DATA);

  const addPost = (newPost: PostType) => setPosts(prev => [...prev, newPost]);
  
  return (
    <>
      {
        showModal && (
        <Modal oncClose={closeModal}>
          <NewPost onCancel={closeModal} addPost={addPost} />
        </Modal>
      )}
      <ul className={classes.posts}>
        {
          posts.map(({ id, author, body }) =>
            <Post key={id} author={author} body={body} />)
        }
      </ul>
    </>
  );
};

export default PostList;

const MOCK_DATA = [
  {
    id: '11223344',
    author: 'Max',
    body: 'React.js is awesome!'
  }
];
