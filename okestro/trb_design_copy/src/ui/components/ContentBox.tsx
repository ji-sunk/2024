import React, { useState } from 'react';
import Popup from '@/ui/components/Popup';
//import Test from '@/ui/components/Test';
//import MixedChartExample from './MixedChartExample';
const ContentBox = () => {
  const menuData = [
    {
      id: '0',
      title: '즐겨찾기',
      children: [
        {
          id: '1',
          title: 'FAQ 기본',
        },
        {
          id: '2',
          title: '1:1문의 기본',
        },
        {
          id: '3',
          title: 'No.1 공지사항 테스트 게시판',
        },
      ],
    },
  ];

  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const [favorites, setFavorites] = useState<Record<string, boolean>>({
    '1': true,
    '2': true,
    '3': true,
  });

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
              className={`ico-mark ${favorites[item.id] ? 'active' : ''}`}
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
    //className="lta"
    <div className="" style={{ marginLeft: '10px' }}>
      {/* <Test></Test> */}
      {renderMenu(menuData)}
    </div>
  );
};

export default ContentBox;
