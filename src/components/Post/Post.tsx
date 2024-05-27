import { FC } from "react";
import classes from './Post.module.css';

interface PostProps {
  author: string;
  body: string;
}

const Post: FC<PostProps> = ({ author, body }) => {

  return (
    <li className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </li>
  );
};

export default Post;
