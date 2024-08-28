import {
  TabContainer,
  ProfileBox,
  TabMenuList,
} from '@/pages/Admin/AdminSideTab/style';

export default function AdminSideTab({
  activeMenu,
  handleTabMenuClick,
  tabMenuList,
}) {
  return (
    <TabContainer>
      <ProfileBox>
        <div></div>
        <p>관리자 입니다</p>
      </ProfileBox>
      <ul>
        {tabMenuList?.map((menu, idx) => {
          return (
            <TabMenuList
              key={menu + idx}
              $activeMenu={activeMenu}
              $ownContent={menu.content}
              onClick={() => {
                handleTabMenuClick(menu.content);
              }}
            >
              <img
                src={
                  activeMenu === menu.content
                    ? menu.activeIcon
                    : menu.defaultIcon
                }
                alt={
                  activeMenu === menu.content ? menu.activeAlt : menu.default
                }
              />
              <p>{menu.content}</p>
            </TabMenuList>
          );
        })}
      </ul>
    </TabContainer>
  );
}
