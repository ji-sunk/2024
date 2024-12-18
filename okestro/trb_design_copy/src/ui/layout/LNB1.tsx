import React, { useState } from 'react';
// import ContentBox from '@/ui/components/ContentBox';
import RightArrowIcon from '@/ui/icon/RightArrowIcon';
import MarkFavorites from '@/ui/icon/MarkFavoritesIcon';
import ZoomInIcon from '@/ui/icon/ZoomInIcon';

const LNB: React.FC = () => {
  const menuData = [
    {
      id: '0',
      title: '일반',
      children: [
        {
          id: '1',
          title: '메뉴 1',
          children: [
            {
              id: '1-1',
              title: '메뉴 1-1',
              children: [
                {
                  id: '1-1-1',
                  title: '메뉴 1-1-1',
                  children: [
                    { id: '1-1-1-1', title: '메뉴 1-1-1-1' },
                    { id: '1-1-1-2', title: '메뉴 1-1-1-2' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: '2',
      title: '빌드배포',
      children: [
        {
          id: '2-1',
          title: '메뉴 2-1',
          children: [{ id: '2-1-2-1', title: '메뉴 2-1-2-1' }],
        },
      ],
    },
    {
      id: '3',
      title: '하위뎁스없는1depth',
    },
  ];

  const [openMenu, setOpenMenu] = useState<Record<string, boolean>>({});
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

  const handleToggle = (
    id: string,
    event: React.MouseEvent | React.KeyboardEvent,
  ) => {
    event.stopPropagation();
    setOpenMenu((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    setSelectedMenu(id);
  };

  const renderMenu = (items: any[], depth: number = 0) => (
    <ul className={`depth-${depth}`} role="tree">
      {items.map((item) => (
        <li
          key={item.id}
          className={`menu-item depth-${depth} ${
            selectedMenu === item.id ? 'selected' : ''
          }`}
          role="treeitem"
          aria-expanded={!!openMenu[item.id]}
          aria-selected={selectedMenu === item.id}
          tabIndex={0}
          onClick={(e) => handleToggle(item.id, e)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') handleToggle(item.id, e);
          }}
          style={{
            cursor: 'pointer',
            listStyle: 'none',
            // padding: '4px',
            border: '1px solid #ddd',
            margin: '4px 0',
            borderRadius: '4px',
          }}
        >
          <div
            className="menu-title"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontWeight: selectedMenu === item.id ? 'bold' : 'normal',
            }}
          >
            <div className="ico-none">
              {item.children && (
                <RightArrowIcon
                  color={openMenu[item.id] ? '#6854b8' : 'gray'}
                  size={24}
                  style={{
                    transform: openMenu[item.id]
                      ? 'rotate(90deg)'
                      : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                  }}
                />
              )}
              <span>{item.title}</span>
            </div>
            {(!item.children || depth === 0) && (
              <MarkFavorites
                color={selectedMenu === item.id ? '#FFDA47' : '#D3D6E5'}
                size={24}
                style={{ cursor: 'pointer' }}
                aria-label="즐겨찾기"
              />
            )}
          </div>
          {item.children &&
            openMenu[item.id] &&
            renderMenu(item.children, depth + 1)}
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="lnb-menu" role="navigation" aria-label="사이드 메뉴">
      {renderMenu(menuData)}
      <ZoomInIcon></ZoomInIcon>
    </nav>
  );
};

export default LNB;
