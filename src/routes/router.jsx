import { createBrowserRouter } from 'react-router-dom';
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
import PostManagement from '@/pages/Admin/PostManagement';
import SignUp from '@/pages/SignUp/SignUp';
import EmailVerification from '@/pages/EmailVerification';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: '/community',
            element: <Community />,
          },
          {
            path: '/community/create-community-post',
            element: <CreateCommunityPost />,
          },
          {
            path: '/community/detail',
            element: <PostDetail />,
          },
        ],
      },
    ],
  },
  {
    element: <AdminLayout />,
    children: [
      {
        path: '/admin/report-history',
        element: <PrivateRoute element={<ReportHistory />} />, // PrivateRoute 적용
      },
      {
        path: '/admin/member-management',
        element: <PrivateRoute element={<MemberManagement />} />, // PrivateRoute 적용
      },
      {
        path: '/admin/user-approval',
        element: <PrivateRoute element={<UserApproval />} />, // PrivateRoute 적용
      },
      {
        path: '/admin/post-management',
        element: <PrivateRoute element={<PostManagement />} />, // PrivateRoute 적용
      },
    ],
  },
  {
    element: <MypageLayout />,
    children: [
      {
        path: '/mypage/profile/edit',
        element: <PersonalInfo />,
      },
      {
        path: '/mypage/profile/change-password',
        element: <PasswordChange />,
      },
      {
        path: '/mypage/written-posts',
        element: <WrittenPost />,
      },
      {
        path: '/mypage/scrap-posts',
        element: <ScrappedPost />,
      },
      {
        path: '/mypage/written-comment',
        element: <WrittenComment />,
      },
    ],
  },
  {
    element: <HeaderLayout />,
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
          {
            path: 'success',
            element: <SignUpSuccess />,
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
        path: '*',
        element: <Error404 />,
      },
    ],
  },
]);
