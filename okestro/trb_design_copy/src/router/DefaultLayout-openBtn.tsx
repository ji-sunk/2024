import React, { useState } from 'react';
import Header from '@/ui/layout/Header';
// import ContentBox from '@/ui/components/ContentBox';
// import LNB from '@/ui/layout/LNB';
import Popup from '@/ui/components/Popup';
import SwitchTab from '@/ui/components/SwitchTab';
import LnbBtnIcon from '@/ui/icon/LnbBtnIcon';

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // 팝업 상태 관리
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState<React.ReactNode | null>(
    null,
  );

  // LNB 토글 상태 관리
  const [isLnbOpen, setIsLnbOpen] = useState(true);

  // 팝업 열기 함수
  const openPopup = (content: React.ReactNode) => {
    setPopupContent(content);
    setIsPopupOpen(true);
  };

  // 팝업 닫기 함수
  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupContent(null);
  };

  // LNB 토글 함수
  const toggleLNB = () => {
    setIsLnbOpen((prev) => !prev);
  };

  return (
    <div className="wrap">
      {/* 헤더 */}
      <Header />

      {/* 레이아웃 구성 */}
      <div className="container" style={{ display: 'flex' }}>
        {/* LNB */}
        <aside
          className={`lnb ${isLnbOpen ? 'open' : 'closed'}`}
          style={{
            width: isLnbOpen ? '320px' : '32px',
            transition: 'width 0.3s ease',
          }}
        >
          <button onClick={toggleLNB} style={{ marginBottom: '10px' }}>
            <LnbBtnIcon />
          </button>
          {isLnbOpen && <SwitchTab />}
        </aside>

        {/* 메인 콘텐츠 */}
        <main className="layout-main">
          {children}

          {/* 팝업 테스트 버튼 */}
          <button
            onClick={() => openPopup(<p>popup test</p>)}
            style={{ marginTop: '20px' }}
          >
            Open Popup
          </button>
        </main>
      </div>

      {/* 팝업 컴포넌트 */}
      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        {popupContent}
      </Popup>
    </div>
  );
};

export default DefaultLayout;
