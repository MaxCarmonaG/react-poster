import { MdPostAdd, MdMessage } from 'react-icons/md';

import classes from './MainHeader.module.css';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface MainHeaderProps {
  onCreatePost: () => void;
}

const MainHeader: FC<MainHeaderProps> = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link className={classes.link} to="/create-post">
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
};

export default MainHeader;
