import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/layouts/Layout';
import Home from '@/pages/Home';
import SignIn from '@/pages/SignIn';
import Community from '@/pages/Community';
import CreatePost from '@/pages/CreatePost';
import Identity from '@/pages/SignUp/Identity';
import Info from '@/pages/SignUp/Info';

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
        path: '/sign-in',
        element: <SignIn />
      },    
      {
        path: '/sign-up/identity',
        element: <Identity/>
      },      
      {
        path: '/sign-up/info',
        element: <Info/>
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
