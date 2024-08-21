import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/layouts/Layout';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Community from '@/pages/Community';
import CreatePost from '@/pages/CreatePost';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },      
      {
        path: '/community',
        element: <Community />
      },
      {
        path: '/community/create-post',
        element: <CreatePost />
      },
    ],
  },
]);
