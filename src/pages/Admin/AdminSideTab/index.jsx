import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

import mainLogo from '@/assets/images/admin_page_logo.png';

import {
  TabContainer,
  ProfileBox,
  TabMenuList,
  MainLogo,
} from '@/pages/Admin/AdminSideTab/style';

import { adminTabMenuData } from '@/pages/Admin/data';

import useEventHandler from '@/hooks/useEventHandler';
import useSelectorList from '@/hooks/useSelectorList';
import useLoginCheck from '@/hooks/useLoginCheck';

export default function AdminSideTab() {
  const navigate = useNavigate();
  const location = useLocation();

  const { changeValue: currentActiveTabMenu, handleChange: activeTabChange } =
    useEventHandler({
      changeDefaultValue: null,
    });
  const { isLogin, isAdmin, nickname } = useSelectorList();

  const [tabData] = useState(adminTabMenuData);

  useEffect(() => {
    const path = location.pathname.split('/admin')[1];

    if (path === '/report-history') {
      activeTabChange('신고내역');
    } else if (path === '/member-management') {
      activeTabChange('회원관리');
    } else if (path === '/user-approval') {
      activeTabChange('회원 가입승인');
    } else if (path === '/item-management') {
      activeTabChange('게시물&댓글 관리');
    }
  }, []);

  return (
    <TabContainer>
      <ProfileBox>
        <MainLogo to={'/'}>
          <img src={mainLogo} alt='main-logo' />
        </MainLogo>
        <p>
          {(() => {
            if (isLogin && isAdmin) {
              return `${nickname} 입니다.`;
            } else if (isLogin) {
              return '';
            } else if (isAdmin) {
              return '로그인 상태가 아닙니다.';
            }
          })()}
        </p>
      </ProfileBox>
      <ul>
        {tabData?.map((tab) => {
          return (
            <TabMenuList
              key={uuid()}
              $currentActiveTabMenu={currentActiveTabMenu}
              $ownMenu={tab.label}
              onClick={() => {
                activeTabChange(tab.label);
                navigate(tab.path);
              }}
            >
              <img
                src={
                  currentActiveTabMenu === tab.label
                    ? tab.activeIcon
                    : tab.defaultIcon
                }
                alt={
                  currentActiveTabMenu === tab.label
                    ? tab.activeAlt
                    : tab.default
                }
              />
              <p>{tab.label}</p>
            </TabMenuList>
          );
        })}
      </ul>
    </TabContainer>
  );
}
