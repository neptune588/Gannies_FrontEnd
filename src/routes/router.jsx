import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/layouts/Layout';
import Home from '@/pages/Home';
import SignIn from '@/pages/SignIn';
import Community from '@/pages/Community';
import CreateCommunityPost from '@/pages/CreateCommunityPost';
import SignUp from '@/pages/SignUp';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
      {
        path: '/community',
        element: <Community />,
      },
      {
        path: '/community/create-community-post',
        element: <CreateCommunityPost />,
      },
    ],
  },
]);
