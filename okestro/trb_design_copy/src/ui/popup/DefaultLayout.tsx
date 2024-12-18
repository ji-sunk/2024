import React, { useState } from 'react';
import Header from '@/ui/layout/Header';
import Popup from '@/ui/components/Popup';
import SwitchTab from '@/ui/components/SwitchTab';
import DashBoardTitie from '@/ui/components/DashBoardTitie';
import LnbBtnIcon from '@/ui/icon/LnbBtnIcon';

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState<React.ReactNode | null>(
    null,
  );
  const [isLnbOpen, setIsLnbOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredOut, setIsHoveredOut] = useState(false);

  // 팝업 열기 함수
  const openPopup = (content: React.ReactNode) => {
    setPopupContent(content);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupContent(null);
  };

  // LNB 토글
  const toggleLNB = () => {
    setIsLnbOpen((prev) => !prev);
    setIsHovered(false);
    setIsHoveredOut(false);
  };

  // 마우스 이벤트
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsHoveredOut(true);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsHoveredOut(false);
  };

  return (
    <div className="wrap">
      <Header />

      <div className="container" style={{ display: 'flex' }}>
        <aside
          className={`lnb ${isLnbOpen ? 'open' : 'closed'} ${
            isHovered ? 'hovered' : ''
          } ${isHoveredOut ? 'hoveredOut' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* 버튼 */}
          <button onClick={toggleLNB} style={{ marginBottom: '10px' }}>
            <LnbBtnIcon />
          </button>
          {/* 메뉴 */}
          {(isLnbOpen || isHovered) && <SwitchTab />}
        </aside>

        <main className="layout-main">
          {children}
          <button
            onClick={() => openPopup(<p>popup test</p>)}
            style={{ marginTop: '20px' }}
          >
            <DashBoardTitie></DashBoardTitie>
            Open Popup
          </button>
        </main>
      </div>

      {/* <Popup isOpen={isPopupOpen} onClose={closePopup}>
        {popupContent}
      </Popup> */}
    </div>
  );
};

export default DefaultLayout;
