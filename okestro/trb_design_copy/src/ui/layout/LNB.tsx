import React, { useState } from 'react';
const LNB = () => {
  const menuData = [
    {
      id: '0',
      title: '일반',
      children: [
        {
          id: '1',
          title: '워크플로우관리',
        },
        {
          id: '2',
          title: '게시판',
          children: [
            {
              id: '2-1',
              title: '게시판관리',
              children: [
                { id: '2-1-1', title: '1:1문의 기본', favorite: false },
                { id: '2-1-2', title: 'FAQ 기본', favorite: false },
                {
                  id: '2-1-3',
                  title: 'No1.공지사항 테스트 게시판',
                  favorite: false,
                },
              ],
            },
            { id: '2-2', title: '게시판 설정', favorite: false },
          ],
        },
        { id: '3', title: '메세지 관리', favorite: false },
      ],
    },
    {
      id: '4',
      title: '프로젝트',
      favorite: false,
    },
    {
      id: '5',
      title: 'sub menu 없는 1depth',
      favorite: false,
    },
  ];

  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleMenu = (id: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderMenu = (items: any[], depth = 0) => (
    <ul
      className={depth === 0 ? 'lnb-menu' : ''}
      style={depth === 0 ? { width: '300px' } : {}}
    >
      {items.map((item) => {
        const isOpen = openMenus[item.id];
        const hasChildren = item.children && item.children.length > 0;
        const isFavorite = favorites[item.id] || false;

        return (
          <li
            key={item.id}
            className={`${!hasChildren ? 'has-mark' : 'has-submenu'} ${isOpen ? 'active' : ''}`.trim()}
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (hasChildren) toggleMenu(item.id);
              }}
            >
              {item.title}
            </a>
            <i
              className={`ico-mark ${isFavorite ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(item.id);
              }}
            ></i>
            {hasChildren && isOpen && renderMenu(item.children, depth + 1)}
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="" style={{ marginLeft: '10px' }}>
      {renderMenu(menuData)}
    </div>
  );
};

export default LNB;
