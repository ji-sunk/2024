import React, { useState } from 'react';
import Header from '@/ui/layout/Header';
// import Popup from '@/ui/components/Popup';
import SwitchTab from '@/ui/components/SwitchTab';
import LnbBtnIcon from '@/ui/icon/LnbBtnIcon';
import DashBoardBox from '@/ui/layout/DashBoardBox';
import DashBoardGraphBox from '@/ui/layout/DashBoardGraphBox';

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState<React.ReactNode | null>(
    null,
  );
  const [isLnbOpen, setIsLnbOpen] = useState(false);
  const [IsMouseIn, setIsMouseIn] = useState(false);
  const [IsMouseOut, setIsMouseOut] = useState(false);

  // LNB 토글
  const toggleLNB = () => {
    setIsLnbOpen((prev) => !prev);
    setIsMouseIn(false);
    setIsMouseOut(false);
  };

  // 마우스 이벤트
  const handleMouseLeave = () => {
    setIsMouseIn(false);
    setIsMouseOut(true);
  };

  const handleMouseEnter = () => {
    setIsMouseIn(true);
    setIsMouseOut(false);
  };

  return (
    <div className="base-wrap">
      <Header />

      <div className="base-container" style={{ display: 'flex' }}>
        <aside
          className={`lnb ${isLnbOpen ? 'open' : 'closed'} ${
            IsMouseIn ? 'hovered' : ''
          } ${IsMouseOut ? 'hoveredOut' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* 버튼 */}
          <button className="lnb-btn" onClick={toggleLNB}>
            <LnbBtnIcon />
          </button>
          {/* 메뉴 */}
          {(isLnbOpen || IsMouseIn) && <SwitchTab />}
        </aside>

        <main className="base-main">
          <section className="base-grid">
            {children}
            {/* <button
              onClick={() => openPopup(<p>popup test</p>)}
              style={{ marginTop: '20px' }}
            >
              Open Popup
            </button> */}
            <DashBoardBox />
            <DashBoardGraphBox />
          </section>
        </main>
      </div>

      {/* <Popup isOpen={isPopupOpen} onClose={closePopup}>
        {popupContent}
      </Popup> */}
    </div>
  );
};

export default DefaultLayout;
