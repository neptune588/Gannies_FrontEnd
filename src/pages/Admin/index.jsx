import { useState } from 'react';

import AdminSideTab from '@/pages/Admin/AdminSideTab';

import { ContentsContainer } from '@/pages/Admin/style';

import { adminTabMenuData } from '@/pages/Admin/data';

export default function Admin() {
  const [tabData] = useState(adminTabMenuData);

  const [activeMenu, setActiveMenu] = useState(adminTabMenuData[0].content);
  const handleTabMenuClick = (content) => {
    setActiveMenu(content);
  };

  return (
    <ContentsContainer>
      <AdminSideTab
        activeMenu={activeMenu}
        handleTabMenuClick={handleTabMenuClick}
        tabMenuList={tabData}
      />
    </ContentsContainer>
  );
}
