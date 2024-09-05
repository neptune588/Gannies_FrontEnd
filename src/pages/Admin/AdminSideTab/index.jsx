import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

import {
  TabContainer,
  ProfileBox,
  TabMenuList,
} from '@/pages/Admin/AdminSideTab/style';

import { adminTabMenuData } from '@/pages/Admin/data';

import { useEventHandler } from '@/hooks/useEventHandler';

export default function AdminSideTab() {
  const navigate = useNavigate();

  const { clickChangeState: currentActiveTabMenu, handleClickChange } =
    useEventHandler({
      clickChangeDefaultValue: adminTabMenuData[0].label,
    });

  const [tabData] = useState(adminTabMenuData);

  return (
    <TabContainer>
      <ProfileBox>
        <div></div>
        <p>관리자 입니다</p>
      </ProfileBox>
      <ul>
        {tabData?.map((tab) => {
          return (
            <TabMenuList
              key={uuid()}
              $currentActiveTabMenu={currentActiveTabMenu}
              $ownMenu={tab.label}
              onClick={() => {
                handleClickChange(tab.label);
                navigate(`${tab.path}`);
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
