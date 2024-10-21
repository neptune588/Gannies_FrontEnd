import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AdminLayout, HeaderLayout, MainLayout, MypageLayout } from '@/layouts';
import Home from '@/pages/Home';
import SignIn from '@/pages/SignIn';
import Community from '@/pages/Community';
import CreateCommunityPost from '@/pages/CreateCommunityPost';
import PostDetail from '@/pages/PostDetail';
import PersonalInfo from '@/pages/MyPage/PersonalInfo';
import PasswordChange from '@/pages/MyPage/PasswordChange';
import WrittenPost from '@/pages/MyPage/WrittenPost';
import WrittenComment from '@/pages/MyPage/WrittenComment';
import ScrappedPost from '@/pages/MyPage/ScrappedPost';
import Identity from '@/pages/SignUp/Identity';
import Info from '@/pages/SignUp/Info';
import Department from '@/pages/SignUp/Department';
import Error404 from '@/pages/Error/Error404';
import SignUpSuccess from '@/pages/SignUp/Success';
import ID from '@/pages/Find/ID';
import FindIDSuccess from '@/pages/Find/ID/Success';
import Password from '@/pages/Find/Password';
import FindPasswordSuccess from '@/pages/Find/Password/Success';
import ReportHistory from '@/pages/Admin/ReportHistory';
import MemberManagement from '@/pages/Admin/MemberManagement';
import UserApproval from '@/pages/Admin/UserApproval';
import PostsAndCommentsManageMent from '@/pages/Admin/PostsAndCommentsManageMent';
import SignUp from '@/pages/SignUp/SignUp';
import EmailVerification from '@/pages/EmailVerification';
import PostSearch from '@/pages/PostSearch';
import PrivateRoute from '@/routes/PrivateRoute';
import SignOutRoute from '@/routes/SignOutRoute';
import MyPage from '@/pages/MyPage';
import AdminSignIn from '@/pages/Admin/AdminSignIn';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/community/:boardType',
        element: <Community />,
      },
      {
        path: '/post/search/:keyword',
        element: <PostSearch />,
      },
      {
        path: '/community',
        element: (
          <PrivateRoute
            minStatus='approved_member'
            blockSuspended={true}
            blockMember={true}
          />
        ),
        children: [
          {
            path: ':boardType/create-community-post',
            element: <CreateCommunityPost />,
          },
        ],
      },
      {
        path: '/community',
        element: <PrivateRoute minStatus='approved_member' />,
        children: [
          {
            path: ':boardType/post/:postId',
            element: <PostDetail />,
          },
        ],
      },
    ],
  },
  {
    path: '/admin/sign-in',
    element: <AdminSignIn />,
  },
  {
    element: <AdminLayout />,
    children: [
      {
        path: '/admin/report-history',
        element: <ReportHistory />,
      },
      {
        path: '/admin/member-management',
        element: <MemberManagement />,
      },
      {
        path: '/admin/user-approval',
        element: <UserApproval />,
      },
      {
        path: '/admin/item-management',
        element: <PostsAndCommentsManageMent />,
      },
    ],
  },
  {
    element: <PrivateRoute minStatus='email_verified' />,
    children: [
      {
        element: <MypageLayout />,
        children: [
          {
            path: '/mypage',
            element: <MyPage />,
            children: [
              {
                path: 'profile/edit',
                element: <PersonalInfo />,
              },
              {
                path: 'profile/change-password',
                element: <PasswordChange />,
              },
              {
                path: 'written-posts',
                element: <WrittenPost />,
              },
              {
                path: 'scrap-posts',
                element: <ScrappedPost />,
              },
              {
                path: 'written-comment',
                element: <WrittenComment />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    element: <HeaderLayout />,
    children: [
      {
        element: <SignOutRoute />,
        children: [
          {
            path: '/sign-in',
            element: <SignIn />,
          },
          {
            path: '/sign-up',
            element: <SignUp />,
            children: [
              {
                path: 'identity',
                element: <Identity />,
              },
              {
                path: 'info',
                element: <Info />,
              },
              {
                path: 'department',
                element: <Department />,
              },
            ],
          },
          {
            path: '/find/id',
            element: <ID />,
          },
          {
            path: '/find/id/success',
            element: <FindIDSuccess />,
          },
          {
            path: '/find/password',
            element: <Password />,
          },
          {
            path: '/find/password/success',
            element: <FindPasswordSuccess />,
          },
          {
            path: '/sign-up/email',
            element: <EmailVerification />,
          },
          {
            path: '/404',
            element: <Error404 />,
          },
        ],
      },
      {
        path: '/sign-up/success',
        element: <SignUpSuccess />,
      },
      {
        path: '*',
        element: <Navigate to='/404' replace />,
      },
    ],
  },
]);
