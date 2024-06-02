import PostList from "../components/PostList";
import { Outlet } from "react-router-dom";

const Posts = () => {

  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;
