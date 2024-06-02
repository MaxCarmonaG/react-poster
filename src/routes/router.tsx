import { createBrowserRouter } from 'react-router-dom';
import Posts from './Posts';
import RootLayout from './RootLayout';
import NewPost from './NewPost';
import PostDetails from './PostDetail';
import { addPostHandler, getPostHandler, getPostsHandler } from '../services';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: getPostsHandler,
        children: [
          {
            path: 'create-post',
            element: <NewPost />,
            action: addPostHandler,
          },
          {
            path: ':id',
            element: <PostDetails />,
            loader: getPostHandler
          }
        ]
      },
    ]
  }
]);

export default router;
