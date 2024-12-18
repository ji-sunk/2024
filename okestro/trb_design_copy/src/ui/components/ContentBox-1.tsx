import React, { useState } from 'react';
import MarkFavorites from '@/ui/icon/MarkFavoritesIcon';

const ContentBox: React.FC = () => {
  const menuData = [
    {
      id: '1',
      title: '즐겨찾기',
      children: [
        { id: '1-1', title: '메뉴 1-1' },
        { id: '1-2', title: '메뉴 1-2' },
      ],
    },
  ];

  const [openMenu, setOpenMenu] = useState<Record<string, boolean>>({});
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleToggle = (id: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setOpenMenu((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleItemClick = (id: string) => {
    setSelectedItem(id);
  };

  const renderMenu = (items: any[], depth: number = 0) => {
    return (
      <ul className={`depth-${depth}`} style={{ paddingLeft: depth * 16 }}>
        {items.map((item) => (
          <li
            key={item.id}
            className={`menu-item depth-${depth} ${
              selectedItem === item.id ? 'selected' : ''
            }`}
            onClick={() => handleItemClick(item.id)}
            style={{
              cursor: 'pointer',
              listStyle: 'none',
              padding: '8px',
              border: '1px solid #ddd',
              margin: '4px 0',
              borderRadius: '4px',
              fontWeight: selectedItem === item.id ? 'bold' : 'normal',
              backgroundColor:
                selectedItem === item.id ? '#EBEDF4' : 'transparent',
            }}
          >
            <div
              className="menu-title"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              onClick={(e) => handleToggle(item.id, e)}
            >
              <span>{item.title}</span>
              {!item.children && (
                <MarkFavorites
                  color={selectedItem === item.id ? '#FFDA47' : '#D3D6E5'}
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
  };

  return <div>{renderMenu(menuData)}</div>;
};

export default ContentBox;
